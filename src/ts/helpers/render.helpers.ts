import { List, Task } from '../types';
import {
  createListItemEl,
  createTaskItemEl,
} from './create-elements.helpers.js';

export function render(lists: List[], activeListId: string) {
  const activeList = lists.find(list => list.id === activeListId);

  renderList(lists, activeListId);
  activeList && renderTask(activeList.tasks);
}

function renderList(lists: List[], activeListId: string) {
  const listsEl: HTMLUListElement = document.querySelector('[data-lists]');

  listsEl.innerHTML = null;
  const tasksContainerEl: HTMLDivElement = document.querySelector(
    '[data-tasks-container]'
  );
  if (!activeListId) tasksContainerEl.classList.add('tasks--hidden');

  lists.forEach((list: List) => {
    listsEl.appendChild(createListItemEl(list));
  });
}

function renderTask(tasks: Task[]) {
  const tasksEl: HTMLUListElement = document.querySelector('[data-tasks]');

  tasks.forEach((task: Task) => {
    tasksEl.appendChild(createTaskItemEl(task));
  });
}
