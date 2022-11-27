export function createNewItem(selector) {
    const inputEl = document.querySelector(selector);
    const value = inputEl.value.trim();
    inputEl.focus();
    inputEl.value = '';
    return value;
}
