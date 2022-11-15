export function createNewItem(selector: string) {
  const inputEl: HTMLInputElement = document.querySelector(selector);
  const value: string = inputEl.value.trim();

  inputEl.focus();
  inputEl.value = '';

  return value;
}
