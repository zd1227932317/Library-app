import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MemberLoginServiceService } from 'src/app/services/member-login-service.service';
import { LocalstorageServiceService } from 'src/app/services/localstorage-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  sate:boolean=true;
  errormessage:string;
  formModel:FormGroup;
  txtPhone:FormControl;
  txtPassword:FormControl;


  
  
  

  constructor(public router:Router,public memberlogin:MemberLoginServiceService,public activated:ActivatedRoute,public loacal:LocalstorageServiceService) { 
    this.txtPhone=new FormControl('',[Validators.required,Validators.pattern('1[35789][0-9]{9}')]);
    this.txtPassword=new FormControl('',[Validators.required,Validators.pattern(/^\d{4}$/)]);
    this.formModel=new FormGroup({
      phone:this.txtPhone,
      password:this.txtPassword
    })
  }

 

  ngOnInit() {


  }

  frm_onsubmit()
  {
    console.log(this.formModel);
    
     //验证
     this.errormessage='';
   

    this.memberlogin.userLogin(this.formModel.value).subscribe((res)=>{
      console.log(res);
      if(res.Code==100)
      {
        this.loacal.setItem('USER',res.Data,0);
        console.log(this.activated.snapshot.params['url']);
        let url=this.activated.snapshot.params['url'];
        this.router.navigate([url],{ replaceUrl: true });
      }
      else
      {
        this.errormessage='用户信息不正确.';
        return;
      }
     
    })
  }
  

}
