export const calculateTip = (params: { billValue: number; peopleValue: number; selectedPercentage: number }) => {
  if (params.billValue > 0 && params.peopleValue > 0 && params.selectedPercentage > 0) {
    const tipPerson = (params.billValue * params.selectedPercentage) / 100 / params.peopleValue;
    const total = tipPerson + params.billValue;

    return { tipPerson: tipPerson.toFixed(2), total: total.toFixed(2) };
  }
  return { tipPerson: "0", total: "0" };
};
