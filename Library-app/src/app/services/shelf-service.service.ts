import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReaderParams } from '../modules/reader-params';
import { Observable } from 'rxjs';
import { ROOTURL } from '../modules/rooturl';

@Injectable({
  providedIn: 'root'
})
export class ShelfServiceService {

  constructor(public http:HttpClient) { }

  getshelflist(params:ReaderParams):Observable<any>
  {
    console.log(params);
    return this.http.get(ROOTURL.getRootURL()+'Transaction/GetMyShelf',{params:params as any});
  }
  removemyshelf(params:ReaderParams):Observable<any>
  {
    return this.http.get(ROOTURL.getRootURL()+'Transaction/RemoveMyShelf',{params:params as any});
  }
  removebook(params:ReaderParams):Observable<any>
  {
    console.log(params);
    return this.http.get(ROOTURL.getRootURL()+'Transaction/RemoveBookFromShelf',{params:params as any});
  }
  submitOrder(params:ReaderParams):Observable<any>
  {
    console.log(params);
    return this.http.post(ROOTURL.getRootURL()+'Transaction/SubmitOrder',params);
  } 
}
