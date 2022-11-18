import { List } from '../types';
import {
  createListItemEl,
  createTaskItemEl,
  setTasksBlock,
} from './dom.helpers.js';
import { saveInLocalStorage } from './local-storage.helper.js';

export function saveAndRender(
  lists: List[],
  activeListId: string,
  bindToggleButtons: Function
) {
  render(lists, activeListId, bindToggleButtons);
  saveInLocalStorage(lists, activeListId);
}

function render(
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
  activeList.tasks.forEach(task => tasksEl.appendChild(createTaskItemEl(task)));
  setTasksBlock(activeList.name);
  bindToggleButtons();
}
