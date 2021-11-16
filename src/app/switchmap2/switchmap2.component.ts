import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';
import { AppService } from '../app.service';

@Component({
  selector: 'app-switchmap2',
  templateUrl: './switchmap2.component.html',
  styleUrls: ['./switchmap2.component.scss']
})
export class Switchmap2Component implements OnInit,AfterViewInit {
  data!:any
  count!:number

  @ViewChild('searchform') searchform!:NgForm
  constructor(private as:AppService,private fb:FormBuilder) { }

  ngOnInit(): void {


    // this.as.getdata('vero').subscribe(res=> {
    //   console.log(res)
    //   this.data=res
    // })
  }
  ngAfterViewInit(){
    const form=this.searchform.valueChanges
    form?.pipe(
      // pluck('searchTerm')
      map(res=> res.searchTerm),debounceTime(1000),distinctUntilChanged(),switchMap(res=> this.as.getdata(res))).subscribe(res=>{
      console.log(res)
      this.data=res
      console.log("count=>",Object.keys(res).length)
      this.count=Object.keys(res).length
    })
  }





}
