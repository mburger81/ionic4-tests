import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './pages/home/home.module#HomePageModule'
  },
  {
    path: 'button',
    loadChildren: './pages/button/button.module#ButtonPageModule'
  },
  {
    path: 'cards',
    loadChildren: './pages/cards/cards.module#CardsPageModule'
  },
  {
    path: 'list',
    loadChildren: './pages/list/list.module#ListPageModule'
  },
  {
    path: 'form',
    loadChildren: './pages/form/form.module#FormPageModule'
  },
  {
    path: 'list-buttons',
    loadChildren: './pages/list-buttons/list-buttons.module#ListButtonsPageModule'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
