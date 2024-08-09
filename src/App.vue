<template>
  <div class="app-container">
    <div class="left-card">
      <div class="top">
        <div class="avatar"></div>
        <p>Report for</p>
        <h1>{{ name }}</h1>
      </div>
      <nav>
        <router-link to="/">Daily</router-link>
        <router-link to="/weekly">Weekly</router-link>
        <router-link to="/monthly">Monthly</router-link>
      </nav>
    </div>
    <div>
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'App',
  data() {
    return {
      name: 'Stacey Castillo'
    };
  }
});
</script>