import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ROOTURL } from '../modules/rooturl';
import { SearchBooklistParams } from '../modules/search-booklist-params';

@Injectable({
  providedIn: 'root'
})
export class BookListServiceService {

  constructor(public http:HttpClient) { }

  getbooklist(params:SearchBooklistParams):Observable<any>
  {
    
    return this.http.get(ROOTURL.getRootURL()+'book/list',{params:params as any});
  }
}
