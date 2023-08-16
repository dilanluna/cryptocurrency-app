export function formatCurrency(value: number) {
  const formatter = new Intl.NumberFormat('es-US', {
    currency: 'USD',
    style: 'currency',
  });
  return formatter.format(value);
}

export function formatPercet(value: number) {
  const formatter = new Intl.NumberFormat('es-US', {
    style: 'percent',
    minimumFractionDigits: 2,
  });
  return formatter.format(value);
}
