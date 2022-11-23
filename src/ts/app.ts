import { List } from './types';
import { saveAndRender } from './helpers/render.helpers.js';
import { bindForm } from './utils/bindForm.js';
import { ACTIVE_LIST_KEY, LISTS_KEY } from './helpers/local-storage.helper.js';
import { addNewList, addNewTask } from './helpers/task.helpers';
import { bindListEvents } from './helpers/bind-event.helpers';

let lists: List[] = JSON.parse(localStorage.getItem(LISTS_KEY)) || [];
let activeListId: string = JSON.parse(localStorage.getItem(ACTIVE_LIST_KEY));

function init() {
  const listsEl: HTMLUListElement = document.querySelector('[data-lists]');
  listsEl.addEventListener('click', (event: Event) => {
    const targetEl = event.target as HTMLLIElement;
    activeListId = targetEl.getAttribute('data-list-item');
    saveAndRender(lists, activeListId);
  });

  bindForm('list', addNewList);
  bindForm('task', addNewTask);
  bindListEvents(lists, activeListId);
  saveAndRender(lists, activeListId);
}

init();
