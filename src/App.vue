<template>
  <div class="app-container">
    <div class="left-card">
      <div class="top">
        <div class="avatar"></div>
        <div class="headline">
          <p>Report for</p>
          <h1>{{ name }}</h1>
        </div>
      </div>
      <nav>
        <router-link to="/">Daily</router-link>
        <router-link to="/weekly">Weekly</router-link>
        <router-link to="/monthly">Monthly</router-link>
      </nav>
    </div>
    <router-view/>
  </div>
</template>

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