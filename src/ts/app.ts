import { List } from './types';
import { saveAndRender } from './helpers/render.helpers.js';
import { createNewItem } from './utils/createNewItem.js';
import { bindForm } from './utils/bindForm.js';
import { ACTIVE_LIST_KEY, LISTS_KEY } from './helpers/local-storage.helper.js';
import { addNewList } from './helpers/task.helpers';

let lists: List[] = JSON.parse(localStorage.getItem(LISTS_KEY)) || [];
let activeListId: string = JSON.parse(localStorage.getItem(ACTIVE_LIST_KEY));

function addNewTask() {
  const newTaskName: string = createNewItem('[data-task-input]');
  if (!newTaskName) return;
  const activeList = lists.find(list => list.id === activeListId);
  activeList.tasks.push({
    name: newTaskName,
    done: false,
  });
  saveAndRender(lists, activeListId, bindTaskEvents);
}

function toggleTaskDone(index: string) {
  const activeList = lists.find(list => list.id === activeListId);
  activeList.tasks[index].done = !activeList.tasks[index].done;
  saveAndRender(lists, activeListId, bindTaskEvents);
}

function deleteTask(index: number) {
  const activeList = lists.find(list => list.id === activeListId);
  activeList.tasks.splice(index, 1);
  saveAndRender(lists, activeListId, bindTaskEvents);
}

function clearCompletedTasks() {
  const clearCompletedButtonEl: HTMLButtonElement = document.querySelector(
    '[data-clear-completed]'
  );
  clearCompletedButtonEl.addEventListener('click', () => {
    const activeList = lists.find(list => list.id === activeListId);
    lists.find(list => list.id === activeListId).tasks =
      activeList.tasks.filter(task => task.done === false);

    saveAndRender(lists, activeListId, bindTaskEvents);
  });
}

function deleteList() {
  const deleteListBtnEl: HTMLButtonElement =
    document.querySelector('[data-delete-list]');
  deleteListBtnEl.addEventListener('click', () => {
    lists = lists.filter(list => list.id !== activeListId);
    activeListId = null;
    saveAndRender(lists, activeListId, bindTaskEvents);
  });
}

function bindToggleButtons() {
  const toggleButtonEls = document.querySelectorAll('[data-toggle]');
  toggleButtonEls.forEach((button: HTMLButtonElement, index: number) => {
    button.addEventListener('click', () => {
      toggleTaskDone(index.toString());
    });
  });
}

function bindDeleteButtons() {
  const deleteButtonsEls = document.querySelectorAll('[data-delete]');
  deleteButtonsEls.forEach((button: HTMLButtonElement, index: number) => {
    button.addEventListener('click', () => {
      deleteTask(index);
    });
  });
}

function bindTaskEvents() {
  bindToggleButtons();
  bindDeleteButtons();
}

function bindListEvents() {
  clearCompletedTasks();
  deleteList();
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
