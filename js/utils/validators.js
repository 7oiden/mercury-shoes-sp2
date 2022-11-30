export function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

export function checkMaxLength(value, len) {
  if (value.trim().length < len) {
    return true;
  } else {
    return false;
  }
}

export function validateNumber(value) {
  const regEx = /^-?\d+\.?\d*$/;
  const patternMatches = regEx.test(value);
  return patternMatches;
}

export function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
