import { List } from '../types';

export function createListItemEl(list: List) {
  const listItemEl: HTMLLIElement = document.createElement('li');
  listItemEl.classList.add('lists__item');
  listItemEl.innerText = list.name;
  listItemEl.setAttribute('data-list-item', list.id);

  return listItemEl;
}
