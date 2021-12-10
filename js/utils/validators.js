export function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

export function validateNumber(priceValue) {
  const regEx = /^-?\d+\.?\d*$/;
  const patternMatches = regEx.test(priceValue);
  return patternMatches;
}
