import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {

  constructor() { }

  dellavailable(){
    return true
  }
  hpavailable(){
    return false
  }


  ngOnInit(): void {
    const x=new Promise((resolve,reject)=>{
      if(this.dellavailable()){
        setTimeout(() => {
          resolve("dell is available")
        }, 2000);
      }
      else if(this.hpavailable()){
        setTimeout(() => {
          resolve("hp is available")
        }, 2000);
      }
      else{
        setTimeout(() => {
          reject("both not available")
        }, 2000);
      }
    })
    x.then(res=> console.log(res)).catch(res=>{
      console.log(res)
    })
  }

}
