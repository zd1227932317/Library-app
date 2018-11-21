import { Component, OnInit } from '@angular/core';
import { AdServiceService } from 'src/app/services/ad-service.service';
import { SectionListServiceService } from 'src/app/services/section-list-service.service';
import { Router } from '@angular/router';
import { SearchBooklistParams } from 'src/app/modules/search-booklist-params';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  myimages:string[]=[];
  booklist:any[]=[];
  constructor(private getad:AdServiceService,public getsectionList:SectionListServiceService,public router:Router) { }

  ngOnInit() {
    this.getad.getad().subscribe((res)=>{
      console.log(res);
      this.myimages=res.Data;
    })
    this.getsectionList.getsection().subscribe((res)=>{
      console.log(res);
      this.booklist=res.Data;
    })
  }

  book_onclick(bookid:string):void
  {
    this.router.navigate(['/detail',bookid]);
  }

  title_onclick(book:any):void
  {
   this.router.navigate(['/list',{id:book.Id}]);
  }
}
