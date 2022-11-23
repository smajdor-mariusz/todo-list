export interface List {
  id: string;
  name: string;
  tasks: Task[];
}

interface Task {
  name: string;
  done: boolean;
}
