// 這個檔案導入了CustomersRoutingModule和CustomerListComponent，所以CustomersModule的class可以訪問他們，
// 接著 CustomersRoutingModule出現在@NgModule的imports中，這讓CustomersModule可以訪問他的路由模組，
// 而CustomerListComponent出現在declarations中，表示CustomerListComponent 屬於CustomersModule

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule
  ],
  declarations: [CustomerListComponent]
})
export class CustomersModule { }


