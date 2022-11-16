export interface List {
  id: string;
  name: string;
  tasks: Task[];
}

export interface Task {
  name: string;
  done: boolean;
}
