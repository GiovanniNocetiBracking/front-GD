<template>
  <div
    class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg"
  >
    <div class="flex-auto p-4">
      <div class="flex flex-wrap">
        <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
          <h5 class="text-gray-500 uppercase font-bold text-xs">
            {{ statSubtitle }}
          </h5>
          <span class="font-semibold text-xl text-gray-800">
            {{ sensorData.co }}
          </span>
        </div>
        <div class="relative w-auto pl-4 flex-initial">
          <div
            class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full"
            :class="[statIconColor]"
          >
            <i :class="[statIconName]"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import db from "../../FireConfig";
export default {
  name: "card-stats-co",
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
  props: {
    statSubtitle: {
      type: String,
      default: "Monoxido de Carbono",
    },
    statDescripiron: {
      type: String,
      default: "Since last month",
    },
    statIconName: {
      type: String,
      default: "fas fa-skull-crossbones",
    },
    // can be any of the background color utilities
    // from tailwindcss
    statIconColor: {
      type: String,
      default: "bg-black",
    },
  },
};
</script>
