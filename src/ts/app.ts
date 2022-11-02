import { List } from './types';
import { createListEl } from './utils/dom-utils.js';

let lists: List[] = [
  { id: '1', name: 'List 1', tasks: [] },
  { id: '2', name: 'List 2', tasks: [] },
];

function renderLists() {
  const listsEl = document.querySelector('[data-lists]');

  lists.forEach(list => {
    listsEl.appendChild(createListEl(list.name));
  });
}

(function init() {
  renderLists();
})();
