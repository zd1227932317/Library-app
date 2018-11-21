import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ROOTURL } from '../modules/rooturl';
import { LoginParams } from '../modules/login-params';

@Injectable({
  providedIn: 'root'
})
export class PhoneloginServiceService {

  constructor(public http:HttpClient) { }

  SendCodeForReset(params:LoginParams):Observable<any>
  {
    return this.http.get(ROOTURL.getRootURL()+'member/SendCodeForReset',{params:params as any});
  }
  VerifyCodeForReset(params:LoginParams):Observable<any>
  {
    console.log(params);
    return this.http.post(ROOTURL.getRootURL()+'member/VerifyCodeForReset',params);
  }
  reset(params:LoginParams):Observable<any>
  {
    return this.http.post(ROOTURL.getRootURL()+'member/reset',params);
  }
}
