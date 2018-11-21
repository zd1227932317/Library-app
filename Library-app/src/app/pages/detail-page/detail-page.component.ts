import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BoolSingleServiceService } from 'src/app/services/bool-single-service.service';
import { LocalstorageServiceService } from 'src/app/services/localstorage-service.service';
import { UserParmas } from 'src/app/modules/user-parmas';
import { AddBookShelfServiceService } from 'src/app/services/add-book-shelf-service.service';
import { ShelfServiceService } from 'src/app/services/shelf-service.service';
import { AutoDialogModelComponent } from 'src/app/components/auto-dialog-model/auto-dialog-model.component';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {
  bookdetail:any;
  activestate:boolean=true;
  user:UserParmas;
  bookNumber:number=0;
  @ViewChild('autodialog')
  autodialog:AutoDialogModelComponent

  constructor(public router:Router ,public activated:ActivatedRoute,public getdetail:BoolSingleServiceService,public shelf:ShelfServiceService,public local:LocalstorageServiceService,public addshelf:AddBookShelfServiceService) { }
  
  ngOnInit() {
    this.user=this.local.getItem('USER',0);
    this.getdetail.getbookdetail({id:this.activated.snapshot.params['id']}).subscribe((res)=>{
      this.bookdetail=res.Data;  
    })

   this.getshelf();
  }
  //加入书架
  addbookshelf_onclick(book)
  {
    let id:string=this.activated.snapshot.params['id'];
    if(this.user)
    { console.log(book);
      this.addshelf.addshelf({bookId:book.Book.Id,readerId:this.user.Id}).subscribe((res)=>{
        console.log(res);
        if(res.Code==100)
        {
          this.getshelf();
          // alert('添加成功!');
          this.autodialog.showdialog({message:'添加成功！'});
        }
        else
        {
          this.autodialog.showdialog({message:res.Message});
          // alert(res.Message);
        }
      })
    }
    else
    this.router.navigate(['/login',{url:'detail/'+id}]);
   
  }

  
  //获取书架数量
  getshelf()
  {
    if(this.user)
    {
      this.shelf.getshelflist({readerId:this.user.Id}).subscribe((res)=>{
        console.log(res);
        if(res.Code==100)
        {
          this.bookNumber=res.Data.length;
        }
      })
    }
    }
   
}
