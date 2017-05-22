import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  isActive: boolean;

  constructor() { }

  openModal() {
    console.log('modal opened');
    this.isActive = true;
  }

  closeModal() {
    console.log('modal closed');
    this.isActive = false;
  }
}
