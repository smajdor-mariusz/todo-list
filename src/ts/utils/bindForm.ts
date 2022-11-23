export function bindForm(block: string, addNewItem: Function) {
  const formEl: HTMLFormElement = document.querySelector(
    `[data-${block}-form]`
  );
  formEl.addEventListener('submit', e => {
    e.preventDefault();
    addNewItem();
  });
}
