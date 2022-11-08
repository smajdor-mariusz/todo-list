import { List } from './types';
import { getInputValue } from './utils/getInputValue.js';
import { createListEl } from './helpers/dom-helpers.js';

const listsEl: HTMLUListElement = document.querySelector('[data-lists]');

let lists: List[] = [];
let activeListId: string = null;

listsEl.addEventListener('click', (e: Event) => {
  const listItemEl = e.target as HTMLLIElement;
  if (listItemEl.tagName.toLowerCase() === 'li') {
    activeListId = listItemEl.dataset.listId;
  }

  renderLists();
});

function renderLists() {
  listsEl.innerHTML = '';
  lists.forEach((list: List) =>
    listsEl.appendChild(createListEl(list, activeListId))
  );
}

function addNewList() {
  const listName = getInputValue('[data-list-input]');
  if (!listName) return;
  lists = [
    ...lists,
    {
      id: Date.now().toString(),
      name: listName,
      tasks: [],
    },
  ];
  renderLists();
}

(function init() {
  const listFormEl: HTMLFormElement =
    document.querySelector('[data-list-form]');

  listFormEl.addEventListener('submit', (e: SubmitEvent) => {
    e.preventDefault();
    addNewList();
    listFormEl.focus();
  });
})();
