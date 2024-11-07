<template>
  <div class="container">
    <label for="">{{ props.title }}</label>
    <div class="input-container">
      <input
        class="input-container__input"
        type="text"
        :value="props.modelValue"
        @input="( e) => handleChange((e.target as HTMLInputElement).value)"
        @keypress="handleKeypress"
      />
      <img :src="props.icon" alt="icon-img" />
    </div>
  </div>
</template>

<script setup lang="ts">
function isNumberKey(e: KeyboardEvent) {
  const keyCode = e.keyCode == 0 ? e.charCode : e.keyCode;

  return (
    (keyCode >= 37 && keyCode <= 40) ||
    keyCode == 8 ||
    keyCode == 9 ||
    keyCode == 13 ||
    (keyCode >= 48 && keyCode <= 57)
  );
}

function digitKeyOnly(e: KeyboardEvent, value: string) {
  const numberValue = Number(value + e.key) || 0;

  if (isNumberKey(e)) {
    return isValidNumber(numberValue, Number(props.maxNumber));
  }
  return false;
}

function isValidNumber(number: number, len: number) {
  return number.toString().length <= len ? true : false;
}
function handleChange(newValue: string) {
  let value = newValue.toString();

  const maxlength = Number(props.maxNumber);

  if (value.length >= Number(props.maxNumber)) {
    value = value.slice(0, maxlength);
  }

  emits("update:model-value", value);
}
function handleKeypress(event: KeyboardEvent) {
  const element = event.target as HTMLInputElement;
  const inputValue = element.value;
  const documentSelection = document.getSelection()?.toString();

  if (inputValue && documentSelection === inputValue) {
    event.preventDefault();
    return emits("update:model-value", "");
  }

  if (event.key === "Enter") {
    return;
  }

  const hasReachedMaxLength = Number(inputValue.length) >= Number(props.maxNumber);
  const isNotNumberKey = !digitKeyOnly(event, inputValue);

  if (hasReachedMaxLength || isNotNumberKey) {
    event.preventDefault();
  }
}

const emits = defineEmits(["update:model-value"]);


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

  modelValue: {
    type: String,
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
