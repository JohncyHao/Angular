import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // 延遲加載語法loadChildern:接字串符，他指向模組的相對路徑，然後是一個#在家模組的class名稱
  {path:'customers',loadChildren:'./customers/customers.module#CustomersModule'},
  {path:'orders',loadChildren:'./orders/orders.module#OrdersModule'},
  {path:'',redirectTo:'',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
