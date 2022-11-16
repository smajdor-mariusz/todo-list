import { List, Task } from '../types';
import {
  createListItemEl,
  createTaskItemEl,
} from './create-elements.helpers.js';
import { setTasksBlock } from './set-tasks-block.helper.js';

export function render(lists: List[], activeListId: string) {
  renderList(lists, activeListId);
  activeListId && renderTask(lists, activeListId);
}

function renderList(lists: List[], activeListId: string) {
  const listsEl: HTMLUListElement = document.querySelector('[data-lists]');
  listsEl.innerHTML = null;

  lists.forEach((list: List) => {
    listsEl.appendChild(createListItemEl(list, activeListId));
  });
}

function renderTask(lists: List[], activeListId: string) {
  const tasksEl: HTMLUListElement = document.querySelector('[data-tasks]');
  tasksEl.innerHTML = null;

  const activeList: List = lists.find(list => list.id === activeListId);
  activeList.tasks.forEach((task: Task) =>
    tasksEl.appendChild(createTaskItemEl(task))
  );
  setTasksBlock(activeList.name);
}
