import { List } from './types';
import { render } from './helpers/render.helpers.js';
import { createNewItem } from './utils/createNewItem.js';
import { bindForm } from './utils/bindForm.js';

let lists: List[] = [];
let activeListId: string = null;

function addNewList() {
  const newListName: string = createNewItem('[data-list-input]');
  if (!newListName) return;
  lists = [
    ...lists,
    {
      id: Date.now().toString(),
      name: newListName,
      tasks: [],
    },
  ];
  render(lists, activeListId);
}

function addNewTask() {
  const newTaskName: string = createNewItem('[data-task-input]');
  if (!newTaskName) return;
  const activeList = lists.find(list => list.id === activeListId);
  const activeListIndex = lists.findIndex(list => list.id === activeListId);
  lists = [
    ...lists.slice(0, activeListIndex),
    {
      ...activeList,
      tasks: [
        ...activeList.tasks,
        {
          name: newTaskName,
          done: false,
        },
      ],
      ...lists.slice(activeListIndex + 1),
    },
  ];
  render(lists, activeListId);
}

function init() {
  const listEl: HTMLUListElement = document.querySelector('[data-lists]');

  listEl.addEventListener('click', (event: Event) => {
    const targetEl = event.target as HTMLLIElement;
    activeListId = targetEl.getAttribute('data-list-item');

    const tasksContainerEl: HTMLDivElement = document.querySelector(
      '[data-tasks-container]'
    );
    tasksContainerEl.classList.remove('tasks--hidden');

    const tasksTitleEl: HTMLHeadElement =
      document.querySelector('[data-tasks-title]');
    tasksTitleEl.innerText = lists.find(list => list.id === activeListId).name;

    render(lists, activeListId);
  });

  bindForm('list', addNewList);
  bindForm('task', addNewTask);

  render(lists, activeListId);
}

init();
