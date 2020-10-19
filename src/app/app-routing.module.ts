import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'patrimonio',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'patrimonio',
    loadChildren: () => import('./patrimonio/patrimonio.module').then( m => m.PatrimonioPageModule)
  },
  {
    path: 'add-patrimonio',
    loadChildren: () => import('./add-patrimonio/add-patrimonio.module').then( m => m.AddPatrimonioPageModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./usuarios/usuarios.module').then( m => m.UsuariosPageModule)
  },
  {
    path: 'mostrar-patrimonio/:id/:numero/:produto/:marca/:serie/:categoria/:valor/:situacao',
    loadChildren: () => import('./mostrar-patrimonio/mostrar-patrimonio.module').then( m => m.MostrarPatrimonioPageModule)
  },
  {
  path: 'mostrar-patrimonio',
  loadChildren: () => import('./mostrar-patrimonio/mostrar-patrimonio.module').then( m => m.MostrarPatrimonioPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}