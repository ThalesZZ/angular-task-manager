import { Mapper } from "./mapper"

const fakeDatabase: {
  users: UserDTO[],
  tasks: TaskDTO[]
} = {
  users: [
    { id: 999, name: 'Thales Zarzar', imageUrl: 'assets/profilepic.jpg' },
    { id: 1, name: 'Abu', imageUrl: 'assets/monkey1.jpg' },
    { id: 2, name: 'Joe', imageUrl: 'assets/monkey2.jpg' },
    { id: 3, name: 'Kira', imageUrl: 'assets/monkey3.jpg' },
    { id: 4, name: 'Ned', imageUrl: 'assets/monkey4.jpg' },
  ],
  tasks: [
    { id: 1, title: 'Get a Angular job', responsiblesIds: [3, 999], priority: 'low', statusIdentifier: 'backlog' },
    { id: 2, title: 'Study Angular', responsiblesIds: [1, 4], priority: 'medium', statusIdentifier: 'to_do' },
    { id: 3, title: 'Make a Task Manager', responsiblesIds: [2, 999], priority: 'high', statusIdentifier: 'in_progress' },
    { id: 4, title: 'Celebrate a new knowledge', responsiblesIds: [1, 2, 3, 4, 999], priority: 'low', statusIdentifier: 'done' },
  ]
}

function generateId(entities: Array<Entity>): number {
  return entities.reduce((higherId, entity) => entity.id > higherId ? entity.id : higherId, -Infinity) + 1
}

export const API = {
  user: {
    getAll(): Map<number, User> {
      return Mapper.user.toMap(fakeDatabase.users)
    }
  },
  task: {
    create(task: Task): void {
      fakeDatabase.tasks.push(Mapper.task.toDTO({ ...task, id: generateId(fakeDatabase.tasks)}))
    },
    getAll(users: Map<number, User>): Map<number, Task> {
      return Mapper.task.toMap(fakeDatabase.tasks, users)
    }
  }
}
