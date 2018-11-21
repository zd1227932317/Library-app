import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageServiceService } from 'src/app/services/localstorage-service.service';
import { BookListServiceService } from 'src/app/services/book-list-service.service';
import { SearchBooklistParams } from 'src/app/modules/search-booklist-params';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  hotlist:string[]=['从入门到放弃','从大一到结业','曹熙程永不挂科','挂科的曹熙程'];
  histroylist:string[]=['从入门到放弃','为什么我头发这么少','霸王防脱','如何防止脱发','洗手间为什么要叫洗手间'];
  booklist:string[]=[];
  notbooklist:boolean=false;
  searchResult:boolean=true;
  listparams:SearchBooklistParams;
 

  message:string;
  constructor(public Router:Router,public localstroage:LocalstorageServiceService,private getbooklist:BookListServiceService) { }

  ngOnInit() {
    this.gethistroylist();
    console.log(this.histroylist);
    this.message=this.hotlist[Math.floor(Math.random()*this.hotlist.length)];
   
  }
  

  getkeyword(e):void
  {
    this.listparams={
      keyword:e||'',
    };
    this.localstroage.appendItem('record',e,0); 
    this.getbooklist.getbooklist(this.listparams).subscribe((res)=>{
      if(res.Code==100)
      { 
        this.booklist=res.Data; 
        this.searchResult=false; 
        console.log(this.searchResult);
        if(res.Data.length==0)
        {
          this.notbooklist=true;
        }
        else
        this.notbooklist=false;
      }        
    });
  }
  rubbish_onclick(index:number):void
  {
    this.localstroage.removeItem('record',index,0);
    this.histroylist.splice(index,1);
  }
  clearhistory_onclick():void
  {
      this.localstroage.clearItem('record',0);
      this.histroylist=this.localstroage.getItem('record',0)||[];
  }

  history_onclick(message:string):void
  {
    console.log(message); 
    this.message=message;
    this.getkeyword(message);
  }
  hot_onclick(message:string):void
  {
    console.log(message);
    this.message=message;
    this.getkeyword(message);
  }
  changekeyword(e:string)
  {
    if(e.length==0)
    {
      this.searchResult=true;
      this.gethistroylist();
    }
  }

  gethistroylist():void
  {
    this.histroylist=this.localstroage.getItem('record',0)||[];
  }

}
