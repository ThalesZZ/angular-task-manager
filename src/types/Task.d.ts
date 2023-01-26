type TaskStatus = 'to do' | 'progress' | 'done';
type TaskPriority = 'low' | 'medium' | 'high'

interface Task extends Entity {
  title: string;
  description?: string;
  priority: TaskPriority;
  status: TaskStatus;
}
