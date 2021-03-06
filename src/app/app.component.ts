import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular8-modal-sample';
  showModal: boolean;
  modalContent: string;
  closeTest: string;
  constructor() {}

  ngOnInit() {
    this.showModal = false;
    this.modalContent = 'modal sample';
  }

  onClick(e) {
    this.showModal = true;
  }

  finishEvent(val: string) {
    this.showModal = false;
    this.closeTest = val;
  }
}
