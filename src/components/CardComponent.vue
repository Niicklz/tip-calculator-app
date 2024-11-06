<template>
  <section class="card">
    <div class="left-container">
      <input-component
        title="Bill"
        :icon="dolar"
        :maxNumber="250"
        @input-change="handleChangeBill"
        :value="billValue"
      />

      <div class="options-container">
        <percentage-component
          v-for="item in percentages"
          :key="item.id"
          :percentage="item.percentage"
          :selectedPercentage="selectedPercentage"
          :handle-click="() => handleSelectedPercentage(item.percentage)"
        />
      </div>

      <input-component
        title="Number of People"
        :icon="persona"
        :maxNumber="10"
        @input-change="handleChangePeople"
        :value="peopleValue"
      />
    </div>

    <total-prices :tip-person="tipPerson" :total="total" :onclick="resetValues" />
  </section>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import InputComponent from "./InputComponent.vue";
import PercentageComponent from "./PercentageComponent.vue";
import TotalPrices from "./TotalPrices.vue";

const handleSelectedPercentage = (value: number) => {
  selectedPercentage.value = value;
};

const resetValues = () => {
  selectedPercentage.value = 0;
  peopleValue.value = 0;
  billValue.value = 0;
};

const handleChangeBill = (value: number) => {
  billValue.value = value;
};
const handleChangePeople = (value: number) => {
  if (value > 0) {
    peopleValue.value = value;
  }
};
const calculateTip = () => {
  if (billValue.value > 0 && peopleValue.value > 0 && selectedPercentage.value > 0) {
    tipPerson.value = (billValue.value * (selectedPercentage.value / 100)) / peopleValue.value;
    total.value = tipPerson.value + billValue.value;

    return;
  }
  tipPerson.value = 0;
  total.value = 0;
};

const selectedPercentage = ref(0);
const peopleValue = ref(0);
const billValue = ref(0);
const tipPerson = ref(0);
const total = ref(0);

const percentages = [
  { id: 1, percentage: 5 },
  { id: 2, percentage: 10 },
  { id: 3, percentage: 15 },
  { id: 4, percentage: 25 },
  { id: 5, percentage: 50 },
];

watch([peopleValue, billValue, selectedPercentage], () => {
  calculateTip();
});

const dolar = "/src/icon-dollar.svg";
const persona = "/src/icon-person.svg";
</script>

<style scoped>
.options-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
  gap: 0.3rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.card {
  width: 100%;
  height: 100%;
  background-color: var(--white);
  border-radius: 24px 24px 0 0;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
}

@media (min-width: 1024px) {
  .card {
    max-width: 700px;
    max-height: 400px;
    border-radius: 24px 24px 24px 24px;
    flex-direction: row;
    gap: 1rem;
  }
  .left-container {
    width: 50%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
}
</style>
