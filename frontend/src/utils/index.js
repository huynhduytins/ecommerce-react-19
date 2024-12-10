export function getIntl () {
  const intl = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return intl;
};
