import { lists, activeListId } from '../app.js';
import { ACTIVE_LIST_KEY, LISTS_KEY } from '../constants.js';

export function saveInLocalStorage() {
  localStorage.setItem(LISTS_KEY, JSON.stringify(lists));
  localStorage.setItem(ACTIVE_LIST_KEY, JSON.stringify(activeListId));
}

export const loadFromLocalStorage = (key: string) =>
  JSON.parse(localStorage.getItem(key));
