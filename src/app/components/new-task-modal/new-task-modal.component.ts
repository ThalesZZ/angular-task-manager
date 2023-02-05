import { Component, Input } from '@angular/core';
import { Factory } from 'src/data/factory';

@Component({
  selector: 'app-new-task-modal',
  templateUrl: './new-task-modal.component.html',
  styleUrls: ['./new-task-modal.component.scss'],
})
export class NewTaskModalComponent {
  @Input() users: Map<number, User> = new Map()
  @Input() loggedUser: User = null

  prioritiesList: TaskPriority[] = ['low', 'medium', 'high']
  task: Task = Factory.task.empty([this.loggedUser])
  // closeNewTaskModal(): void {
  //   this.taskFromModal = Factory.task.empty([this.loggedUser])
  //   this.showNewTaskModal = false
  // }
  setTask = {
    priority: (priority: TaskPriority) => (this.task.priority = priority),
    responsibles: {
      add: (responsible: User) =>{
        if(!responsible) return

        const select: HTMLSelectElement = document.getElementById('select-responsible') as HTMLSelectElement
        select.selectedIndex = 0
        this.task.responsibles.push(responsible)
      },
      remove: (responsible: User) => (this.task.responsibles = this.task.responsibles.reduce((acc, r) => r.id === responsible.id ? acc : [...acc, r], []))
    }
  }
}
