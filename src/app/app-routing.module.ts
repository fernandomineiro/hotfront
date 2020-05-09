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
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'compra',
    loadChildren: () => import('./compra/compra.module').then( m => m.CompraPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'admina',
    loadChildren: () => import('./admina/admina.module').then( m => m.AdminaPageModule)
  },
  {
    path: 'tipo',
    loadChildren: () => import('./tipo/tipo.module').then( m => m.TipoPageModule)
  },
  {
    path: 'tipoedit/:id',
    loadChildren: () => import('./tipoedit/tipoedit.module').then( m => m.TipoeditPageModule)
  },
  {
    path: 'tipocreate',
    loadChildren: () => import('./tipocreate/tipocreate.module').then( m => m.TipocreatePageModule)
  },
  {
    path: 'produto',
    loadChildren: () => import('./produto/produto.module').then( m => m.ProdutoPageModule)
  },
  {
    path: 'produtocreate',
    loadChildren: () => import('./produtocreate/produtocreate.module').then( m => m.ProdutocreatePageModule)
  },
  {
    path: 'produtoedit',
    loadChildren: () => import('./produtoedit/produtoedit.module').then( m => m.ProdutoeditPageModule)
  },
  {
    path: 'compraa/:id',
    loadChildren: () => import('./compraa/compraa.module').then( m => m.CompraaPageModule)
  },
  {
    path: 'finaliza',
    loadChildren: () => import('./finaliza/finaliza.module').then( m => m.FinalizaPageModule)
  },
  {
    path: 'carro',
    loadChildren: () => import('./carro/carro.module').then( m => m.CarroPageModule)
  },
  {
    path: 'carrocreate',
    loadChildren: () => import('./carrocreate/carrocreate.module').then( m => m.CarrocreatePageModule)
  },
  {
    path: 'carroedit/:id',
    loadChildren: () => import('./carroedit/carroedit.module').then( m => m.CarroeditPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
