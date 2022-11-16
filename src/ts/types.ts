export interface List {
  id: string;
  name: string;
  active: boolean;
  tasks: Task[];
}

export interface Task {
  name: string;
  done: boolean;
}
