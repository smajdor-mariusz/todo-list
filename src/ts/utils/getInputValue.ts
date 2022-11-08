export function getInputValue(selector: string) {
  const inputEl: HTMLInputElement = document.querySelector(selector);
  const inputValue: string = inputEl.value;
  inputEl.value = '';

  if (inputValue == null || inputValue === '') return;
  return inputValue;
}
