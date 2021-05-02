<template>
  <div>
    <h1>Lectura de los sensores en tiempo real:</h1>
    <h2>Monoxido de carbono:</h2>
    <div>{{ sensorData.co }}</div>
    <h2>Gases deribados del petroleo:</h2>
    <div>{{ sensorData.lpg }}</div>
    <h2>Humo:</h2>
    <div>{{ sensorData.smoke }}</div>
  </div>
</template>
<script>
import db from "../FireConfig";
export default {
  name: "app",
  data() {
    return {
      sensorData: {
        co: null,
        lpg: null,
        smoke: null,
      },
    };
  },
  firebase: {
    sensorData: db.ref("Sensor1"),
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
</style>