import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/menu/tabs/home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'cat',
        loadChildren: () => import('../cat/cat.module').then(m => m.CatPageModule)
      },
      {
        path: 'ionic',
        loadChildren: () => import('../ionic/ionic.module').then( m => m.IonicPageModule)
      },
      {
        path: 'flutter',
        loadChildren: () => import('../flutter/flutter.module').then(m => m.FlutterPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
