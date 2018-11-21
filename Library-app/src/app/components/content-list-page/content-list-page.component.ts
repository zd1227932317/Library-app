import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-list-page',
  templateUrl: './content-list-page.component.html',
  styleUrls: ['./content-list-page.component.css']
})
export class ContentListPageComponent implements OnInit {

  @Input()
  list:any[]=[];

  @Input()
  notbboklist:boolean;

  constructor() { }

  ngOnInit() {
   
  }
 
 

}
