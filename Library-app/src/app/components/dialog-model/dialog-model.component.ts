import { Component, OnInit, EventEmitter,Output } from '@angular/core';
import { Dialogparams } from 'src/app/modules/dialogparams';

@Component({
  selector: 'app-dialog-model',
  templateUrl: './dialog-model.component.html',
  styleUrls: ['./dialog-model.component.css']
})
export class DialogModelComponent implements OnInit {
  state:boolean=false;
  dialogparams={
    message:'默认内容',
    title:'默认标题',
  };

 
  @Output()
  afterconfirm:EventEmitter<any>=new EventEmitter();
 
 
  
  constructor() { 
  }

  ngOnInit() {
  
  }
 
  showdialog(message:Dialogparams)
  { 
    this.state=true;
    this.dialogparams.message=message.message;
    this.dialogparams.title=message.title;
   
  }
  confirm_onclick(e)
  {
    // console.log(e);
   
    e.title=this.dialogparams.title;
    this.state=false;
    this.afterconfirm.emit(e);
  }

}
