import { Component, OnInit, ViewChild } from '@angular/core';
import { LocalstorageServiceService } from 'src/app/services/localstorage-service.service';
import { UserParmas } from 'src/app/modules/user-parmas';
import { Router } from '@angular/router';
import { DialogModelComponent } from 'src/app/components/dialog-model/dialog-model.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-setting-page',
  templateUrl: './setting-page.component.html',
  styleUrls: ['./setting-page.component.css']
})
export class SettingPageComponent implements OnInit {
  @ViewChild('confirm')
  confirm:DialogModelComponent;

  constructor( public local:LocalstorageServiceService,public router:Router) { }
  USER:UserParmas
  ngOnInit() {
    this.USER=this.local.getItem('USER',0);
  }
  loGoOut_onclcik()
  {
    this.confirm.showdialog({title:'退出登录',message:'退出当前账号'});
   
  }
  confirm_onclick(e)
  {
    this.local.clearItem('USER',0);
    this.router.navigate(['/main/mine']);
  }
}
