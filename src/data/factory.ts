export function taskStatusFactory(): Map<string, TaskStatus> {
  const list: TaskStatus[] = [
    { identifier: 'backlog', label: 'Backlog' },
    { identifier: 'to_do', label: 'To Do' },
    { identifier: 'in_progress', label: 'In Progress' },
    { identifier: 'done', label: 'Done' }
  ]

  return new Map(list.map(taskStatus => [taskStatus.identifier, taskStatus]))
}
