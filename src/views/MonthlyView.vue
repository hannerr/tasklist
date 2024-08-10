<template>
  <TimeframeDisplay :timeframes="timeframes" timeframe="monthly" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { timeframes } from '../assets/timeframes';
import TimeframeDisplay from '../components/TimeframeDisplay.vue';

export default defineComponent({
name: 'MonthlyView',
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