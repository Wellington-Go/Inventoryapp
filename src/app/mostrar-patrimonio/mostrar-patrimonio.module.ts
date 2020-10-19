import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarPatrimonioPageRoutingModule } from './mostrar-patrimonio-routing.module';

import { MostrarPatrimonioPage } from './mostrar-patrimonio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarPatrimonioPageRoutingModule
  ],
  declarations: [MostrarPatrimonioPage]
})
export class MostrarPatrimonioPageModule {}
