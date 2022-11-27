import { clearCompletedTasks, deleteList, deleteTask, toggleTaskDone, } from '../helpers/task.helpers.js';
export function bindTaskEvents() {
    bindToggleButtons();
    bindDeleteButtons();
}
export function bindListEvents() {
    bindClearCompletedTasksButton();
    bindDeleteListButton();
}
function bindClearCompletedTasksButton() {
    const clearCompletedButtonEl = document.querySelector('[data-clear-completed]');
    clearCompletedButtonEl.addEventListener('click', () => {
        clearCompletedTasks();
    });
}
function bindDeleteListButton() {
    const deleteListBtnEl = document.querySelector('[data-delete-list]');
    deleteListBtnEl.addEventListener('click', () => {
        deleteList();
    });
}
function bindToggleButtons() {
    const toggleButtonEls = document.querySelectorAll('[data-toggle]');
    toggleButtonEls.forEach((button, index) => {
        button.addEventListener('click', () => {
            toggleTaskDone(index);
        });
    });
}
function bindDeleteButtons() {
    const deleteButtonsEls = document.querySelectorAll('[data-delete]');
    deleteButtonsEls.forEach((button, index) => {
        button.addEventListener('click', () => {
            deleteTask(index);
        });
    });
}
