import { Component, OnInit, ViewChild } from '@angular/core';
import { LocalstorageServiceService } from 'src/app/services/localstorage-service.service';
import { UserParmas } from 'src/app/modules/user-parmas';
import { Router } from '@angular/router';
import { ShelfServiceService } from 'src/app/services/shelf-service.service';
import { DialogModelComponent } from 'src/app/components/dialog-model/dialog-model.component';
import { AddBookShelfServiceService } from 'src/app/services/add-book-shelf-service.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-shelf-page',
  templateUrl: './shelf-page.component.html',
  styleUrls: ['./shelf-page.component.css']
})
export class ShelfPageComponent implements OnInit {

  USER: UserParmas;
  shelflist: any[] = [];
  selectedItems: boolean[] = [];
  currentbookid: string;
  allchecked: boolean = false;
  editstate: boolean = true;
  removebooklist: string[] = [];

  @ViewChild('confirm')
  confirm: DialogModelComponent;

  constructor(public local: LocalstorageServiceService, public shelf: ShelfServiceService, public router: Router,public addBookshelf:AddBookShelfServiceService) { }

  ngOnInit() {
    this.USER = this.local.getItem('USER', 0);
    this.loadshelflist();

  }
  //单选
  selected_onclick(index: number) {
    event.stopPropagation();
    let flag: boolean = true;
    this.selectedItems[index] = !this.selectedItems[index];
    for (let item of this.selectedItems) {
      if (item == true)
        flag = false;
    }
    this.allchecked = flag;
  }
  //全选
  allselected_onclick() {
    if (this.allchecked == true) {
      for (let i = 0; i < this.selectedItems.length; i++) {
        this.selectedItems[i] = true;
      }
    }
    else {
      for (let i = 0; i < this.selectedItems.length; i++) {
        this.selectedItems[i] = false;
      }
      this.selectedItems.forEach((value) => {
        value = false;
      })
    }
    this.allchecked = !this.allchecked;
  }
  //小计
  count(): number {
    let count: number = 0;
    for (let value of this.selectedItems) {
      if (value == false) {
        count++;
      }
    }
    return count;
  }
  //移除
  removebook_onclick(item) {
    event.stopPropagation();
    this.confirm.showdialog({ title: '删除', message: `您确定要移除< ${item.Book.Name} >这本书吗` });
    this.currentbookid = item.Book.Id;
  }


  //加载书架列表
  loadshelflist() {
    this.selectedItems = [];
    this.shelf.getshelflist({ readerId: this.USER.Id }).subscribe((res) => {
      if (res.Code == 100) {
        this.shelflist = res.Data;
        for (let i = 0; i < this.shelflist.length; i++) {
          this.selectedItems.push(true);
        }
      }
    })
  }
  //点击跳转借阅
  btnBorrow_onclick() {
    this.router.navigate(['/list']);
  }
  bookdetail_onclick(bookid) {
    this.router.navigate(['/detail', bookid]);
  }
  //选择删除
  delete_onclick() {
    this.removebooklist = [];
    for (let i = 0; i < this.selectedItems.length; i++) {
      if (!this.selectedItems[i]) {
        this.removebooklist.push(this.shelflist[i].Book.Id);
      }
    }
    this.confirm.showdialog({ title: '批量删除', message: '您确定要删除这些书吗？'})
  }


  //删除单本书
  remove_book(bookid) {
    this.shelf.removebook({ readerId: this.USER.Id, bookId: bookid }).subscribe((res) => {
      if (res.Code == 100) {
        this.loadshelflist();
      }
    })
  }



  //批量 或单个提交订单
  submitOrder_onclick()
  {
    this.removebooklist=[];
    for (let i = 0; i < this.selectedItems.length; i++) {
      if (this.selectedItems[i]) {
        this.removebooklist.push(this.shelflist[i].Book.Id);
      }
    }
    console.log(this.removebooklist);
    this.confirm.showdialog({ message: '您确定要提交订单吗', title: '提交' });
    
  }
  //加入借书架
  addbookshelf()
  {
    for(let item of this.removebooklist)
    this.addBookshelf.addshelf({readerId:this.USER.Id,bookId:item}).subscribe((res)=>{
      if(res.Code==100)
      {
       this.loadshelflist();
      }
    })
  
  }



  
  //如果没有选择就不能提交
  canclick():boolean
  {
    let flag=true;
    for(let item of this.selectedItems)
    {
      if(!item)
      {
        flag=false;
      }
    }
    return flag; 
  }

  //模式框确认按钮
  confirm_onclick(e) {
    if (e.title == '删除') {
      this.remove_book(this.currentbookid);
    }
    if (e.title == '批量删除') {
      for (let item of this.removebooklist) {
        this.remove_book(item);
      }
    }
    if (e.title == '提交') {
      for (let item of this.removebooklist) {
        this.remove_book(item);
      }
      this.shelf.submitOrder({ readerId: this.USER.Id }).subscribe((res) => {
        if (res.Code == 100) {
          this.addbookshelf();
          this.loadshelflist();
        }
      })
    }
  }
}

