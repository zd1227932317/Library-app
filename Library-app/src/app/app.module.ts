import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule, Routes}from'@angular/router';
import{FormsModule,ReactiveFormsModule} from'@angular/forms';
import{HttpClientModule}from'@angular/common/http';

import { AppComponent } from './app.component';
import { FlashPageComponent } from './pages/flash-page/flash-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RestPageComponent } from './pages/rest-page/rest-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SortPageComponent } from './pages/sort-page/sort-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { ShelfPageComponent } from './pages/shelf-page/shelf-page.component';
import { MinePageComponent } from './pages/mine-page/mine-page.component';
import { HeaderPageComponent } from './components/header-page/header-page.component';
import { NavPageComponent } from './components/nav-page/nav-page.component';
import { HeaderSearchPageComponent } from './components/header-search-page/header-search-page.component';
import { AdBannerComponent } from './components/ad-banner/ad-banner.component';
import { HeaderBackPageComponent } from './components/header-back-page/header-back-page.component';
import { HeaderSearchBookPageComponent } from './components/header-search-book-page/header-search-book-page.component';
import { ContentListPageComponent } from './components/content-list-page/content-list-page.component';
import{GuardserviceService}from'./guard/guardservice.service';
import { PersonDetailPageComponent } from './pages/person-detail-page/person-detail-page.component';
import { SettingPageComponent } from './pages/setting-page/setting-page.component';
import { ChangedetailPageComponent } from './components/changedetail-page/changedetail-page.component';
import { BorrowedRecordPageComponent } from './pages/borrowed-record-page/borrowed-record-page.component';
import { ChangepasswordPagesComponent } from './pages/changepassword-pages/changepassword-pages.component';
import { DialogModelComponent } from './components/dialog-model/dialog-model.component';
import { AutoDialogModelComponent } from './components/auto-dialog-model/auto-dialog-model.component';


const ROUTES:Routes=[
  {path:'',redirectTo:'flash',pathMatch:'full'},
  {path:'flash',component:FlashPageComponent},
  {path:'main',component:MainPageComponent,children:[
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomePageComponent},
    {path:'sort',component:SortPageComponent},
    {path:'shelf',component:ShelfPageComponent,canActivate:[GuardserviceService]},
    {path:'mine',component:MinePageComponent},
  ]},
  {path:'search',component:SearchPageComponent},
  {path:'login',component:LoginPageComponent},
  {path:'rest',component:RestPageComponent},
  {path:'detail/:id',component:DetailPageComponent},
  {path:'list',component:ListPageComponent},
  {path:'personalDetail',component:PersonDetailPageComponent},
  {path:'setting',component:SettingPageComponent},
  {path:'changedetail',component:ChangedetailPageComponent},
  {path:'changepassword',component:ChangepasswordPagesComponent },
  {path:'borrowedRecord',component:BorrowedRecordPageComponent,canActivate:[GuardserviceService]}
]
@NgModule({
  declarations: [
    AppComponent,
    FlashPageComponent,
    MainPageComponent,
    SearchPageComponent,
    LoginPageComponent,
    RestPageComponent,
    HomePageComponent,
    SortPageComponent,
    ListPageComponent,
    DetailPageComponent,
    ShelfPageComponent,
    MinePageComponent,
    HeaderPageComponent,
    NavPageComponent,
    HeaderSearchPageComponent,
    AdBannerComponent,
    HeaderBackPageComponent,
    HeaderSearchBookPageComponent,
    ContentListPageComponent,
    PersonDetailPageComponent,
    SettingPageComponent,
    ChangedetailPageComponent,
    BorrowedRecordPageComponent,
    ChangepasswordPagesComponent,
    DialogModelComponent,
    AutoDialogModelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES,{useHash:true}),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
