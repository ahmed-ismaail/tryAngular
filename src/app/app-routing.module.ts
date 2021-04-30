import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestingListComponent } from './testing-list/testing-list.component';

const routes: Routes = [
  { path: '',component: HomeComponent},
  { path: 'list',component: TestingListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
