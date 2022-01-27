import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageControlsPageRoutingModule } from './page-controls-routing.module';

import { PageControlsPage } from './page-controls.page';
import {DirectionComponent} from '../direction/direction.component';
import {SpeedComponent} from '../speed/speed.component';
import {SliderModule} from 'ngx-slider';
import {NgxSliderModule} from '@angular-slider/ngx-slider';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageControlsPageRoutingModule,
    SliderModule,
    NgxSliderModule,
    FontAwesomeModule
  ],
  declarations: [PageControlsPage, DirectionComponent, SpeedComponent]
})
export class PageControlsPageModule {}
