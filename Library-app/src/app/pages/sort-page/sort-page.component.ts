import { Component, OnInit } from '@angular/core';
import { CategoryListServiceService } from 'src/app/services/category-list-service.service';

@Component({
  selector: 'app-sort-page',
  templateUrl: './sort-page.component.html',
  styleUrls: ['./sort-page.component.css']
})
export class SortPageComponent implements OnInit {
  categorylist:string[]=[];
  constructor(public getcategorylist:CategoryListServiceService) { }

  ngOnInit() {
    this.getcategorylist.getcategory().subscribe((res)=>{
      console.log(res);
      if(res.Code==100)
      {
        this.categorylist=res.Data;
      }
    })
  }

}
