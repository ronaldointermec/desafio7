const formatValue = (value: number): string =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    minimumFractionDigits: 2,
    currency: 'BRL',
  }).format(value); // TODO

export default formatValue;

// - R$ 5.500,00
// const formatValue = (value: number): string =>
//   Intl.NumberFormat().format(value); // TODO

// export default formatValue;
