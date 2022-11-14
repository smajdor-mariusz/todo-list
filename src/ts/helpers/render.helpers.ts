import { List } from '../types';
import { createListItemEl } from './create-elements.helpers';

export function renderList(lists: List[], activeListId: string) {
  const listEl: HTMLUListElement = document.querySelector('[data-lists]');

  lists.forEach(list => {
    if (list.rendered) return;
    list.rendered = true;
    listEl.appendChild(createListItemEl(list, activeListId));
  });
}
