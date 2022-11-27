export function renderList(lists, activeListId) {
    const listEl = document.querySelector('[data-lists]');
    lists.forEach(list => {
        if (list.rendered)
            return;
        list.rendered = true;
        listEl.appendChild(createListItemEl(list, activeListId));
    });
}
function createListItemEl(list, activeListId) {
    const listItemEl = document.createElement('li');
    listItemEl.classList.add('lists__item');
    listItemEl.innerText = list.name;
    listItemEl.addEventListener('click', () => {
        const activeEl = document.querySelector('.lists__item--active');
        if (activeEl)
            activeEl.classList.remove('lists__item--active');
        listItemEl.classList.add('lists__item--active');
        activeListId = list.id;
    });
    return listItemEl;
}
