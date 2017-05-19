import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  constructor() { }

  open() {
    console.log('modal opened');
  }

  close() {
    console.log('modal closed');
  }
}
