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
    { id: 0, title: 'Task 0', status: 'to do', priority: 'low' },
    { id: 1, title: 'Task 1', status: 'progress', priority: 'medium' },
    { id: 2, title: 'Task 2', status: 'done', priority: 'high' },
  ]
}

function taskStatusFactory(): TaskStatus[] {
  const taskStatusList: Array<TaskStatus> = ['to do', 'progress', 'done']
  return Array.from(new Set(taskStatusList));
}
