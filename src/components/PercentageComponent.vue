<template>
  <button :class="{ 'percentage-container': true, 'selected': selectedPercentage === percentage}" @click="handleClick">
    <span>{{percentage}}%</span>
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  handleClick: {
    type: Function,
    required: false,
  },
  percentage: {
    type:Number,
    required:true
  },
  selectedPercentage: {
    type:Number
  }
});

const handleClick = () => {
  props.handleClick?.();
};
</script>

<style scoped>
.percentage-container {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  font-weight: bold;
  border-radius: 8px;
  width: calc(90%/2);
  height: 40px;
  background-color: var(--very-dark-cyan);
  cursor: pointer;
  transition: 0.2s ease;
  border: none;
}
.selected {
  background-color: var(--strong-cyan);
}
.percentage-container:hover {
  background-color: var(--strong-cyan);
}
</style>
