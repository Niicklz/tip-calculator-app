<template>
  <div class="price-card">
    <div class="price-card__final-amounts">
      <FinalAmount :title="`Tip Amount`" :final-amount="props.tipPerson" />
      <FinalAmount :title="`Total`" :final-amount="props.total" />
    </div>
    <button class="btn" @click="()=> props.onClick?.()">Reset</button>
  </div>
</template>

<script setup lang="ts">
import FinalAmount from "./FinalAmount.vue";
const props = defineProps({
  tipPerson: {
    type: Number,
  },
  total: {
    type: Number,
  },
  onClick: {
    type:Function
  }
});
</script>

<style scoped>
.price-card__final-amounts {
  display: flex;
  gap: 2rem;
  flex-direction: column;
}
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

.btn {
  background-color: var(--strong-cyan);
  border: none;
  padding: 0.5rem;
  border-radius: 8px;
  margin-top: 0.5rem;
  color: var(--very-dark-cyan);
  font-weight: bold;
  text-transform: uppercase;
  font-size: 18px;
  cursor: pointer;
}
.btn:hover {
  background-color: var(--very-light-grayish-cyan);
}

@media (min-width: 1024px) {
  .price-card {
    width: 50%;
  }
}
</style>
