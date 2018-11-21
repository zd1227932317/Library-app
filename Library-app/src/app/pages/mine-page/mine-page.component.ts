import { Component, OnInit } from '@angular/core';
import { LocalstorageServiceService } from 'src/app/services/localstorage-service.service';
import { UserParmas } from 'src/app/modules/user-parmas';

@Component({
  selector: 'app-mine-page',
  templateUrl: './mine-page.component.html',
  styleUrls: ['./mine-page.component.css']
})
export class MinePageComponent implements OnInit {

  constructor(public local:LocalstorageServiceService) { }
  USER:UserParmas;

  ngOnInit() {
    this.USER=this.local.getItem('USER',0);
    
  }

}
