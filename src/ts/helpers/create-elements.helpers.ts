import { List } from '../types';

export function createListItemEl(
  list: List,
  activeListId: string,
  tasksContainerEl: HTMLDivElement
) {
  const listItemEl: HTMLLIElement = document.createElement('li');
  listItemEl.classList.add('lists__item');
  listItemEl.innerText = list.name;
  listItemEl.addEventListener('click', () => {
    const activeLIClass = 'lists__item--active';
    const activeEl: HTMLLIElement = document.querySelector(`.${activeLIClass}`);
    if (activeEl) activeEl.classList.remove(activeLIClass);
    listItemEl.classList.add(activeLIClass);
    tasksContainerEl.classList.remove('tasks--hidden');
    activeListId = list.id;
  });
  return listItemEl;
}
