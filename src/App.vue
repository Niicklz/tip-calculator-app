<script setup lang="ts">
import TitleComponent from "./components/TitleComponent.vue";
import CardComponent from "./components/CardComponent.vue";
</script>

<template>
  <div class="container">
    <TitleComponent />
    <CardComponent />
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  background-color: var(--light-grayish-cyan);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media (min-width: 1024px) {
  .container {
    align-items: center;
  }
}
</style>
