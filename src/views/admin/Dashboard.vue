<template>
  <div>
    <div class="flex flex-wrap">
      <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
        <card-line-chart />
      </div>
    </div>
  </div>
</template>
<script>
import CardLineChart from "@/components/Cards/CardLineChart.vue";
export default {
  name: "dashboard-page",
  components: {
    CardLineChart,
  },
};
</script>
