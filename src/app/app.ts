import { CommonModule } from '@angular/common'
import { Component, NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { API } from 'src/data/api'
import { taskStatusFactory } from 'src/data/factory'
import { TasksByStatus } from 'src/pipes/filter'
import { ModalModule } from './components/modal/modal'

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})

export class AppComponent {
  // data
  users = API.user.getAll()
  tasks = API.task.getAll(this.users)

  // meta data
  loggedUser = this.users.get(999)
  taskStatus = Array.from(taskStatusFactory().values())

  // interface states
  searchTerm = ''
  maxDisplayResponsibles = 2
  showNewTaskModal = true

  // interface functions
  newTask = () => {
    API.task.create({
      id: null,
      responsibles: [],
      title: 'AAAA',
      priority: 'high',
      status: taskStatusFactory().get('to_do')
    })
    this.tasks = API.task.getAll(this.users)
  }

}

@NgModule({
  declarations: [AppComponent, TasksByStatus],
  imports: [BrowserModule, FormsModule, CommonModule, ModalModule],
  bootstrap: [AppComponent]
})
export class AppModule { }