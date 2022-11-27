export function bindListItemEvent(lists, activeListId) {
    const listEl = document.querySelector('[data-lists]');
    listEl.addEventListener('click', (event) => {
        var _a;
        const activeLIClass = 'lists__item--active';
        const activeEl = document.querySelector(`.${activeLIClass}`);
        if (activeEl)
            activeEl.classList.remove(activeLIClass);
        const listItemEl = event.target;
        listItemEl.classList.add(activeLIClass);
        activeListId = listItemEl.getAttribute('data-list-item');
        const tasksTitleEl = document.querySelector('[data-tasks-title]');
        tasksTitleEl.innerText = (_a = lists.find(list => list.id === activeListId)) === null || _a === void 0 ? void 0 : _a.name;
        const tasksContainerEl = document.querySelector('[data-tasks-container]');
        tasksContainerEl.classList.remove('tasks--hidden');
    });
}
