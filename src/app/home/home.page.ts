import {Component} from '@angular/core';
import {NavController} from "@ionic/angular";
import {PageControlsPage} from "../page-controls/page-controls.page";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  connect() {

  }
}
