import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ROOTURL } from '../modules/rooturl';
import { ActiveParams } from '../modules/active-params';

@Injectable({
  providedIn: 'root'
})
export class SectionSingleServiceService {

  constructor(public http:HttpClient) { }

  getsectionSingle(params:ActiveParams):Observable<any>
  {
    return this.http.get(ROOTURL.getRootURL()+'section/single',{params:params as any});
  }
}
