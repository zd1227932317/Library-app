import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ROOTURL } from '../modules/rooturl';

@Injectable({
  providedIn: 'root'
})
export class AdServiceService {
Root:string=ROOTURL.getRootURL();
  constructor(private http:HttpClient) { }

  getad():Observable<any>{
   return this.http.get(this.Root+'advert/list');
  }
}
