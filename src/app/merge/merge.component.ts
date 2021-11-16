import { Component, OnDestroy, OnInit } from '@angular/core';
import { merge, interval, Subscription } from 'rxjs';
import {map, take} from 'rxjs/operators'
import { AppService } from '../app.service';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss']
})
export class MergeComponent implements OnInit,OnDestroy {
concats:any
// sourceTech!:Subscription
// sourceNews!:Subscription
// sourceComedy!:Subscription
  constructor(private as:AppService) { }
  ngOnDestroy(): void {
// this.concats.complete()
  }

  ngOnInit(): void {
    const sourceTech=interval(2000).pipe(map(res=> "TechVideo"+(res+1) ),take(5))
    const sourceNews=interval(6000).pipe(map(res=> "NewsVideo"+(res+1) ),take(4))
    const sourceComedy=interval(4000).pipe(map(res=> "ComedyVideo"+(res+1) ),take(3))

    this.concats=merge(sourceTech,sourceComedy,sourceNews)
    this.concats.subscribe((res:any)=>{
      console.log(res)
     this.as.print(res,'ul')
    })


  }

}
