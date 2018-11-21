import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header-search-book-page',
  templateUrl: './header-search-book-page.component.html',
  styleUrls: ['./header-search-book-page.component.css']
})
export class HeaderSearchBookPageComponent implements OnInit {

  keyword:string='';
  @Output()
  searchKeyword:EventEmitter<any>=new EventEmitter<any>();
  @Output()
  inputChange:EventEmitter<any>=new EventEmitter<any>();

  @Input()
  message:string;

  constructor(public location:Location) { }

  ngOnInit() {
   this.keyword='';
  
  }
  back()
  {
    this.location.back();
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.keyword=this.message;
  }

  searchicon_onclick()
  {
    if(this.keyword.length==0)
    {
      this.keyword=this.message;
    }
    this.searchKeyword.emit(this.keyword);
  }
  input_change(e)
  {
    console.log(e.target.value);
    this.inputChange.emit(e.target.value);
  }
}
