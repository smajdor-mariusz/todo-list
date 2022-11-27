import { activeListId, lists, setActiveListId } from '../app.js';
import { createNewItem } from '../utils/createNewItem.js';
import { saveAndRender } from './render.helpers.js';
export function addNewTask() {
    const newTaskName = createNewItem('[data-task-input]');
    if (!newTaskName)
        return;
    const activeList = lists.find(list => list.id === activeListId);
    activeList.tasks.push({
        name: newTaskName,
        done: false,
    });
    saveAndRender();
}
export function toggleTaskDone(index) {
    const activeList = lists.find(list => list.id === activeListId);
    activeList.tasks[index].done = !activeList.tasks[index].done;
    saveAndRender();
}
export function deleteTask(index) {
    const activeList = lists.find(list => list.id === activeListId);
    activeList.tasks.splice(index, 1);
    saveAndRender();
}
export function addNewList() {
    const newListName = createNewItem('[data-list-input]');
    if (!newListName)
        return;
    lists.push({
        id: Date.now().toString(),
        name: newListName,
        tasks: [],
    });
    saveAndRender();
}
export function deleteList() {
    const activeListIndex = lists.findIndex(list => list.id === activeListId);
    lists.splice(activeListIndex, 1);
    setActiveListId(null);
    saveAndRender();
}
export function clearCompletedTasks() {
    const activeList = lists.find(list => list.id === activeListId);
    lists.find(list => list.id === activeListId).tasks = activeList.tasks.filter(task => task.done === false);
    saveAndRender();
}
