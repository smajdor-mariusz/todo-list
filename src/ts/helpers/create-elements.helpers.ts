import { List, Task } from '../types';

export function createListItemEl(list: List) {
  const listItemEl: HTMLLIElement = document.createElement('li');
  listItemEl.classList.add('lists__item');
  listItemEl.innerText = list.name;
  listItemEl.setAttribute('data-list-item', list.id);

  return listItemEl;
}

export function createTaskItemEl(task: Task) {
  const taskItemEl: HTMLLIElement = document.createElement('li');
  taskItemEl.classList.add('tasks__item');

  const taskToggleBtnEl: HTMLButtonElement = document.createElement('button');
  taskToggleBtnEl.classList.add('tasks__toggle');
  taskToggleBtnEl.type = 'button';

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

  taskItemEl.appendChild(taskToggleBtnEl);
  taskItemEl.appendChild(taskContentEl);
  taskItemEl.appendChild(taskDeleteBtnEl);

  return taskItemEl;
}
