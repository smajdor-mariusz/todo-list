interface Task {
  name: string;
  done: boolean;
  rendered: boolean;
}

export interface List {
  id: string;
  name: string;
  rendered: boolean;
  tasks: Task[];
}
