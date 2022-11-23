import { lists, activeListId } from '../app';
import { List } from '../types';
import { saveInLocalStorage } from './local-storage.helpers.js';
import { bindTaskEvents } from './bind-event.helpers';
import {
  createListItemEl,
  createTaskItemEl,
  setTasksBlock,
} from './dom.helpers.js';

export function saveAndRender() {
  render();
  saveInLocalStorage();
}

function render() {
  renderList();
  renderTask();
}

function renderList() {
  const listsEl: HTMLUListElement = document.querySelector('[data-lists]');
  listsEl.innerHTML = null;

  lists.forEach((list: List) => {
    listsEl.appendChild(createListItemEl(list));
  });
}

function renderTask() {
  const activeList: List = lists.find(list => list.id === activeListId);
  if (activeListId) {
    const tasksEl: HTMLUListElement = document.querySelector('[data-tasks]');
    tasksEl.innerHTML = null;

    activeList.tasks.forEach(task =>
      tasksEl.appendChild(createTaskItemEl(task))
    );
  }
  setTasksBlock(activeList);
  bindTaskEvents();
}
