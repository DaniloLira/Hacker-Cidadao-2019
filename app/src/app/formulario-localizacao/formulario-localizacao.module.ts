import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FormularioLocalizacaoPage } from './formulario-localizacao.page';

const routes: Routes = [
  {
    path: '',
    component: FormularioLocalizacaoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FormularioLocalizacaoPage]
})
export class FormularioLocalizacaoPageModule {}
