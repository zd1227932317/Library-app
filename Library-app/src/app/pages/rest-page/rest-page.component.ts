import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PhoneloginServiceService } from 'src/app/services/phonelogin-service.service';
import { LocalstorageServiceService } from 'src/app/services/localstorage-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rest-page',
  templateUrl: './rest-page.component.html',
  styleUrls: ['./rest-page.component.css']
})
export class RestPageComponent implements OnInit {

  // state:boolean=true;
  errormessage:string;

 
  txtPhone:string;
  txtCode:string;

  constructor(public phonelogin:PhoneloginServiceService,public local:LocalstorageServiceService,public router:Router) { }
  

  ngOnInit() {
  }

  getcode_onclick()
  {
    this.phonelogin.SendCodeForReset({phone:this.txtPhone}).subscribe((res)=>{
      console.log(res);
    });
  }
  confirm_onclick()
  { 
    this.phonelogin.VerifyCodeForReset({phone:this.txtPhone,code:this.txtCode}).subscribe((res)=>{
      console.log(res);
      if(res.Code==100)
      {
        this.local.setItem('USER',res.Data,0);
        this.router.navigate(['/changepassword']);
      }
    })
  }
  

}
