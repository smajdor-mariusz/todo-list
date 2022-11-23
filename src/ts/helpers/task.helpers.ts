import { List } from '../types';
import { createNewItem } from '../utils/createNewItem';
import { saveAndRender } from './render.helpers';

export function addNewTask(lists: List[], activeListId: string) {
  const newTaskName: string = createNewItem('[data-task-input]');
  if (!newTaskName) return;
  const activeList = lists.find(list => list.id === activeListId);
  activeList.tasks.push({
    name: newTaskName,
    done: false,
  });
  saveAndRender(lists, activeListId);
}

export function toggleTaskDone(
  index: string,
  lists: List[],
  activeListId: string
) {
  const activeList = lists.find(list => list.id === activeListId);
  activeList.tasks[index].done = !activeList.tasks[index].done;
  saveAndRender(lists, activeListId);
}

export function deleteTask(index: number, lists: List[], activeListId: string) {
  const activeList = lists.find(list => list.id === activeListId);
  activeList.tasks.splice(index, 1);
  saveAndRender(lists, activeListId);
}

export function addNewList(lists: List[], activeListId: string) {
  const newListName: string = createNewItem('[data-list-input]');
  if (!newListName) return;
  lists.push({
    id: Date.now().toString(),
    name: newListName,
    tasks: [],
  });
  saveAndRender(lists, activeListId);
}

export function deleteList(lists: List[], activeListId: string) {
  lists = lists.filter(list => list.id !== activeListId);
  activeListId = null;
  saveAndRender(lists, activeListId);
}

export function clearCompletedTasks(lists: List[], activeListId: string) {
  const activeList = lists.find(list => list.id === activeListId);
  lists.find(list => list.id === activeListId).tasks = activeList.tasks.filter(
    task => task.done === false
  );
  saveAndRender(lists, activeListId);
}
