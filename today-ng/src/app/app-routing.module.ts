import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SetupComponent } from './pages/setup/setup.component';


// 建立Routes的路徑
const routes: Routes = [
  {path: 'setup', component: SetupComponent},
  {path: '', redirectTo: '/setup', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
