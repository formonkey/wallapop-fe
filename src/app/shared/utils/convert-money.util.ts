export const convertMoneyUtil = (number: string) =>
  new Intl.NumberFormat('es-ES', {
    currency: 'EUR',
    style: 'currency',
  }).format(+number)
