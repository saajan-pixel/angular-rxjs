import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { delay, map, mergeAll, mergeMap } from 'rxjs/operators';
import { AppService } from '../app.service';

@Component({
  selector: 'app-mergemap',
  templateUrl: './mergemap.component.html',
  styleUrls: ['./mergemap.component.scss']
})
export class MergemapComponent implements OnInit {

  constructor(private as:AppService) { }

  // creating observable locally
  // 2nd observable
  getdata(data:any){
    return of(data+ " video uploaded").pipe(delay(2000))

  }

  ngOnInit(): void {
    // 1st observable
    const source=from(['Tech','Comedy','news'])

    // ex-01 Map
    source.pipe(map(res=> this.getdata(res))).subscribe(res=> this.as.print(res,'ul'))

    // ex-02 map+mergeAll
    source.pipe(map(res=> this.getdata(res)),mergeAll()).subscribe(res=> this.as.print(res,'ul2'))

    // ex-02 mergeMap
    source.pipe(mergeMap(res=> this.getdata(res))).subscribe(res=> this.as.print(res,'ul3'))
  }

}
