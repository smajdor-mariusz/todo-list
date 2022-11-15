import { List } from './types';
import { createNewItem } from './utils/createNewItem.js';
import { renderList } from './helpers/render.helpers.js';

const listEl: HTMLUListElement = document.querySelector('[data-lists]');

let lists: List[] = [];
let activeListId: string = null;

listEl.addEventListener('click', (event: Event) => {
  const activeLIClass = 'lists__item--active';
  const activeEl: HTMLLIElement = document.querySelector(`.${activeLIClass}`);
  if (activeEl) activeEl.classList.remove(activeLIClass);

  const listItemEl = event.target as HTMLLIElement;
  listItemEl.classList.add(activeLIClass);

  activeListId = listItemEl.getAttribute('data-list-item');

  const tasksTitleEl: HTMLHeadElement =
    document.querySelector('[data-tasks-title]');
  tasksTitleEl.innerText = lists.find(list => list.id === activeListId).name;

  const tasksContainerEl: HTMLDivElement = document.querySelector(
    '[data-tasks-container]'
  );
  tasksContainerEl.classList.remove('tasks--hidden');
});

function addNewList() {
  const newListName: string = createNewItem('[data-list-input]');
  if (!newListName) return;
  lists = [
    ...lists,
    {
      id: Date.now().toString(),
      name: newListName,
      active: false,
      rendered: false,
      tasks: [],
    },
  ];
  renderList(lists, activeListId);
}

function addNewTask() {
  const newTaskName: string = createNewItem('[data-task-input]');
  if (!newTaskName) return;
  const activeList = lists.find(list => list.id === activeListId);
  const activeListIndex = lists.findIndex(list => (list.id = activeListId));
  lists = [
    ...lists.slice(0, activeListIndex),
    {
      ...activeList,
      tasks: [
        ...activeList.tasks,
        {
          name: newTaskName,
          done: false,
          rendered: false,
        },
      ],
      ...lists.slice(activeListIndex + 1),
    },
  ];
  console.log(lists);
}

function bindForm(block: string, addNewItem: Function) {
  const formEl: HTMLFormElement = document.querySelector(
    `[data-${block}-form]`
  );
  formEl.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    addNewItem();
  });
}

function init() {
  bindForm('list', addNewList);
  bindForm('task', addNewTask);

  renderList(lists, activeListId);
}

init();
