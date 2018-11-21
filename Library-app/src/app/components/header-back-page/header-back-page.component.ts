import { Component, OnInit,Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header-back-page',
  templateUrl: './header-back-page.component.html',
  styleUrls: ['./header-back-page.component.css']
})
export class HeaderBackPageComponent implements OnInit {

  constructor( public location:Location) { }
  @Input()
  title:string='';
  ngOnInit() {
  }
  back()
  {
    this.location.back();
  }
}
