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
    toEntity(dto: TaskDTO, users: Map<number, User>): Task {
      const status = taskStatusFactory().get(dto.statusIdentifier)
      const responsibles = dto.responsiblesIds.map(responsibleId => users.get(responsibleId))

      return { ...dto, status, responsibles }
    },
    toMap(dtos: TaskDTO[], users: Map<number, User>): Map<number, Task> {
      return new Map(dtos.map(dto => [dto.id, Mapper.task.toEntity(dto, users)]))
    }
  }
}
