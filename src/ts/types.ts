interface Task {
  name: string;
  done: boolean;
}

export interface List {
  id: string;
  name: string;
  tasks: Task[];
}
