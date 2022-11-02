export function createListEl(name: string) {
  const listEl: HTMLLIElement = document.createElement('li');
  listEl.classList.add('lists__item');
  listEl.innerText = name;

  return listEl;
}
