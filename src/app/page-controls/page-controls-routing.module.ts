import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageControlsPage } from './page-controls.page';

const routes: Routes = [
  {
    path: '',
    component: PageControlsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageControlsPageRoutingModule {}
