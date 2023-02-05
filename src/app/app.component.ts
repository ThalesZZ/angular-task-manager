import { CommonModule } from '@angular/common'
import { Component, NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { API } from 'src/data/api'
import { Factory } from 'src/data/factory'
import { TasksByStatus } from 'src/pipes/filter'
import { ModalComponent } from './components/modal/modal.component'
import { NewTaskModalComponent } from './components/new-task-modal/new-task-modal.component'

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

  // interface states
  searchTerm = ''
  maxDisplayResponsibles = 2
  showNewTaskModal = !false

  // interface functions

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
  declarations: [
    AppComponent,
     ModalComponent,
      NewTaskModalComponent,
      TasksByStatus
    ],
  imports: [BrowserModule, FormsModule, CommonModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
