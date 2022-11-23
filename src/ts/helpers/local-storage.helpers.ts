import { lists, activeListId } from '../app';
import { ACTIVE_LIST_KEY, LISTS_KEY } from '../constants';

export function saveInLocalStorage() {
  localStorage.setItem(LISTS_KEY, JSON.stringify(lists));
  localStorage.setItem(ACTIVE_LIST_KEY, JSON.stringify(activeListId));
}

export const loadFromLocalStorage = (key: string) =>
  JSON.parse(localStorage.getItem(key));
