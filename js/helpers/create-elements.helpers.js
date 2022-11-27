export function createListItemEl(list, activeListId) {
    const listItemEl = document.createElement('li');
    listItemEl.setAttribute('data-list-item', list.id);
    listItemEl.classList.add('lists__item');
    list.id === activeListId && listItemEl.classList.add('lists__item--active');
    listItemEl.innerText = list.name;
    return listItemEl;
}
export function createTaskItemEl(task) {
    const taskItemEl = document.createElement('li');
    taskItemEl.classList.add('tasks__item');
    const taskToggleBtnEl = document.createElement('button');
    taskToggleBtnEl.classList.add('tasks__toggle');
    taskToggleBtnEl.type = 'button';
    taskToggleBtnEl.setAttribute('data-toggle', '');
    const iconEl = document.createElement('i');
    iconEl.classList.add('fa-solid');
    iconEl.classList.add(task.done ? 'fa-xmark' : 'fa-check');
    taskToggleBtnEl.appendChild(iconEl);
    const taskContentEl = document.createElement('span');
    taskContentEl.innerText = task.name;
    if (task.done)
        taskContentEl.classList.add('tasks__content--done');
    const taskDeleteBtnEl = document.createElement('button');
    taskDeleteBtnEl.classList.add('tasks__delete');
    taskDeleteBtnEl.type = 'button';
    taskDeleteBtnEl.innerText = 'Delete';
    taskDeleteBtnEl.setAttribute('data-delete', '');
    taskItemEl.appendChild(taskToggleBtnEl);
    taskItemEl.appendChild(taskContentEl);
    taskItemEl.appendChild(taskDeleteBtnEl);
    return taskItemEl;
}
