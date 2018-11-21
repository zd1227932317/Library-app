import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserParmas } from 'src/app/modules/user-parmas';
import { LocalstorageServiceService } from 'src/app/services/localstorage-service.service';
import { PhoneloginServiceService } from 'src/app/services/phonelogin-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changepassword-pages',
  templateUrl: './changepassword-pages.component.html',
  styleUrls: ['./changepassword-pages.component.css']
})
export class ChangepasswordPagesComponent implements OnInit {
  errormessage:string;
  formModel:FormGroup;
  txtconfirm:FormControl;
  txtPassword:FormControl;
  USER:UserParmas;

  constructor(public local:LocalstorageServiceService,public phonelogin:PhoneloginServiceService,public router:Router) 
  {this.txtconfirm=new FormControl('',[Validators.required]);
  this.txtPassword=new FormControl('',[Validators.required,Validators.pattern(/^\d{4}$/)]);
  this.formModel=new FormGroup({
    confirm:this.txtconfirm,
    password:this.txtPassword
  }) }
  

  ngOnInit() {
    this.USER=this.local.getItem('USER',0);
  }
  frm_onsubmit()
  {
   
    console.log(this.formModel);
    this.phonelogin.reset({id:this.USER.Id,password:this.formModel.value.password}).subscribe((res)=>{
      console.log(res);
      if(res.Code==100)
      {
        this.local.setItem('USER',res.Data,0);
        this.router.navigate(['/main/mine']);
      }
    })
  }
}
