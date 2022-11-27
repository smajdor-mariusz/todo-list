export function bindActiveListEvent(event, activeListId) {
    const targetEl = event.target;
    activeListId = targetEl.getAttribute('data-list-item');
    const tasksContainerEl = document.querySelector('[data-tasks-container]');
    tasksContainerEl.classList.remove('tasks--hidden');
    const tasksTitleEl = document.querySelector('[data-tasks-title]');
    tasksTitleEl.innerText = lists.find(list => list.id === activeListId).name;
}
