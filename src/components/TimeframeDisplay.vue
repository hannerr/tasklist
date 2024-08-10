<template>
    <div class="card-container">
      <div class="icon" v-for="(item, index) in timeframes" :key="index" :class="getWrapperClass(item.title)">
        <div class="card">
            <div>
              <p class="title"><span>{{ item.title }}</span><span>&bullet;&bullet;&bullet;</span></p>
              <p class="tf">
                <span class="current"><span>{{ item.timeframes[timeframe].current }}</span><span>Completed</span></span>
                <span class="previous">Last week: {{ item.timeframes[timeframe].previous }} <span class="completed">Completed</span></span>
              </p>
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