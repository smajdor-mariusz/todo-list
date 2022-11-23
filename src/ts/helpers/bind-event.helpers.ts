import {
  clearCompletedTasks,
  deleteList,
  deleteTask,
  toggleTaskDone,
} from '../helpers/task.helpers';
import { List } from '../types';

export function bindTaskEvents(list: List[], activeListId: string) {
  bindToggleButtons(list, activeListId);
  bindDeleteButtons(list, activeListId);
}

export function bindListEvents(lists: List[], activeListId: string) {
  bindClearCompletedTasksButton(lists, activeListId);
  bindDeleteListButton(lists, activeListId);
}

function bindClearCompletedTasksButton(lists: List[], activeListId: string) {
  const clearCompletedButtonEl: HTMLButtonElement = document.querySelector(
    '[data-clear-completed]'
  );
  clearCompletedButtonEl.addEventListener('click', () => {
    clearCompletedTasks(lists, activeListId);
  });
}

function bindDeleteListButton(lists: List[], activeListId: string) {
  const deleteListBtnEl: HTMLButtonElement =
    document.querySelector('[data-delete-list]');
  deleteListBtnEl.addEventListener('click', () => {
    deleteList(lists, activeListId);
  });
}

function bindToggleButtons(lists: List[], activeListId: string) {
  const toggleButtonEls = document.querySelectorAll('[data-toggle]');
  toggleButtonEls.forEach((button: HTMLButtonElement, index: number) => {
    button.addEventListener('click', () => {
      toggleTaskDone(index.toString(), lists, activeListId);
    });
  });
}

function bindDeleteButtons(lists: List[], activeListId: string) {
  const deleteButtonsEls = document.querySelectorAll('[data-delete]');
  deleteButtonsEls.forEach((button: HTMLButtonElement, index: number) => {
    button.addEventListener('click', () => {
      deleteTask(index, lists, activeListId);
    });
  });
}
