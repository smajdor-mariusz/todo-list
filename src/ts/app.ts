import { List } from './types.js';
import { createNewItem } from './utils/createNewItem.js';

let lists: List[] = [];

function addNewList() {
  const newList: List = createNewItem('[data-list-input]');
  if (!newList.name) return;
  lists = [...lists, newList];
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
