import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TasksByStatus } from 'src/pipes/filter';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, TasksByStatus],
  imports: [BrowserModule, FormsModule, CommonModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
