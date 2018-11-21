import { Component, OnInit } from '@angular/core';
import { Dialogparams } from 'src/app/modules/dialogparams';

@Component({
  selector: 'app-auto-dialog-model',
  templateUrl: './auto-dialog-model.component.html',
  styleUrls: ['./auto-dialog-model.component.css']
})
export class AutoDialogModelComponent implements OnInit {
  state:boolean=false;
  dialogparams={
    title:'提示信息',
    message:'内容'
  }
  timer;
  constructor() { }

  ngOnInit() {
  }
  dialog_onclick()
  {
    event.stopPropagation();
  }

  showdialog(message:Dialogparams)
  {
    this.dialogparams.message=message.message;
    this.state=true;

    this.timer=setInterval(()=>{
      clearInterval(this.timer);
      this.state=false;
    },1000)
  }

}
