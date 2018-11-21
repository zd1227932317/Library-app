import { Component, OnInit, ViewChild } from '@angular/core';

import { LocalstorageServiceService } from 'src/app/services/localstorage-service.service';
import { UserParmas } from 'src/app/modules/user-parmas';

import { BorrowrecordsServiceService } from 'src/app/services/borrowrecords-service.service';
import { Router } from '@angular/router';
import { DialogModelComponent } from 'src/app/components/dialog-model/dialog-model.component';
import { AutoDialogModelComponent } from 'src/app/components/auto-dialog-model/auto-dialog-model.component';


@Component({
  selector: 'app-borrowed-record-page',
  templateUrl: './borrowed-record-page.component.html',
  styleUrls: ['./borrowed-record-page.component.css']
})
export class BorrowedRecordPageComponent implements OnInit {

  constructor(public borrowrecords:BorrowrecordsServiceService,public local:LocalstorageServiceService,public router:Router) { }
  USER:UserParmas;
  recordlist:any[]=[];
  list:any[]=[];
  state:boolean=true;
  currentbookid:string;

  @ViewChild('confirm')
  confirm:DialogModelComponent;

  @ViewChild('autodialog')
  autodialog:AutoDialogModelComponent;

  ngOnInit() {
    this.USER = this.local.getItem('USER',0);  
   this.loadList(this.state);
  }

  changelist_onclick()
  {
    this.state=!this.state;
    this.loadList(this.state);
  }


  loadList(state:boolean)
  {
    this.borrowrecords.getBorrowRecords({readerId:this.USER.Id}).subscribe((res)=>{
      console.log(res);
      if(res.Code==100)
      {
        this.recordlist=res.Data;
        if(state)
        {
          this.list=this.recordlist.filter((item)=>item.State==1||item.State==2);
          console.log(this.list);
        }
        else
        this.list=this.recordlist.filter((item)=>item.State!=1||item.State!=2);
        console.log(this.list);
      }
    })
  }
  
  Orderstatus(item):string
  { 
    if(item.State==0)
    return  '订单已取消';
    else if(item.State==3)
    return '等待归还';
    else if(item.State==1)
    return '等待配送';
    else if(item.State==2)
    return '等待确认';
    else
    return '已归还';
  }

  //取消或确认收货
  Transaction_onclick(book)
  {
    event.stopPropagation();
    this.currentbookid=book.Id;
    if(book.State==1)
    {
    this.confirm.showdialog({message:'您确认要取消订阅吗？',title:'取消订阅'});
    }
    else
    {
      this.confirm.showdialog({message:'您要确认收货吗',title:'收货'});
    }

  }

  bookdetail_onclick(book)
  {
    console.log(book);
    this.router.navigate(['/detail',book.BookId]);
  }


  //点击确认是否取消订阅 收货
  confirm_onclick(e)
  {
    if(e.title=='取消订阅')
    {
      this.borrowrecords.cancelOrder({orderId:this.currentbookid,readerId:this.USER.Id}).subscribe((res)=>{
            console.log(res);
            if(res.Code==100)
            {
              this.loadList(this.state);
              this.autodialog.showdialog({message:'取消成功!'});
            }
          })
    }
    if(e.title=='收货')
    {
       this.borrowrecords.confirmOrder({orderId:this.currentbookid,readerId:this.USER.Id}).subscribe((res)=>{
        console.log(res);
        if(res.Code==100)
        {
          this.loadList(this.state);
          this.autodialog.showdialog({message:'成功收货!'});
        }
      })
      
    }
  }
}
