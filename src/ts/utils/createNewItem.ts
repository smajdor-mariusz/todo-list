export function createNewItem(selector: string) {
  const inputEl: HTMLInputElement = document.querySelector(selector);
  const value: string = inputEl.value.trim();

  inputEl.focus();
  inputEl.value = '';

  return {
    id: Date.now().toString(),
    name: value,
    active: false,
    rendered: false,
    tasks: [],
  };
}
