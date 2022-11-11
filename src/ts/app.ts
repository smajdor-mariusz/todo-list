import { List, Task } from './types';
import { getInputValue } from './utils/getInputValue.js';
import { renderLists, renderTasks } from './helpers/render-helpers.js';

const listsEl: HTMLUListElement = document.querySelector('[data-lists]');

let lists: List[] = [];
let activeListId: string = null;

listsEl.addEventListener('click', (e: Event) => {
  const listItemEl = e.target as HTMLLIElement;
  if (listItemEl.tagName.toLowerCase() === 'li') {
    activeListId = listItemEl.dataset.listId;
  }

  renderLists(listsEl, lists, activeListId);
});

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
  renderLists(listsEl, lists, activeListId);
}

function addNewTask() {
  const taskName = getInputValue('[data-task-input]');
  const activeList = lists.find(list => list.id === activeListId);
  const activeListIndex = lists.findIndex(list => list.id === activeListId);
  if (!taskName) return;

  let newTasks: Task[] = [
    ...activeList?.tasks,
    { name: taskName, done: false },
  ];

  lists = [
    ...lists.slice(0, activeListIndex),
    {
      ...activeList,
      tasks: newTasks,
    },
    ...lists.slice(activeListIndex + 1),
  ];
  renderTasks(lists, activeListId);
}

(function init() {
  const listFormEl: HTMLFormElement =
    document.querySelector('[data-list-form]');

  listFormEl.addEventListener('submit', (e: SubmitEvent) => {
    e.preventDefault();
    addNewList();
    listFormEl.focus();
  });

  const taskFormEl: HTMLFormElement =
    document.querySelector('[data-task-form]');

  taskFormEl.addEventListener('click', (e: SubmitEvent) => {
    e.preventDefault();
    addNewTask();
    taskFormEl.focus();
  });

  renderLists(listsEl, lists, activeListId);
})();
