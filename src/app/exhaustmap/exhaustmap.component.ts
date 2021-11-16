import { HttpClient } from '@angular/common/http';

import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

import { fromEvent } from 'rxjs';
import { delay, exhaustMap, mergeMap, tap } from 'rxjs/operators';
import { AppService } from '../app.service';

@Component({
  selector: 'app-exhaustmap',
  templateUrl: './exhaustmap.component.html',
  styleUrls: ['./exhaustmap.component.scss'],
})
export class ExhaustmapComponent implements OnInit, AfterViewInit {
  count = 0;
  data: any;
  fetching = false;
  url = ' http://localhost:3000/data';
  saverequest!: number;
  constructor(private as: AppService, private http: HttpClient) {}

  @ViewChild('btn') btn!: ElementRef;

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    fromEvent(this.btn.nativeElement, 'click')
      .pipe(
        tap(() => (this.fetching = true)),
        exhaustMap(() => this.onSave(this.count++)),
        delay(5000)
      )
      .subscribe((res) => {
        console.log(res);
        this.onfetch();
        this.fetching = false;
      });
  }
  onSave(changes: any) {
    return this.http.put(this.url, { d: changes });
  }

  onfetch() {
    this.http.get<any>(this.url).subscribe((res) => {
      console.log('fetch data', res.d);
      this.saverequest = res.d;
    });
  }
}
