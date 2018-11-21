import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ROOTURL } from '../modules/rooturl';
import { LoginParams } from '../modules/login-params';

@Injectable({
  providedIn: 'root'
})
export class MemberLoginServiceService {

  constructor(public http:HttpClient) { }
  
  userLogin(parms:LoginParams):Observable<any>
  {
    console.log(parms);
    return this.http.post(ROOTURL.getRootURL()+'member/login',parms);
  }
  memberupdate(params):Observable<any>
  {
    console.log(params);
    return this.http.post(ROOTURL.getRootURL()+'member/update',params);
  }


}
