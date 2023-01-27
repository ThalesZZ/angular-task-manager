import { Mapper } from "./mapper"

export function mockedUsers(): UserDTO[] {
  return [
    { id: 0, name: 'Thales Zarzar', imageUrl: 'assets/profilepic.jpg' },
  ]
}

export function mockedTasks(): TaskDTO[] {
  return [
    { id: 0, title: 'Task 0', priority: 'low', statusIdentifier: 'to_do' },
    { id: 1, title: 'Task 1', priority: 'medium', statusIdentifier: 'in_progress' },
    { id: 2, title: 'Task 2', priority: 'high', statusIdentifier: 'done' },
  ]
}

export const API = {
  user: {
    getAll(): Map<number, User> {
      return Mapper.user.toMap(mockedUsers())
    }
  },
  task: {
    getAll(): Map<number, Task> {
      return Mapper.task.toMap(mockedTasks())
    }
  }
}
