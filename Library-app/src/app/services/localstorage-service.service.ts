import { Injectable } from '@angular/core';
import { UserParmas } from '../modules/user-parmas';


@Injectable({
  providedIn: 'root'
})
export class LocalstorageServiceService {
  historylist:string[]=[];
  constructor() { }

  setItem(key:string,value:any,state:number):void
  {
    if(state==1)
    {
      sessionStorage.setItem(key,JSON.stringify(value));
    }
    else
    {
      localStorage.setItem(key,JSON.stringify(value));
    }
  }

  appendItem(key:string,value:any,state:number):void
  {
    this.historylist=[];
    if(state==1)
    {    

      if(sessionStorage.getItem(key))
      {
        this.historylist=JSON.parse(sessionStorage.getItem(key));
      }
      this.historylist.unshift(value);
      sessionStorage.setItem(key,JSON.stringify( this.arr_unique(this.historylist)));
    }
    else
    {
      if(localStorage.getItem(key))
      {
        this.historylist=JSON.parse(localStorage.getItem(key));
      }
      this.historylist.unshift(value);
      localStorage.setItem(key,JSON.stringify(this.arr_unique(this.historylist)));
    }  
  }

  getItem(key:string,state):any
  {
    if(state==1)
    {
      this.historylist=JSON.parse(sessionStorage.getItem(key));
    }
    else{
      this.historylist=JSON.parse(localStorage.getItem(key));
    }
    return this.historylist;
  }

  removeItem(key:string,index:number,state:number):void
  {
    if(state==1)
    {

      this.historylist=JSON.parse(sessionStorage.getItem(key));
      this.historylist.splice(index,1);
      sessionStorage.setItem(key,JSON.stringify(this.historylist));
    }
    else
    {
        this.historylist=JSON.parse(localStorage.getItem(key));
      this.historylist.splice(index,1);
      localStorage.setItem(key,JSON.stringify(this.historylist));
    }
  }

  clearItem(key:string,state:number):void
  {
    if(state==1)
    sessionStorage.removeItem(key);
    else
    localStorage.removeItem(key);
  }

  public arr_unique(arr1:Array<any>):Array<any>
  {
    return Array.from(new Set(arr1));
  }

}
