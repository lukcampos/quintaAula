import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent, UserComponent } from './components/index';
const routes: Routes = [
  { path: 'user/new', component: UserComponent },
  { path: 'user/:id', component: UserComponent },
  { path: 'list', component: ListComponent },
  { path: '', component: ListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
