import { List } from '../types';
import { createNewItem } from '../utils/createNewItem';
import { saveAndRender } from './render.helpers';

export function addNewTask(
  lists: List[],
  activeListId: string,
  bindTaskEvents: Function
) {
  const newTaskName: string = createNewItem('[data-task-input]');
  if (!newTaskName) return;
  const activeList = lists.find(list => list.id === activeListId);
  activeList.tasks.push({
    name: newTaskName,
    done: false,
  });
  saveAndRender(lists, activeListId, bindTaskEvents);
}

export function toggleTaskDone(
  index: string,
  lists: List[],
  activeListId: string,
  bindTaskEvents: Function
) {
  const activeList = lists.find(list => list.id === activeListId);
  activeList.tasks[index].done = !activeList.tasks[index].done;
  saveAndRender(lists, activeListId, bindTaskEvents);
}

export function deleteTask(
  index: number,
  lists: List[],
  activeListId: string,
  bindTaskEvents: Function
) {
  const activeList = lists.find(list => list.id === activeListId);
  activeList.tasks.splice(index, 1);
  saveAndRender(lists, activeListId, bindTaskEvents);
}

export function addNewList(
  lists: List[],
  activeListId: string,
  bindTaskEvents: Function
) {
  const newListName: string = createNewItem('[data-list-input]');
  if (!newListName) return;
  lists.push({
    id: Date.now().toString(),
    name: newListName,
    tasks: [],
  });
  saveAndRender(lists, activeListId, bindTaskEvents);
}

export function deleteList(
  activeListId: string,
  lists: List[],
  bindTaskEvents: Function
) {
  const deleteListBtnEl: HTMLButtonElement =
    document.querySelector('[data-delete-list]');
  deleteListBtnEl.addEventListener('click', () => {
    lists = lists.filter(list => list.id !== activeListId);
    activeListId = null;
    saveAndRender(lists, activeListId, bindTaskEvents);
  });
}

export function clearCompletedTasks(
  lists: List[],
  activeListId: string,
  bindTaskEvents: Function
) {
  const clearCompletedButtonEl: HTMLButtonElement = document.querySelector(
    '[data-clear-completed]'
  );
  clearCompletedButtonEl.addEventListener('click', () => {
    const activeList = lists.find(list => list.id === activeListId);
    lists.find(list => list.id === activeListId).tasks =
      activeList.tasks.filter(task => task.done === false);

    saveAndRender(lists, activeListId, bindTaskEvents);
  });
}
