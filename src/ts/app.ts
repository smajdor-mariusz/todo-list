import { List } from './types';
import { createListEl } from './utils/dom-utils.js';

export let lists: List[] = [];

function renderLists() {
  const listsEl = document.querySelector('[data-lists]');

  lists.forEach(list => {
    if (list.rendered) return;
    list.rendered = true;
    listsEl.appendChild(createListEl(list.name));
  });
}

function addNewList() {
  const listInputEl: HTMLInputElement =
    document.querySelector('[data-list-input]');
  const newListName: string = listInputEl.value;
  listInputEl.value = '';

  if (newListName == null || newListName === '') return;

  lists = [
    ...lists,
    {
      id: Date.now().toString(),
      name: newListName,
      tasks: [],
      rendered: false,
    },
  ];

  renderLists();
}

(function init() {
  const listFormEl: HTMLFormElement =
    document.querySelector('[data-list-form]');

  listFormEl.addEventListener('submit', e => {
    e.preventDefault();
    addNewList();
    listFormEl.focus();
  });

  renderLists();
})();
