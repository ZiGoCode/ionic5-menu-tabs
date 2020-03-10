import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/menu/tabs',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'cat',
        loadChildren: () => import('../cat/cat.module').then(m => m.CatPageModule)
      },
      {
        path: 'ionic',
        loadChildren: () => import('../ionic/ionic.module').then(m => m.IonicPageModule)
      },
      {
        path: 'flutter',
        loadChildren: () => import('../flutter/flutter.module').then(m => m.FlutterPageModule)
      },
      {
        path: 'tabs',
        loadChildren: () => import('../tabs/tabs.module').then( m => m.TabsPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
