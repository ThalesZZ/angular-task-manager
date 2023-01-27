import { taskStatusFactory } from "./factory"

export const Mapper = {
  user: {
    toEntity(dto: UserDTO): User {
      return { ...dto }
    },
    toMap(dtos: UserDTO[]): Map<number, User> {
      return new Map(dtos.map(dto => [dto.id, Mapper.user.toEntity(dto)]))
    }
  },
  task: {
    toEntity(dto: TaskDTO): Task {
      return { ...dto, status: taskStatusFactory().get(dto.statusIdentifier) }
    },
    toMap(dtos: TaskDTO[]): Map<number, Task> {
      return new Map(dtos.map(dto => [dto.id, Mapper.task.toEntity(dto)]))
    }
  }
}
