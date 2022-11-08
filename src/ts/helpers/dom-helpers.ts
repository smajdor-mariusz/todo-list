import { List } from '../types';

export function createListEl(list: List, activeListId: string) {
  const listEl: HTMLLIElement = document.createElement('li');
  listEl.classList.add('lists__item');
  listEl.dataset.listId = list.id;
  if (list.id === activeListId) {
    listEl.classList.add('lists__item--active');
  }
  listEl.innerText = list.name;

  return listEl;
}
