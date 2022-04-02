<template>
  <div class="card p-20 d-flex justify-content-center align-items-center">
    <h1>La page A</h1>
    <div v-if="route.params">{{ route.params }}</div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<style scoped lang="scss">
.card {
  width: 100%;
  height: 300px;
}
</style>
