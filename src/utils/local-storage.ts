export const setToLocalStorage = (key: string, value: string) => {
  if (!key || typeof window === "undefined") {
    console.log("Failed to set item in local storage");
    return "";
  }
  return localStorage.setItem(key, value);
};

export const getFromLocalStorage = (key: string) => {
  if (!key || typeof window === "undefined") {
    console.log("Failed to get item from local storage");
    return "";
  }
  return localStorage.getItem(key);
};

export const removeFromLocalStorage = (key: string) => {
  return localStorage.removeItem(key);
};
