<template>
    <div class="card-container">
      <div class="wrapper icon" v-for="(item, index) in timeframes" :key="index" :class="getWrapperClass(item.title)">
        <div class="card">
            <div v-if="item.timeframes[timeframe].current > 0">
            <p class="title">{{ item.title }}</p>
            <p class="current">{{ item.timeframes[timeframe].current }} Completed</p>
            <p class="previous">Last week: {{ item.timeframes[timeframe].previous }} Completed</p>
            </div>
            <div v-else>
            <p class="no-data title">Sorry - no data available for {{ item.title }}</p>
            </div>
        </div>
        
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType } from 'vue';
  
  export default defineComponent({
    name: 'TimeframeDisplay',
    props: {
      timeframes: {
        type: Array as PropType<Array<any>>,
        required: true
      },
      timeframe: {
        type: String as PropType<'daily' | 'weekly' | 'monthly'>,
        required: true
      }
    },
    methods: {
    getWrapperClass(title: string) {
      return title.toLowerCase(); 
    }
  }
  });
  </script>
  
  <style scoped>
  
  </style>