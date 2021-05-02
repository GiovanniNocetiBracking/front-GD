<template>
  <!-- Header -->
  <div class="relative bg-blue-600 md:pt-32 pb-32 pt-12">
    <div class="px-4 md:px-10 mx-auto w-full">
      <div>
        <!-- Card stats -->
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <card-stats />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <card-stats-smoke />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <card-stats-co />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardStats from "@/components/Cards/CardStats.vue";
import CardStatsSmoke from "@/components/Cards/CardStatsSmoke.vue";
import CardStatsCo from "@/components/Cards/CardStatsCo.vue";

export default {
  components: {
    CardStats,
    CardStatsSmoke,
    CardStatsCo,
  },
};
</script>
