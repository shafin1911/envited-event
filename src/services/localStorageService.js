/* eslint-disable no-undef */
export function getStorageValue(key, defaultValue) {
  // getting stored value
  const saved = localStorage.getItem(key);
  let initial = null;
  try {
    initial = JSON.parse(saved);
  } catch {
    initial = null;
  }
  if (initial) {
    return initial
  } else {
    return defaultValue
  }
}

export function setStorageValue(key, defaultValue) {
  // store value
  const value = getStorageValue(key, defaultValue);
  localStorage.setItem(key, JSON.stringify(value));
}

export function clearLocalStorage(key) {
  // clear a store value or clear full storage
  if (key) {
    localStorage.removeItem(key)
  } else {
    localStorage.clear()
  }
}
