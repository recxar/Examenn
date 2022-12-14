import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { canActivate,
        redirectUnauthorizedTo } from '@angular/fire/auth-guard';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'dashboard',
    loadChildren : () => import('./dashboard/dashboard.module').
    then( m => m.DashboardPageModule),
    ...canActivate(() => redirectUnauthorizedTo(['/home']))
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'page-prof',
    loadChildren: () => import('./page-prof/page-prof.module').then( m => m.PageProfPageModule)
  },
  {
    path: 'asistencia',
    loadChildren: () => import('./asistencia/asistencia.module').then( m => m.AsistenciaPageModule)
  },
  {
    path: 'vespucip',
    loadChildren: () => import('./vespucip/vespucip.module').then( m => m.VespucipPageModule)
  },
  {
    path: 'san-joaquin',
    loadChildren: () => import('./san-joaquin/san-joaquin.module').then( m => m.SanJoaquinPageModule)
  },
  {
    path: 'puente-alto',
    loadChildren: () => import('./puente-alto/puente-alto.module').then( m => m.PuenteAltoPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
