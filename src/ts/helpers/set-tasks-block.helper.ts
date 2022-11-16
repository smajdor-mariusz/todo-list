export function setTasksBlock(activeListName: string) {
  const tasksContainerEl: HTMLDivElement = document.querySelector(
    '[data-tasks-container]'
  );
  tasksContainerEl.classList.remove('tasks--hidden');
  const tasksTitleEl: HTMLHeadElement =
    document.querySelector('[data-tasks-title]');
  tasksTitleEl.innerText = activeListName;
}
