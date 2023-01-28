import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.html',
  styleUrls: ['./modal.scss']
})

export class ModalComponent {
  // data

  // meta data

  // interface states
  @Input() title: string

  // interface functions
}

@NgModule({
  declarations: [ModalComponent],
  imports: [CommonModule],
  exports: [ModalComponent]
})
export class ModalModule { }
