<template>
  <section class="card">
    <div class="left-container">
      <input-component title="Bill" :icon="dolar" :maxNumber="3" v-model="billValue" />

      <div class="options-container">
        <percentage-component
          v-for="item in percentages"
          :key="item.id"
          :percentage="item.percentage.toString()"
          :selectedPercentage="selectedPercentage"
          :handle-click="() => handleSelectedPercentage(item.percentage)"
        />
      </div>

      <input-component title="Number of People" :icon="personaIcon" :maxNumber="2" v-model="peopleValue" />
    </div>

    <total-prices>
      <div class="price-card__final-amounts">
        <FinalAmount title="Tip Amount" :final-amount="tipPerson" />
        <FinalAmount title="Total" :final-amount="total" />
      </div>
      <button class="btn" @click="resetValues">Reset</button>
    </total-prices>
  </section>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import InputComponent from "./InputComponent.vue";
import PercentageComponent from "./PercentageComponent.vue";
import TotalPrices from "./TotalPrices.vue";
import FinalAmount from "./FinalAmount.vue";
import personaIcon from "../../public/assets/icon-person.svg";
import dolar from "../../public/assets/icon-dollar.svg";
import { calculateTip } from "../utils/utilities";

const handleSelectedPercentage = (value: number) => {
  selectedPercentage.value = value.toString();
};

const resetValues = () => {
  selectedPercentage.value = "0";
  peopleValue.value = "0";
  billValue.value = "0";
};

const handleCalculateTip = () => {
  const { tipPerson: tipPersonCalculated, total: totalCalculated } = calculateTip({
    billValue: Number(billValue.value),
    peopleValue: Number(peopleValue.value),
    selectedPercentage: Number(selectedPercentage.value),
  });
  tipPerson.value = tipPersonCalculated;
  total.value = totalCalculated;
};

const selectedPercentage = ref("0");
const peopleValue = ref("0");
const billValue = ref("0");
const tipPerson = ref("0");
const total = ref("0");

const percentages = [
  { id: 1, percentage: 5 },
  { id: 2, percentage: 10 },
  { id: 3, percentage: 15 },
  { id: 4, percentage: 25 },
  { id: 5, percentage: 50 },
];

watch([peopleValue, billValue, selectedPercentage], handleCalculateTip);
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
.price-card__final-amounts {
  display: flex;
  gap: 2rem;
  flex-direction: column;
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
