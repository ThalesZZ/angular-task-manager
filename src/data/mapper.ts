import { Factory } from "./factory"

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
    toDTO(entity: Task): TaskDTO {
      const responsiblesIds = entity.responsibles.map(responsible => responsible.id)
      const statusIdentifier = entity.status.identifier

      return { ...entity, responsiblesIds, statusIdentifier }
    },
    toEntity(dto: TaskDTO, users: Map<number, User>): Task {
      const status = Factory.task.statusMap().get(dto.statusIdentifier)
      const responsibles = dto.responsiblesIds.map(responsibleId => users.get(responsibleId))

      return { ...dto, status, responsibles }
    },
    toMap(dtos: TaskDTO[], users: Map<number, User>): Map<number, Task> {
      return new Map(dtos.map(dto => [dto.id, Mapper.task.toEntity(dto, users)]))
    }
  }
}
