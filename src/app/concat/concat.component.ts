import { Component, OnInit } from '@angular/core';
import { concat, interval } from 'rxjs';
import {map, take} from 'rxjs/operators'
import { AppService } from '../app.service';
@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.scss']
})
export class ConcatComponent implements OnInit {

  constructor(private as:AppService) { }

  ngOnInit(): void {
    const sourceTech=interval(1000).pipe(map(res=> "TechVideo"+(res+1) ),take(5))
    const sourceNews=interval(1000).pipe(map(res=> "NewsVideo"+(res+1) ),take(4))
    const sourceComedy=interval(1000).pipe(map(res=> "ComedyVideo"+(res+1) ),take(3))

    const concats=concat(sourceTech,sourceComedy,sourceNews)
    concats.subscribe((res)=>{
      console.log(res)
     this.as.print(res,'ul')
    })
  }



}
