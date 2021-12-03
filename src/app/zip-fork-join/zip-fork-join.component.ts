import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { forkJoin, fromEvent ,of,zip} from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-zip-fork-join',
  templateUrl: './zip-fork-join.component.html',
  styleUrls: ['./zip-fork-join.component.scss'],
})
export class ZipForkJoinComponent implements OnInit, AfterViewInit {
  @ViewChild('names') names!: ElementRef;
  @ViewChild('surnames') surnames!: ElementRef;

  constructor() {}
  name = ['amir', 'sajan', 'bibek', 'avishek'];
  surname = ['shrestha', 'dhakal', 'kharel', 'bhattarai'];
  ngAfterViewInit() {
    const nObs=fromEvent(this.names.nativeElement, 'change').pipe(map((event:any)=> event.target.value),take(3));

    const sObs=fromEvent(this.surnames.nativeElement, 'change').pipe(map((event:any)=> event.target.value),take(3));

    // zip
    zip(nObs,sObs).subscribe(([name,surname])=>{
      console.log(name,surname)
      this.print(name,surname,'output')
    })

    forkJoin([nObs,sObs]).subscribe(([name,surname])=>{
      this.print(name,surname,'fork')
    })



  }

  print(name:string,surname:string,containerId:string){
    let elem=document.createElement('h1')
    elem.innerText=name+' '+surname
    document.getElementById(containerId)?.appendChild(elem)
  }

  ngOnInit(): void {

  }
}
