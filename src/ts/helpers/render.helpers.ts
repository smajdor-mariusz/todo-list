import { List } from '../types';
import {
  createListItemEl,
  createTaskItemEl,
} from './create-elements.helpers.js';
import { setTasksBlock } from './set-tasks-block.helper.js';

export function render(
  lists: List[],
  activeListId: string,
  bindToggleButtons: Function
) {
  renderList(lists, activeListId);
  activeListId && renderTask(lists, activeListId, bindToggleButtons);
}

function renderList(lists: List[], activeListId: string) {
  const listsEl: HTMLUListElement = document.querySelector('[data-lists]');
  listsEl.innerHTML = null;

  lists.forEach((list: List) => {
    listsEl.appendChild(createListItemEl(list, activeListId));
  });
}

function renderTask(
  lists: List[],
  activeListId: string,
  bindToggleButtons: Function
) {
  const tasksEl: HTMLUListElement = document.querySelector('[data-tasks]');
  tasksEl.innerHTML = null;

  const activeList: List = lists.find(list => list.id === activeListId);
  activeList.tasks.forEach((task, index) =>
    tasksEl.appendChild(createTaskItemEl(task, index))
  );
  setTasksBlock(activeList.name);
  bindToggleButtons();
}
