import {Component, OnInit} from '@angular/core';
import {faCog} from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router';
import {R2d2Service} from '../services/r2d2.service';
import {ModalController} from '@ionic/angular';
import {SettingsComponent} from '../settings/settings.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  icon = faCog;

  constructor(private router: Router, public modalCtrl: ModalController) {
  }

  async connect() {
    if (R2d2Service.ip) {
      this.router.navigate(['/page-controls']);
    } else {
      this.initSettings();
    }
  }


  async initSettings() {
    const settings = await this.modalCtrl.create({
      component: SettingsComponent,
      cssClass: 'settings'
    });

    settings.onDidDismiss().then((settingsResponse) => {
      if (settingsResponse.data) {
        localStorage.setItem('ip', settingsResponse.data);
      }
    });

    return await settings.present();
  }

  ngOnInit(): void {
    if (localStorage.getItem('ip')) {
      R2d2Service.ip = localStorage.getItem('ip');
    }
  }
}
