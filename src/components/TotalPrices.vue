<template>
  <div class="price-card">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">


</script>

<style scoped>
.price-card {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  min-height: 200px;
  background-color: var(--very-dark-cyan);
  border-radius: 8px;
  padding: 1rem;
}



@media (min-width: 1024px) {
  .price-card {
    width: 50%;
  }
}
</style>
