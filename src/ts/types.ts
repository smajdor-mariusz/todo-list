export interface List {
  id: string;
  name: string;
  active: boolean;
  rendered: boolean;
  tasks: Task[];
}

export interface Task {
  name: string;
  done: boolean;
  rendered: boolean;
}
