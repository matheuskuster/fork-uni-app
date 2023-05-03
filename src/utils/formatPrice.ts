interface Params {
  showCurrency?: boolean;
}

export function formatPrice(value: number, params?: Params) {
  const { showCurrency = true } = params ?? {};

  const formattedValue = value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  if (showCurrency) {
    return formattedValue;
  }

  return formattedValue.replace('R$', '').trim();
}
