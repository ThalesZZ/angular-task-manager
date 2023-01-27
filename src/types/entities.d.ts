interface Entity {
  id: number;
}

interface User extends Entity {
  name: string;
  imageUrl: string;
}

interface UserDTO extends Entity {
  name: string;
  imageUrl: string;
}

interface Task extends Entity {
  title: string;
  description?: string;
  priority: TaskPriority;
  status: TaskStatus | undefined;
}

interface TaskDTO extends Entity {
  title: string;
  description?: string;
  priority: TaskPriority;
  statusIdentifier: string;
}
