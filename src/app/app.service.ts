import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsyncSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AppService {
  url=" http://localhost:3000/data"

  constructor(private http:HttpClient) { }
  asyncVideoEmit=new AsyncSubject()
  print(value:any,elementid:any){
    let list=document.createElement('li')
    list.innerText=value
    document.getElementById(elementid)?.appendChild(list)
  }



  print2(value:any,elementid:any){
    let x=document.createElement('div')
    x.setAttribute('class','item')
    x.innerHTML=value
    document.getElementById(elementid)?.prepend(x)
  }

  getdata(searchTerm:any):Observable<any>{
    return this.http.get(`${environment.url}`+'?q='+searchTerm);

  }


}
