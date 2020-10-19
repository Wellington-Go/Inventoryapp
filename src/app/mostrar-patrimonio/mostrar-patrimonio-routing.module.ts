import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarPatrimonioPage } from './mostrar-patrimonio.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarPatrimonioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarPatrimonioPageRoutingModule {}
