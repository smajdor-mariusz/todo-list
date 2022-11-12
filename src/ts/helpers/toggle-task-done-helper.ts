import { List } from '../types';
import { renderTasks } from './render-helpers.js';

export function toggleTaskDone(
  taskIndex: number,
  lists: List[],
  activeListId: string
) {
  const activeList = lists.find(list => list.id === activeListId);
  const activeListIndex = lists.findIndex(list => list.id === activeListId);

  lists = [
    ...lists.slice(0, activeListIndex),
    {
      ...activeList,
      tasks: [
        ...activeList.tasks.slice(0, taskIndex),
        {
          ...activeList.tasks[taskIndex],
          done: !activeList.tasks[taskIndex].done,
        },
        ...activeList.tasks.slice(taskIndex + 1),
      ],
    },
    ...lists.slice(activeListIndex + 1),
  ];

  renderTasks(lists, activeListId);
}
