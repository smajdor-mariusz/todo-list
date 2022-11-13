import { List } from '../types';
import { createListEl, createTaskEl } from './dom-helpers.js';
import { toggleTaskDone } from './toggle-task-done-helper.js';

export function renderLists(
  listsEl: HTMLUListElement,
  lists: List[],
  activeListId: string
) {
  listsEl.innerHTML = '';
  lists.forEach((list: List) =>
    listsEl.appendChild(createListEl(list, activeListId))
  );
  if (activeListId) {
    const tasksTitleEl: HTMLHeadElement =
      document.querySelector('[data-tasks-title]');
    tasksTitleEl.innerText =
      lists.find(list => list.id === activeListId).name || '';
  }
  renderTasks(lists, activeListId);
}

export function renderTasks(lists: List[], activeListId: string) {
  if (!activeListId) return;
  const tasksEl = document.querySelector('[data-tasks]');

  const tasks = lists.find(list => list.id === activeListId).tasks;
  tasksEl.innerHTML = '';
  tasks.forEach(task => tasksEl.appendChild(createTaskEl(task)));

  bindToggleDoneEvent(lists, activeListId);
}

function bindToggleDoneEvent(lists: List[], activeListId: string) {
  const toggleButtonEls: HTMLButtonElement[] = Array.from(
    document.querySelectorAll('[data-toggle-button]')
  );

  toggleButtonEls.forEach((button, index) => {
    console.log(button);
    button.addEventListener('click', () => {
      console.log(lists);
      toggleTaskDone(index, lists, activeListId);
    });
  });
}
