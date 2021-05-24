import { Component, OnInit } from '@angular/core';
import {WebsocketService} from "../services/websocket.service";
import { R2d2Service} from "../services/r2d2.service";

@Component({
  selector: 'app-page-controls',
  templateUrl: './page-controls.page.html',
  styleUrls: ['./page-controls.page.scss'],
})
export class PageControlsPage implements OnInit {
  constructor(public r2d2Service: R2d2Service) {
    r2d2Service.server.subscribe(msg => {
      console.log(msg)
    });
  }

  ngOnInit() {
  }
}
