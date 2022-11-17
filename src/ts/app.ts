import { List } from './types';
import { render } from './helpers/render.helpers.js';
import { createNewItem } from './utils/createNewItem.js';
import { bindForm } from './utils/bindForm.js';

let lists: List[] = [];
let activeListId: string = null;

function addNewList() {
  const newListName: string = createNewItem('[data-list-input]');
  if (!newListName) return;
  lists.push({
    id: Date.now().toString(),
    name: newListName,
    tasks: [],
  });
  render(lists, activeListId, bindToggleButtons);
}

function addNewTask() {
  const newTaskName: string = createNewItem('[data-task-input]');
  if (!newTaskName) return;
  const activeList = lists.find(list => list.id === activeListId);
  activeList.tasks.push({
    name: newTaskName,
    done: false,
  });
  render(lists, activeListId, bindToggleButtons);
}

function toggleTaskDone(index: string) {
  const activeList = lists.find(list => list.id === activeListId);
  activeList.tasks[index].done = !activeList.tasks[index].done;
  render(lists, activeListId, bindToggleButtons);
}

function bindToggleButtons() {
  const toggleButtonEls = document.querySelectorAll('[data-toggle]');
  toggleButtonEls.forEach((button: HTMLButtonElement, index: number) => {
    button.addEventListener('click', () => {
      toggleTaskDone(index.toString());
    });
  });
}

function init() {
  const listsEl: HTMLUListElement = document.querySelector('[data-lists]');
  listsEl.addEventListener('click', (event: Event) => {
    const targetEl = event.target as HTMLLIElement;
    activeListId = targetEl.getAttribute('data-list-item');
    render(lists, activeListId, bindToggleButtons);
  });

  bindForm('list', addNewList);
  bindForm('task', addNewTask);
  render(lists, activeListId, bindToggleButtons);
}

init();
