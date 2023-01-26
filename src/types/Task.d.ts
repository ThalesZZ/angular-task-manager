type TaskStatus = 'to do' | 'progress' | 'done';

interface Task extends Entity {
  title: string;
  description?: string;
  priority?: 0 | 1 | 2;
  status: TaskStatus;
}
