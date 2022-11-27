export function bindForm(block, addNewItem) {
    const formEl = document.querySelector(`[data-${block}-form]`);
    formEl.addEventListener('submit', e => {
        e.preventDefault();
        addNewItem();
    });
}
