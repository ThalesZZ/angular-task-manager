import { Component } from '@angular/core';
import { API } from 'src/data/api';
import { taskStatusFactory } from 'src/data/factory';

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
  taskStatus = Array.from(taskStatusFactory().values())

  // interface states
  maxDisplayResponsibles = 2
  searchTerm = ''

}
