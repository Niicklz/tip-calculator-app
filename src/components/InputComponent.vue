<template>
  <div class="container">
    <label for="">{{ props.title }}</label>
    <div class="input-container">
      <input
        class="input-container__input"
        type="number"
        min="0"
        @input="(e) => validateNumber(e, props.maxNumber)"
        v-model="numberValue"
      />
      <img :src="props.icon" alt="icon-img" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const numberValue = ref(0);

const emits = defineEmits(["inputChange"]);

function validateNumber(e: any, maxNumber: number) {
  console.log(props.value);

  if (numberValue.value > maxNumber) {
    numberValue.value = maxNumber;
    e.target.value = maxNumber;
  }

  emits("inputChange", numberValue.value);
}
const props = defineProps({
  title: {
    type: String,
  },
  icon: {
    type: String,
  },
  maxNumber: {
    type: Number,
    required: true,
  },
  value: {
    type: Number,
  },
});
</script>

<style scoped>
.input-container {
  position: relative;
  width: 100%;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.input-container input {
  padding: 12px;
  text-align: right;
  padding-left: 2rem;
  background-color: var(--light-grayish-cyan);
  border: none;
  border-radius: 8px;
  color: var(--very-dark-cyan);
  font-weight: bold;
  width: 100%;
}

.input-container img {
  position: absolute;
  left: 12px;
  transform: translateY(-80%);
  bottom: 0;
}
label {
  text-transform: capitalize;
  color: var(--dark-grayish-cyan);
  font-weight: bold;
}
</style>
