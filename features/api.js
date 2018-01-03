import { AsyncStorage } from 'react-native';

export const DECKS_STORAGE_KEY = 'decks';

export function submitEntry(entry, key) {
  return AsyncStorage.mergeItem(
    DECKS_STORAGE_KEY,
    JSON.stringify({
      [key]: entry,
    }),
  );
}

export function removeEntry(key) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(results => {
    const data = JSON.parse(results);
    data[key] = undefined;
    delete data[key];
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data));
  });
}

export function getDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY);
}

export function clear() {
  return AsyncStorage.clear();
}
