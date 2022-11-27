export const LISTS_KEY = 'todo.lists';
export const ACTIVE_LIST_KEY = 'todo.activeList';
export function saveInLocalStorage(lists, activeListId) {
    localStorage.setItem(LISTS_KEY, JSON.stringify(lists));
    localStorage.setItem(ACTIVE_LIST_KEY, JSON.stringify(activeListId));
}
