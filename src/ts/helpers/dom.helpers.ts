import { List, Task } from '../types';

export function createListItemEl(list: List, activeListId: string) {
  const listItemEl: HTMLLIElement = document.createElement('li');
  listItemEl.setAttribute('data-list-item', list.id);
  listItemEl.classList.add('lists__item');
  list.id === activeListId && listItemEl.classList.add('lists__item--active');
  listItemEl.innerText = list.name;

  return listItemEl;
}

export function createTaskItemEl(task: Task) {
  const taskItemEl: HTMLLIElement = document.createElement('li');
  taskItemEl.classList.add('tasks__item');

  const taskToggleBtnEl: HTMLButtonElement = document.createElement('button');
  taskToggleBtnEl.classList.add('tasks__toggle');
  taskToggleBtnEl.type = 'button';
  taskToggleBtnEl.setAttribute('data-toggle', '');

  const iconEl: HTMLElement = document.createElement('i');
  iconEl.classList.add('fa-solid');
  iconEl.classList.add(task.done ? 'fa-xmark' : 'fa-check');
  taskToggleBtnEl.appendChild(iconEl);

  const taskContentEl: HTMLSpanElement = document.createElement('span');
  taskContentEl.innerText = task.name;
  if (task.done) taskContentEl.classList.add('tasks__content--done');

  const taskDeleteBtnEl: HTMLButtonElement = document.createElement('button');
  taskDeleteBtnEl.classList.add('tasks__delete');
  taskDeleteBtnEl.type = 'button';
  taskDeleteBtnEl.innerText = 'Delete';
  taskDeleteBtnEl.setAttribute('data-delete', '');

  taskItemEl.appendChild(taskToggleBtnEl);
  taskItemEl.appendChild(taskContentEl);
  taskItemEl.appendChild(taskDeleteBtnEl);

  return taskItemEl;
}

export function setTasksBlock(activeList: List) {
  setTasksContainer(activeList);
  activeList && setTasksInfo(activeList);
}

function setTasksContainer(activeList: List) {
  const tasksContainerEl: HTMLDivElement = document.querySelector(
    '[data-tasks-container]'
  );
  if (activeList) {
    tasksContainerEl.classList.remove('tasks--hidden');
    const tasksTitleEl: HTMLHeadElement =
      document.querySelector('[data-tasks-title]');
    tasksTitleEl.innerText = activeList.name;
  } else {
    tasksContainerEl.classList.add('tasks--hidden');
  }
}

function setTasksInfo(activeList: List) {
  const tasksInfoEl: HTMLSpanElement =
    document.querySelector('[data-tasks-info]');
  const remainingTasksCount = activeList.tasks.filter(
    task => !task.done
  ).length;
  tasksInfoEl.innerText = `${remainingTasksCount} task${
    remainingTasksCount !== 1 ? 's' : ''
  } remaining`;
}
