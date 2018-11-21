import { Component, OnInit,Input } from '@angular/core';
import { AdServiceService } from 'src/app/services/ad-service.service';

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.css']
})
export class AdBannerComponent implements OnInit {

  @Input()
  images:string[]=[];

  index:number=0;

  constructor(private getad:AdServiceService) { }

  ngOnInit() {
    setInterval(()=>{
      this.index++;
      if(this.index>=this.images.length)
      {
        this.index=0;
      }
    },2000)
  }

}
