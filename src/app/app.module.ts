import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import {WebsocketService} from './services/websocket.service';
import { R2d2Service} from './services/r2d2.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    WebsocketService,
    R2d2Service
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
