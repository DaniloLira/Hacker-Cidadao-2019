import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: '../home/home.module#HomePageModule'
      },
      {
        path: 'formulario',
        loadChildren: '../formulario/formulario.module#FormularioPageModule'
      },
      {
        path: 'vitimas',
        loadChildren: '../vitimas/vitimas.module#VitimasPageModule'
      },
      {
        path: 'lista-formularios-incompletos',
        loadChildren: '../lista-formularios-incompletos/lista-formularios-incompletos.module#ListaFormulariosIncompletosPageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
