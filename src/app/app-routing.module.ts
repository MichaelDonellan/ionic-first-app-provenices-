import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ulster',
    loadChildren: () => import('./ulster/ulster.module').then( m => m.UlsterPageModule)
  },
  {
    path: 'munster',
    loadChildren: () => import('./munster/munster.module').then( m => m.MunsterPageModule)
  },
  {
    path: 'connaught',
    loadChildren: () => import('./connaught/connaught.module').then( m => m.ConnaughtPageModule)
  },
  {
    path: 'connaughtcountys',
    loadChildren: () => import('./connaughtcountys/connaughtcountys.module').then( m => m.ConnaughtcountysPageModule)
  },
  {
    path: 'lesinster',
    loadChildren: () => import('./lesinster/lesinster.module').then( m => m.LesinsterPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
