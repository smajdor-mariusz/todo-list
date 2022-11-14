import { List } from './types.js';
import { createNewItem } from './utils/createNewItem.js';
import { renderList } from './helpers/render.helpers.js';

let lists: List[] = [];
let activeListId: string = null;

function addNewList() {
  const newList: List = createNewItem('[data-list-input]');
  if (!newList.name) return;
  lists = [...lists, newList];
  renderList(lists, activeListId);
}

function init() {
  const listFormEl: HTMLFormElement =
    document.querySelector('[data-list-form]');
  listFormEl.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    addNewList();
  });
}

init();
