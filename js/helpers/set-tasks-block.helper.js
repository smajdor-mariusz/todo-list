export function setTasksBlock(activeListName) {
    const tasksContainerEl = document.querySelector('[data-tasks-container]');
    tasksContainerEl.classList.remove('tasks--hidden');
    const tasksTitleEl = document.querySelector('[data-tasks-title]');
    tasksTitleEl.innerText = activeListName;
}
