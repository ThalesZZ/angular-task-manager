import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  searchTerm = '';
  taskStatus: TaskStatus[] = taskStatusFactory()

  user: User = { id: 0, name: 'Thales Zarzar', imageUrl: 'assets/profilepic.jpg' };
  tasks: Task[] = [
    { id: 0, title: 'Task 0', status: 'todo' },
    { id: 1, title: 'Task 1', status: 'progress' },
    { id: 2, title: 'Task 2', status: 'done' },
  ]
}

function taskStatusFactory(): TaskStatus[] {
  const taskStatusList: Array<TaskStatus> = ['todo', 'progress', 'done']
  return Array.from(new Set(taskStatusList));
}
