type TaskStatus = 'todo' | 'progress' | 'done';

interface Task extends Entity {
  title: string;
  description?: string;
  status: TaskStatus;
}
