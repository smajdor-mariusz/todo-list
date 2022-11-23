import { List } from '../types';
import { saveInLocalStorage } from './local-storage.helper.js';
import { bindTaskEvents } from './bind-event.helpers';
import {
  createListItemEl,
  createTaskItemEl,
  setTasksBlock,
} from './dom.helpers.js';

export function saveAndRender(lists: List[], activeListId: string) {
  render(lists, activeListId);
  saveInLocalStorage(lists, activeListId);
}

function render(lists: List[], activeListId: string) {
  renderList(lists, activeListId);
  renderTask(lists, activeListId);
}

function renderList(lists: List[], activeListId: string) {
  const listsEl: HTMLUListElement = document.querySelector('[data-lists]');
  listsEl.innerHTML = null;

  lists.forEach((list: List) => {
    listsEl.appendChild(createListItemEl(list, activeListId));
  });
}

function renderTask(lists: List[], activeListId: string) {
  const activeList: List = lists.find(list => list.id === activeListId);
  if (activeListId) {
    const tasksEl: HTMLUListElement = document.querySelector('[data-tasks]');
    tasksEl.innerHTML = null;

    activeList.tasks.forEach(task =>
      tasksEl.appendChild(createTaskItemEl(task))
    );
  }
  setTasksBlock(activeList);
  bindTaskEvents(lists, activeListId);
}
