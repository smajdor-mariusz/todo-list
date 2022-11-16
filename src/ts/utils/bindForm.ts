export function bindForm(block: string, addNewItem: Function) {
  const formEl: HTMLFormElement = document.querySelector(
    `[data-${block}-form]`
  );
  formEl.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    addNewItem();
  });
}
