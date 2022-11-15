import { List } from '../types';
import { createListItemEl } from './create-elements.helpers.js';

export function renderList(lists: List[], activeListId: string) {
  const listEl: HTMLUListElement = document.querySelector('[data-lists]');

  const tasksContainerEl: HTMLDivElement = document.querySelector(
    '[data-tasks-container]'
  );
  if (activeListId == null) tasksContainerEl.classList.add('tasks--hidden');

  lists.forEach((list: List) => {
    if (list.rendered) return;
    list.rendered = true;
    listEl.appendChild(createListItemEl(list));
  });
}
