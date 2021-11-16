import { Component, OnInit } from '@angular/core';
import { concat, from, of } from 'rxjs';
import { concatAll, concatMap, delay, map, mergeAll, mergeMap } from 'rxjs/operators';
import { AppService } from '../app.service';

@Component({
  selector: 'app-concatmap',
  templateUrl: './concatmap.component.html',
  styleUrls: ['./concatmap.component.scss']
})
export class ConcatmapComponent implements OnInit {

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

    // ex-02 map+concatAll
    source.pipe(mergeMap(res=> this.getdata(res))).subscribe(res=> this.as.print(res,'ul2'))

    // ex-02 mergeMap
    source.pipe(concatMap(res=> this.getdata(res))).subscribe(res=> this.as.print(res,'ul3'))
  }

}
