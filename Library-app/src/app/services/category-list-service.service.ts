import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ROOTURL } from '../modules/rooturl';

@Injectable({
  providedIn: 'root'
})
export class CategoryListServiceService {

  constructor(public http:HttpClient) { }
  
  getcategory():Observable<any>
  {
    return this.http.get(ROOTURL.getRootURL()+'category/list');
  }
}
