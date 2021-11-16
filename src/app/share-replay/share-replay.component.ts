import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-share-replay',
  templateUrl: './share-replay.component.html',
  styleUrls: ['./share-replay.component.scss']
})
export class ShareReplayComponent implements OnInit {

  aurl="https://fakestoreapi.com/products"
  allProducts!: Observable<any>;
  clothing!:Observable<any>
  electronics!:Observable<any>


  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    // for all products
    this.allProducts=this.http.get(this.aurl).pipe(shareReplay())

    // for clothing
    this.clothing=this.allProducts.pipe(map(res=> res.filter((data:any)=> data['category']=="men's clothing"
          // console.log(  res.filter((data:any)=>{
      //   return data['category']==="electronics"
      // }))
      )
    ))
  //  for electronics
   this.electronics=this.allProducts.pipe(map(res=> res.filter((data:any)=> data['category']=="electronics")))

  }


}
