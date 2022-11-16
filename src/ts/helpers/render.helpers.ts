import { List, Task } from '../types';
import {
  createListItemEl,
  createTaskItemEl,
} from './create-elements.helpers.js';

export function renderList(lists: List[], activeListId: string) {
  const listsEl: HTMLUListElement = document.querySelector('[data-lists]');

  const tasksContainerEl: HTMLDivElement = document.querySelector(
    '[data-tasks-container]'
  );
  if (activeListId == null) tasksContainerEl.classList.add('tasks--hidden');

  lists.forEach((list: List) => {
    if (list.rendered) return;
    list.rendered = true;
    listsEl.appendChild(createListItemEl(list));
  });
}

export function renderTask(tasks: Task[]) {
  const tasksEl: HTMLUListElement = document.querySelector('[data-tasks]');

  tasks.forEach((task: Task) => {
    if (task.rendered) return;
    task.rendered = true;
    tasksEl.appendChild(createTaskItemEl(task));
  });
}
