<template>
  <div class="container">
    <div class="title-container">
      <h2>{{ title }}</h2>
      <span>/ person</span>
    </div>
    <span class="final-amount">${{ props.finalAmount ? formatNumber(Number(props.finalAmount), currencyDecimal) : "0" }}</span>
  </div>
</template>

<script setup lang="ts">
import { currencyDecimal, formatNumber } from '../utils/utilities';



const props = defineProps({
  finalAmount: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.title-container h2 {
  color: var(--white);
  font-size: 16px;
}

.title-container span {
  color: var(--grayish-cyan);
  font-size: 12px;
  font-weight: bold;
}
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.final-amount {
  display: block;
  color: var(--strong-cyan);
  font-weight: bold;
  font-size: 24px;
}
</style>
