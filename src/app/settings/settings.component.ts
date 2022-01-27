import {Component, OnInit} from '@angular/core';
import {R2d2Service} from '../services/r2d2.service';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  ip: string = localStorage.getItem('ip');

  constructor(private r2d2Service: R2d2Service, private modalCtr: ModalController) {
  }

  ngOnInit() {
  }

  async close() {
    await this.modalCtr.dismiss(this.ip);
  }
}
