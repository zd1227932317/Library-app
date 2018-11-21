import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReaderParams } from '../modules/reader-params';
import { Observable } from 'rxjs';
import { ROOTURL } from '../modules/rooturl';

@Injectable({
  providedIn: 'root'
})
export class BorrowrecordsServiceService {

  constructor(public http:HttpClient) { }
  getBorrowRecords(params:ReaderParams):Observable<any>
  {
    return this.http.get(ROOTURL.getRootURL()+'Transaction/GetBorrowRecords',{params:params as any});
  } 
  cancelOrder(parms:ReaderParams):Observable<any>
  { 
    return this.http.post(ROOTURL.getRootURL()+'Transaction/CancelOrder',parms);
  }
  confirmOrder(params:ReaderParams):Observable<any>
  {
    return this.http.post(ROOTURL.getRootURL()+'Transaction/ConfirmOrder',params);
  } 
  
}
