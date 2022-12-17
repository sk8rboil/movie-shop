import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { MovieListComponent } from './component/movie-list/movie-list.component';

const routes: Routes = [

  {path: '', redirectTo: 'movielist',pathMatch: 'full'},
  {path: 'movielist', component: MovieListComponent},
  {path: 'cart', component: CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
