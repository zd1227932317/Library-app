import { Component, OnInit, ViewChild } from '@angular/core';
import { LocalstorageServiceService } from 'src/app/services/localstorage-service.service';
import { UserParmas } from 'src/app/modules/user-parmas';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MemberLoginServiceService } from 'src/app/services/member-login-service.service';
import { DialogModelComponent } from 'src/app/components/dialog-model/dialog-model.component';
import { AutoDialogModelComponent } from 'src/app/components/auto-dialog-model/auto-dialog-model.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-detail-page',
  templateUrl: './person-detail-page.component.html',
  styleUrls: ['./person-detail-page.component.css']
})
export class PersonDetailPageComponent implements OnInit {
  USER:UserParmas;
  formModel:FormGroup;
  txtPhone:FormControl;
  txtUser:FormControl;
  txtCardid:FormControl;
  txtAddress:FormControl;
  
  @ViewChild('confirm')
  confirm:DialogModelComponent;

  @ViewChild('autodialog')
  autodialog:AutoDialogModelComponent;

  constructor(public location:LocalstorageServiceService,public memberlogin:MemberLoginServiceService,public router:Router) {
    this.USER=this.location.getItem('USER',0);
    console.log(this.USER);
  this.txtPhone=new FormControl(this.USER.Phone,[Validators.required,Validators.pattern('1[35789][0-9]{9}')]);
  this.txtUser=new FormControl(this.USER.Name,[Validators.required]);
  this.txtCardid=new FormControl(this.USER.CardId,[Validators.required]);
  this.txtAddress=new FormControl(this.USER.Address,[Validators.required]);
  this.formModel=new FormGroup({
    phone:this.txtPhone,
    name:this.txtUser,
    address:this.txtAddress,
    cardId:this.txtCardid
    
  });

  }

  ngOnInit() {

   
  }
  finish_onclick()
  {
    this.confirm.showdialog({title:'修改信息',message:'您确认要修改您的个人信息吗？'});
  }
 
  frm_onsubmit()
  {
   console.log(this.formModel.value);
   this.formModel.value.id=this.USER.Id;
   this.memberlogin.memberupdate(this.formModel.value).subscribe((res)=>{
     console.log(res);
     if(res.Code==100)
     {
       this.location.setItem('USER',res.Data,0);
       this.autodialog.showdialog({message:'修改成功！'});
       let timer=setTimeout(() => {
        this.router.navigate(['/main/mine']);
        clearTimeout(timer);
       }, 1000);
       
     }
   })
  }
  confirm_onclick(e)
  {
    if(e)
    {
      this.frm_onsubmit();
    }
  }

}
