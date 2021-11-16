import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.scss'],
})
export class AsyncSubjectComponent implements OnInit {
  constructor(private as: AppService) {}
  asyncVideoEmit!: any;
  valuesss:any=[]
  ngOnInit(): void {
    this.as.asyncVideoEmit.subscribe((res) => {
      this.asyncVideoEmit = res;
    });
  }
  onClick(values: any) {
    console.log(values.value);
    this.valuesss.push(values.value)

    // this will send the data to async subject and we need to subscribe after this
    this.as.asyncVideoEmit.next(values.value);
  }

  // oncomplete
  onComplete() {
    this.as.asyncVideoEmit.complete();
  }
}
