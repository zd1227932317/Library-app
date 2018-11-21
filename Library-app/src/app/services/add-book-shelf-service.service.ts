import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ROOTURL } from '../modules/rooturl';
import { ReaderParams } from '../modules/reader-params';

@Injectable({
  providedIn: 'root'
})
export class AddBookShelfServiceService {

  constructor(public http:HttpClient) { }

  addshelf(params:ReaderParams):Observable<any>
  {

    return this.http.get(ROOTURL.getRootURL()+'Transaction/AddBookShelf',{params:params as any});
  }
}
