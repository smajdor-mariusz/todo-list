import { List } from './types';
import { saveAndRender } from './helpers/render.helpers.js';
import { bindForm } from './utils/bindForm.js';
import { ACTIVE_LIST_KEY, LISTS_KEY } from './helpers/local-storage.helper.js';
import { addNewList, addNewTask } from './helpers/task.helpers';
import { bindListEvents } from './helpers/bind-event.helpers';

export let lists: List[] = JSON.parse(localStorage.getItem(LISTS_KEY)) || [];
export let activeListId: string = JSON.parse(
  localStorage.getItem(ACTIVE_LIST_KEY)
);

export const setActiveListId = (value: string) => (activeListId = value);

function init() {
  const listsEl: HTMLUListElement = document.querySelector('[data-lists]');
  listsEl.addEventListener('click', (event: Event) => {
    const targetEl = event.target as HTMLLIElement;
    activeListId = targetEl.getAttribute('data-list-item');
    saveAndRender();
  });

  bindForm('list', addNewList);
  bindForm('task', addNewTask);
  bindListEvents();
  saveAndRender();
}

init();
