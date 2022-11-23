import { List } from './types';
import { saveAndRender } from './helpers/render.helpers.js';
import { bindForm } from './utils/bindForm.js';
import { ACTIVE_LIST_KEY, LISTS_KEY } from './helpers/local-storage.helper.js';
import {
  addNewList,
  addNewTask,
  clearCompletedTasks,
  deleteList,
  deleteTask,
  toggleTaskDone,
} from './helpers/task.helpers';

let lists: List[] = JSON.parse(localStorage.getItem(LISTS_KEY)) || [];
let activeListId: string = JSON.parse(localStorage.getItem(ACTIVE_LIST_KEY));

function bindToggleButtons() {
  const toggleButtonEls = document.querySelectorAll('[data-toggle]');
  toggleButtonEls.forEach((button: HTMLButtonElement, index: number) => {
    button.addEventListener('click', () => {
      toggleTaskDone(index.toString(), lists, activeListId, bindTaskEvents);
    });
  });
}

function bindDeleteButtons() {
  const deleteButtonsEls = document.querySelectorAll('[data-delete]');
  deleteButtonsEls.forEach((button: HTMLButtonElement, index: number) => {
    button.addEventListener('click', () => {
      deleteTask(index, lists, activeListId, bindTaskEvents);
    });
  });
}

function bindTaskEvents() {
  bindToggleButtons();
  bindDeleteButtons();
}

function bindListEvents() {
  clearCompletedTasks(lists, activeListId, bindTaskEvents);
  deleteList(activeListId, lists, bindTaskEvents);
}

function init() {
  const listsEl: HTMLUListElement = document.querySelector('[data-lists]');
  listsEl.addEventListener('click', (event: Event) => {
    const targetEl = event.target as HTMLLIElement;
    activeListId = targetEl.getAttribute('data-list-item');
    saveAndRender(lists, activeListId, bindTaskEvents);
  });

  bindForm('list', addNewList);
  bindForm('task', addNewTask);
  bindListEvents();
  saveAndRender(lists, activeListId, bindTaskEvents);
}

init();
