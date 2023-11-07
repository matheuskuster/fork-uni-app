export function getDevelopmentURL() {
  return `https://api-dev.voudevanes.com.br/`;
}

export function getProductionURL() {
  return `https://api.voudevanes.com.br/`;
}

export function getURL() {
  const env = process.env.NODE_ENV;

  if (env === 'development') {
    return getDevelopmentURL();
  }

  return getProductionURL();
}
