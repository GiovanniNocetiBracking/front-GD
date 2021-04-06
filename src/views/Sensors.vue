<template>
  <div>
    <div>{{ sensorData.data }}</div>
  </div>
</template>
<script>
import db from "../FireConfig";
export default {
  name: "app",
  data() {
    return {
      sensorData: {
        data: null,
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