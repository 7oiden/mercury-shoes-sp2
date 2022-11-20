//basket
export function getExistingBasket() {
  const items = localStorage.getItem("basket-items");

  if (!items) {
    return [];
  } else {
    return JSON.parse(items);
  }
}

export function saveBasket(items) {
    localStorage.setItem("basket-items", JSON.stringify(items));
}

//favorites
export function getExistingFavs() {
  const favs = localStorage.getItem("favorites");

  if (!favs) {
    return [];
  } else {
    return JSON.parse(favs);
  }
}

export function saveFavs(favs) {
    localStorage.setItem("favorites", JSON.stringify(favs));
  }

//admin login
const tokenKey = "token";
const userKey = "user";

export function saveToken(token) {
  saveToStorage(tokenKey, token);
}

export function getToken() {
  return getFromStorage(tokenKey);
}

export function saveUser(user) {
  saveToStorage(userKey, user);
}

export function getUsername() {
  const user = getFromStorage(userKey);

  if (user) {
    return user.username;
  }
  return null;
}

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getFromStorage(key) {
  const value = localStorage.getItem(key);

  if (!value) {
    return null;
  }

  return JSON.parse(value);
}

export function clearLoginStorage() {
  localStorage.removeItem(tokenKey);
  localStorage.removeItem(userKey);
}
