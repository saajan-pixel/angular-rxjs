import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { combineLatest, fromEvent } from 'rxjs';
import { map, withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-combine-letest',
  templateUrl: './combine-letest.component.html',
  styleUrls: ['./combine-letest.component.scss'],
})
export class CombineLetestComponent implements OnInit, AfterViewInit {
  name = ['anup', 'alice', 'samsir', 'bibek'];
  colors = ['red', 'yellow', 'green', 'blue', 'pink'];

  // template reference
  @ViewChild('names') names!: ElementRef;
  @ViewChild('color') color!: ElementRef;

  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit() {
    // for names
    const nameObs = fromEvent<any>(this.names.nativeElement, 'change').pipe(
      map((event) => event.target.value)
    );

    // for color
    const colorObs = fromEvent<any>(this.color.nativeElement, 'change').pipe(
      map((event) => event.target.value)
    );

    //ex-01 combineLatest
    combineLatest(nameObs, colorObs).subscribe(([name, color]) => {
      console.log(name, color);
      this.createbox(name, color, 'elid');
    });

    // ex-02 withLatestFrom
    // nameObs=>master
    // colorObs=>slave
    nameObs.pipe(withLatestFrom(colorObs)).subscribe(([name,color])=>{
      this.createbox(name,color,'elid2')
    })
  }

  createbox(name: any, color: any, containerId: any) {
    let elem = document.createElement('div');
    elem.innerText = name;
    elem.setAttribute('class', color);
    document.getElementById(containerId)?.appendChild(elem);
  }
}
