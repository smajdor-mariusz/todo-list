export function createNewList(selector) {
    const inputEl = document.querySelector(selector);
    const value = inputEl.value.trim();
    console.log(value);
    inputEl.focus();
    inputEl.value = '';
    return {
        id: Date.now().toString(),
        name: value.trim(),
        active: false,
        rendered: false,
    };
}
