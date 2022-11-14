import { List } from '../types';

export function createListItemEl(list: List, activeListId: string) {
  const listItemEl: HTMLLIElement = document.createElement('li');
  listItemEl.classList.add('lists__item');
  listItemEl.innerText = list.name;
  listItemEl.addEventListener('click', () => {
    const activeEl = document.querySelector('.lists__item--active');
    if (activeEl) activeEl.classList.remove('lists__item--active');
    listItemEl.classList.add('lists__item--active');
    activeListId = list.id;
  });
  return listItemEl;
}
