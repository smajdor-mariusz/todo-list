import { List } from '../types';
import { createNewItem } from '../utils/createNewItem';
import { saveAndRender } from './render.helpers';

export function addNewList(
  lists: List[],
  activeListId: string,
  bindTaskEvents: Function
) {
  const newListName: string = createNewItem('[data-list-input]');
  if (!newListName) return;
  lists.push({
    id: Date.now().toString(),
    name: newListName,
    tasks: [],
  });
  saveAndRender(lists, activeListId, bindTaskEvents);
}
