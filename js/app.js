import { ACTIVE_LIST_KEY, LISTS_KEY } from './constants.js';
import { bindForm } from './utils/bindForm.js';
import { saveAndRender } from './helpers/render.helpers.js';
import { loadFromLocalStorage } from './helpers/local-storage.helpers.js';
import { addNewList, addNewTask } from './helpers/task.helpers.js';
import { bindListEvents } from './helpers/bind-event.helpers.js';
export const lists = loadFromLocalStorage(LISTS_KEY) || [];
export let activeListId = loadFromLocalStorage(ACTIVE_LIST_KEY);
export const setActiveListId = (value) => (activeListId = value);
function init() {
    const listsEl = document.querySelector('[data-lists]');
    listsEl.addEventListener('click', e => {
        const targetEl = e.target;
        setActiveListId(targetEl.getAttribute('data-list-item'));
        saveAndRender();
    });
    bindForm('list', addNewList);
    bindForm('task', addNewTask);
    bindListEvents();
    saveAndRender();
}
init();
