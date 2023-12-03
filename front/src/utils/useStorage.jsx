export function useStorage() {
  const setItem = (key, value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  const getItem = (key) => {
    const state = window.localStorage.getItem(key);
    return JSON.parse(state);
  };

  const removeItem = (key) => {
    window.localStorage.removeItem(key);
  };

  return { setItem, getItem, removeItem };
}
