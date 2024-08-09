<template>
    <TimeframeDisplay :timeframes="timeframes" timeframe="weekly" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { timeframes } from '../assets/timeframes';
import TimeframeDisplay from '../components/TimeframeDisplay.vue';

export default defineComponent({
  name: 'WeeklyView',
  components: {
    TimeframeDisplay
  },
  data() {
    return {
      timeframes
    };
  }
});
</script>

<style scoped>
/* Your styles here */
</style>