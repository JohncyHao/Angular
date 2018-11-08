import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerListComponent } from './customer-list/customer-list.component';


const routes: Routes = [
  // path設置為空的原因是因為AppRoutingModule中的路徑已經設置為customers了
  {path:'',component:CustomerListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
