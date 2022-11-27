import { lists, activeListId } from '../app.js';
import { saveInLocalStorage } from './local-storage.helpers.js';
import { bindTaskEvents } from './bind-event.helpers.js';
import { createListItemEl, createTaskItemEl, setTasksBlock, } from './dom.helpers.js';
export function saveAndRender() {
    render();
    saveInLocalStorage();
}
function render() {
    renderList();
    renderTask();
}
function renderList() {
    const listsEl = document.querySelector('[data-lists]');
    listsEl.innerHTML = null;
    lists.forEach((list) => {
        listsEl.appendChild(createListItemEl(list));
    });
}
function renderTask() {
    const activeList = lists.find(list => list.id === activeListId);
    if (activeListId) {
        const tasksEl = document.querySelector('[data-tasks]');
        tasksEl.innerHTML = null;
        activeList.tasks.forEach(task => tasksEl.appendChild(createTaskItemEl(task)));
    }
    setTasksBlock(activeList);
    bindTaskEvents();
}
