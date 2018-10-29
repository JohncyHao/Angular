import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';




//透過RouterModule中的Routes來配置路由器
//路由定義會告訴路由器，當使用者點擊某個鏈結或者在瀏覽器網址欄中輸入某個URL時，要顯示哪個view
//而典型的Angular路由有兩個屬性
//1.path:一個用於匹配瀏覽器網址欄中URL的字串   2. component:當導航到此路由時，路由器應該建立哪個component
//在此希望當url為localhost:4200/heroes時就導航到HeroesComponent，因此要先import  HeroesComponent
//並在Route中定義路徑
const routes: Routes = [
  //URL 匹配到 path: 'heroes'，並顯示 HeroesComponent。
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  //默認路由，當應用程式啟動後，瀏覽器的網址指向了網站的跟目錄，他並沒有匹配到現存的路由，因此路由器也不會導航到任何地方
  //要讓應用程式自動導航到這個dashboard，要添加下列路由，這個路由會把一個空路徑完全匹配的url重新定位到路徑為'/dashboard的路由'
  //瀏覽器刷新之後，路由器會載入dashboardComponent，並且瀏覽器的網址會顯示出dashboard這個url
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  //path 中的冒號:id 是一個佔位符，表示某個特定英雄的id。
  { path: 'detail/:id', component: HeroDetailComponent }
];

@NgModule({
  //在此我們要初始化路由器，並讓她開始監聽瀏覽器中的網址變化，使用forRoot函數並導入routes常數即可
  imports: [RouterModule.forRoot(routes)],
  //導出RouterModule讓路由器的相關指令可以在AppModule中的component中使用
  exports: [RouterModule]
})
export class AppRoutingModule { }
