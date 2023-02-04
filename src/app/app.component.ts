import { CommonModule } from '@angular/common'
import { Component, NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { API } from 'src/data/api'
import { Factory } from 'src/data/factory'
import { TasksByStatus } from 'src/pipes/filter'
import { ModalComponent } from './components/modal/modal.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  // data
  users = API.user.getAll()
  tasks = API.task.getAll(this.users)

  // meta data
  loggedUser = this.users.get(999)
  taskStatus = Array.from(Factory.task.statusMap().values())
  taskPriorities = Array.from<TaskPriority>(['low', 'medium', 'high'])
  taskFromModal: Task = Factory.task.empty([this.loggedUser])

  // interface states
  searchTerm = ''
  maxDisplayResponsibles = 2
  showNewTaskModal = !false

  // interface functions
  closeNewTaskModal = () => {
    this.taskFromModal = Factory.task.empty([this.loggedUser])
    this.showNewTaskModal = false
  }
  setTaskFromModal = {
    priority: (priority: TaskPriority) => (this.taskFromModal.priority = priority),
    responsibles: {
      add: (responsible: User) =>{
        if(!responsible) return

        const select: HTMLSelectElement = document.getElementById('select-responsible') as HTMLSelectElement
        select.selectedIndex = 0
        this.taskFromModal.responsibles.push(responsible)
      },
      remove: (responsible: User) => (this.taskFromModal.responsibles = this.taskFromModal.responsibles.reduce((acc, r) => r.id === responsible.id ? acc : [...acc, r], []))
    }
  }

  createNewTask = () => {
    this.showNewTaskModal = true
    // API.task.create({
    //   id: null,
    //   responsibles: [],
    //   title: 'AAAA',
    //   priority: 'high',
    //   status: taskStatusFactory().get('to_do')
    // })
    // this.tasks = API.task.getAll(this.users)
  }

}

@NgModule({
  declarations: [AppComponent, ModalComponent, TasksByStatus],
  imports: [BrowserModule, FormsModule, CommonModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
