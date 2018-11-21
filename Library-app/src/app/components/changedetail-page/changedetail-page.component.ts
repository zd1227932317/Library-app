import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-changedetail-page',
  templateUrl: './changedetail-page.component.html',
  styleUrls: ['./changedetail-page.component.css']
})
export class ChangedetailPageComponent implements OnInit {

  changemessage;



  constructor(public activate:ActivatedRoute,public router:Router) { }


  ngOnInit() {
    this.changemessage=this.activate.snapshot.params['changemessage'];
  }
  confirm_onclick()
  {
    
  }

}
