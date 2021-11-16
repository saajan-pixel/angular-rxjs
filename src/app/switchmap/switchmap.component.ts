import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { delay, map, mergeAll, switchAll, switchMap } from 'rxjs/operators';
import { AppService } from '../app.service';

@Component({
  selector: 'app-switchmap',
  templateUrl: './switchmap.component.html',
  styleUrls: ['./switchmap.component.scss']
})
export class SwitchmapComponent implements OnInit {

  constructor(private as:AppService) { }

  // 1st observable
   getdata(data:any){
     return of(data+ " video").pipe(delay(1000))
   }
  ngOnInit(): void {

    // ex1 map
    // 2nd observable
    const source=from(['Tech','Comedy','News'])
    source.pipe(map(res=> this.getdata(res))).subscribe(res=>{
      this.as.print(res,'ul')
      // console.log(res)
    })

    // ex2 map+switchall
    source.pipe(map(res=> this.getdata(res)),switchAll()).subscribe(res=>{
      console.log(res)
      this.as.print(res,'ul2')
    })

    // ex switchMap
    source.pipe(switchMap(res=> this.getdata(res))).subscribe(res=>{
      this.as.print(res,'ul3')
    })
  }


}
