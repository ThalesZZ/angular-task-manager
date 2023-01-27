export function taskStatusFactory(): Map<string, TaskStatus> {
  const list: TaskStatus[] = [
    { identifier: 'backlog', label: 'Backlog', color: 'yellow' },
    { identifier: 'to_do', label: 'To Do', color: 'purple' },
    { identifier: 'in_progress', label: 'In Progress', color: 'blue' },
    { identifier: 'done', label: 'Done', color: 'green' }
  ]

  return new Map(list.map(taskStatus => [taskStatus.identifier, taskStatus]))
}
