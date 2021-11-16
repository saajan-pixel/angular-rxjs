import { Component, OnInit } from '@angular/core';

import { from, of } from 'rxjs';
import { concatMap, delay, mergeMap } from 'rxjs/operators';
import { AppService } from '../app.service';

@Component({
  selector: 'app-concatmap2',
  templateUrl: './concatmap2.component.html',
  styleUrls: ['./concatmap2.component.scss'],
})
export class Concatmap2Component implements OnInit {
  constructor(private as: AppService) {}

  array = [
    {
      img: 'https://cdn.mos.cms.futurecdn.net/fwt5WMxCzcapp4WWbj7PX5.jpg',
      title: 'Facebook',
      msg: 'Somebody sent you a friend request',
    },
    {
      img: 'https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png',
      title: 'Instagram',
      msg: 'Somebody follows you on instagram',
    },

    {
      img: 'https://image.similarpng.com/very-thumbnail/2020/06/Twitter-logo-on-transparent-background-PNG.png',
      title: 'Twutter',
      msg: 'Somebody sent you a friend request',
    },
  ];

  gethtml(data: any) {
    return of(`<div class="card-header">

   <h6>${data.title}   <img src="${data.img}" width="100px" height="100px"></h6>
  </div>
  <div class="card-body">
    <p>${data.msg}</p>
  </div>
  <br>`).pipe(delay(2000));
  }

  ngOnInit(): void {
    const notify = from(this.array);
    notify.pipe(concatMap((res) => this.gethtml(res))).subscribe((res) => {
      this.as.print2(res, 'card');
    });
  }
}
