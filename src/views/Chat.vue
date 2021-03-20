<template>
  <div>
    <h1>Bienvenido al chat</h1>
    <input
      type="text"
      v-model="inputMessage"
      placeholder="escriba su mensaje aqui"
    />
    <button @click="sendMessage(inputMessage)">enviar</button>
    <hr />
    <ul>
      <li v-bind:key="m" v-for="m in messages">{{ m }}</li>
    </ul>
  </div>
</template>

<script>
import Ws from "@adonisjs/websocket-client";
const ws = Ws("ws://localhost:3333");
export default {
  async created() {
    this.initializeChatWs();
  },
  data: () => ({
    chat: null,
    inputMessage: "Hello world",
    messages: ["Bienvenido al chat : the sick chat"],
  }),
  methods: {
    initializeChatWs: async function () {
      ws.connect();
      this.chat = ws.subscribe("chat");
      let chat = this.chat;
      chat.on("ready", () => {
        this.sendMessage("hello");
      });
      chat.on("message", (event) => {
        this.receiveMessage(event);
      });
    },
    sendMessage: async function (message) {
      this.chat.emit("message", message);
    },
    receiveMessage: async function (msg) {
      this.messages.push(msg);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>