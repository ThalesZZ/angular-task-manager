import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  searchTerm = '';
  user: User = { id: 0, name: 'Thales Zarzar', imageUrl: 'assets/profilepic.jpg' };
}
