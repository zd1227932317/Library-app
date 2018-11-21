import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ROOTURL } from '../modules/rooturl';


@Injectable({
  providedIn: 'root'
})
export class BoolSingleServiceService {

  constructor(public http:HttpClient) { }

  getbookdetail(params):Observable<any>
  {
    console.log(params);
    return this.http.get(ROOTURL.getRootURL()+'book/single',{params:params as any});
  }
} 
