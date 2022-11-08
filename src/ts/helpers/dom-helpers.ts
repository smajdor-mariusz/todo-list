import { List, Task } from '../types';

export function createListEl(list: List, activeListId: string) {
  const listEl: HTMLLIElement = document.createElement('li');
  listEl.classList.add('lists__item');
  listEl.dataset.listId = list.id;
  if (list.id === activeListId) {
    listEl.classList.add('lists__item--active');
  }
  listEl.innerText = list.name;

  return listEl;
}

export function createTaskEl(task: Task) {
  const taskEl: HTMLLIElement = document.createElement('li');
  taskEl.classList.add('tasks__item');

  const toggleButtonEl: HTMLButtonElement = document.createElement('button');
  toggleButtonEl.type = 'button';
  toggleButtonEl.classList.add('tasks__toggle');

  const iconEl = document.createElement('i');
  iconEl.classList.add('fa-solid', 'fa-check');
  toggleButtonEl.appendChild(iconEl);

  const nameSpanEl = document.createElement('span');
  nameSpanEl.innerText = task.name;
  if (task.done) nameSpanEl.classList.add('tasks__content--done');

  const removeButtonEl = document.createElement('button');
  removeButtonEl.type = 'button';
  removeButtonEl.classList.add('tasks__delete');
  removeButtonEl.innerText = 'Delete';

  taskEl.appendChild(toggleButtonEl);
  taskEl.appendChild(nameSpanEl);
  taskEl.appendChild(removeButtonEl);

  return taskEl;
}
