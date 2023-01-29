export const Factory: {
  task: {
    empty: (defaultUser?: User) => Task,
    statusMap: () => Map<string, TaskStatus>
  }
} = {
  task: {
    empty: defaultUser => ({
      id: null,
      title: null,
      priority: 'medium',
      responsibles: defaultUser ? [defaultUser] : [],
      status: Factory.task.statusMap().get('backlog'),
      description: null
    }),
    statusMap: () => new Map([
      { identifier: 'backlog', label: 'Backlog' },
      { identifier: 'to_do', label: 'To Do' },
      { identifier: 'in_progress', label: 'In Progress' },
      { identifier: 'done', label: 'Done' }
    ].map(taskStatus => [taskStatus.identifier, taskStatus]))
  }
}
