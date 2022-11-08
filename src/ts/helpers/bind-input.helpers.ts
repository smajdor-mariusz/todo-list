export function getInputValue() {
  const listInputEl: HTMLInputElement =
    document.querySelector('[data-list-input]');
  const newListName: string = listInputEl.value;
  listInputEl.value = '';

  if (newListName == null || newListName === '') return;
  return newListName;
}
