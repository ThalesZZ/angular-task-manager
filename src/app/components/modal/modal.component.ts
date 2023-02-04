import { Component, Input } from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent {
  // data

  // meta data

  // interface states
  @Input() title: string

  // interface functions
  @Input() onClose: () => void

}

