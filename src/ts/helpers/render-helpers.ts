import { List } from '../types';
import { createListEl, createTaskEl } from './dom-helpers.js';

export function renderLists(
  listsEl: HTMLUListElement,
  lists: List[],
  activeListId: string
) {
  listsEl.innerHTML = '';
  lists.forEach((list: List) =>
    listsEl.appendChild(createListEl(list, activeListId))
  );
  renderTasks(lists, activeListId);
}

export function renderTasks(lists: List[], activeListId: string) {
  const tasksEl = document.querySelector('[data-tasks]');

  const tasks = lists.find(list => list.id === activeListId).tasks;
  tasksEl.innerHTML = '';
  tasks.forEach(task => tasksEl.appendChild(createTaskEl(task)));
}
