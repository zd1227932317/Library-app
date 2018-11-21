import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-flash-page',
  templateUrl: './flash-page.component.html',
  styleUrls: ['./flash-page.component.css']
})
export class FlashPageComponent implements OnInit {
 
  constructor(public Router:Router) { }
  timer:any;

  ngOnInit() {
   this.timer=setInterval(()=>{
      this.Router.navigate(['/main'],{replaceUrl:true});
      clearInterval(this.timer);
    },2000);
  }
  skip_onclick()
  {
    clearInterval(this.timer);
    this.Router.navigate(['/main'],{replaceUrl:true});
  }


}
