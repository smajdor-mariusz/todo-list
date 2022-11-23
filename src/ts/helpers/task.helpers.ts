import { activeListId, lists, setActiveListId } from '../app';
import { createNewItem } from '../utils/createNewItem';
import { saveAndRender } from './render.helpers';

export function addNewTask() {
  const newTaskName: string = createNewItem('[data-task-input]');
  if (!newTaskName) return;
  const activeList = lists.find(list => list.id === activeListId);
  activeList.tasks.push({
    name: newTaskName,
    done: false,
  });
  saveAndRender();
}

export function toggleTaskDone(index: number) {
  const activeList = lists.find(list => list.id === activeListId);
  activeList.tasks[index].done = !activeList.tasks[index].done;
  saveAndRender();
}

export function deleteTask(index: number) {
  const activeList = lists.find(list => list.id === activeListId);
  activeList.tasks.splice(index, 1);
  saveAndRender();
}

export function addNewList() {
  const newListName: string = createNewItem('[data-list-input]');
  if (!newListName) return;
  lists.push({
    id: Date.now().toString(),
    name: newListName,
    tasks: [],
  });
  saveAndRender();
}

export function deleteList() {
  lists.filter(list => list.id !== activeListId);
  setActiveListId(null);
  saveAndRender();
}

export function clearCompletedTasks() {
  const activeList = lists.find(list => list.id === activeListId);
  lists.find(list => list.id === activeListId).tasks = activeList.tasks.filter(
    task => task.done === false
  );
  saveAndRender();
}
