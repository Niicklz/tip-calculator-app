export const calculateTip = (params: { billValue: number; peopleValue: number; selectedPercentage: number }) => {
  if (params.billValue > 0 && params.peopleValue > 0 && params.selectedPercentage > 0) {
    const tipPerson = (params.billValue * params.selectedPercentage) / 100 / params.peopleValue;
    const total = tipPerson + params.billValue;

    return { tipPerson: formatNumber(tipPerson, currencyDecimal), total: formatNumber(total, currencyDecimal) };
  }
  return { tipPerson: "0", total: "0" };
};
export const currencyDecimal = 2;

export const formatNumber = (number: number, decimals: number) => {
  return number.toFixed(decimals);
};