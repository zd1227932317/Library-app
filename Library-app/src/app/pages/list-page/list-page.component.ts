import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActiveParams } from 'src/app/modules/active-params';
import { SectionSingleServiceService } from 'src/app/services/section-single-service.service';
import { BookListServiceService } from 'src/app/services/book-list-service.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  listparams:ActiveParams;
  notbooklist:boolean=false;
  constructor(public activated:ActivatedRoute,public sectionsingle:SectionSingleServiceService,public getbooklist:BookListServiceService) { }
  booklist:any[]=[];
  ngOnInit() {
    this.listparams=
    {
      id:this.activated.snapshot.params['id']||'',
      categoryId:this.activated.snapshot.params['categoryId']||'',
      publisherId:this.activated.snapshot.params['publisherId']||'',
      keyword:this.activated.snapshot.params['keyword']||''
    }
    //首页栏目列表
    if(this.listparams.id.length!=0)
    {
      this.sectionsingle.getsectionSingle({id:this.listparams.id}).subscribe((res)=>{
        console.log(res);
        this.booklist=res.Data.Books;
      })    
    }
    //搜索图书列表
    else
    {
      this.getbooklist.getbooklist(this.listparams).subscribe((res)=>{
        if(res.Code==100)
        { this.booklist=res.Data;  
          if(res.Data.length==0)
          {
            this.notbooklist=true;
          }
          else
          this.notbooklist=false;
        }        
      });
    }
  

  
    
   
 
   
  }

}
