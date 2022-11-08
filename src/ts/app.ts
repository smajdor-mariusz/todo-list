import { List } from './types';
import { getInputValue } from './utils/getInputValue.js';

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
  lists.forEach((list: List) => listsEl.appendChild(createListEl(list)));
}

function createListEl(list: List) {
  const listEl: HTMLLIElement = document.createElement('li');
  listEl.classList.add('lists__item');
  listEl.dataset.listId = list.id;
  if (list.id === activeListId) {
    listEl.classList.add('lists__item--active');
  }
  listEl.innerText = list.name;

  return listEl;
}

function addNewList() {
  const listName = getInputValue('[data-list-input]');
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
