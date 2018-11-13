import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ConfigComponent } from './config/config/config.component';

import { RequestTimeLogHttpInterceptor } from './RequestTimeLogHttpInterceptor';



@NgModule({
  declarations: [
    AppComponent,
    ConfigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: RequestTimeLogHttpInterceptor,
    // 這個multi是用來告訴Angular HTTP_INTERCEPTORS是一個多重的provide token，表示會注入一個多值的陣列，而非單一的值
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
