import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncSubjectComponent } from './component/async-subject/async-subject.component';
import { ConcatComponent } from './concat/concat.component';
import { ConcatmapComponent } from './concatmap/concatmap.component';
import { Concatmap2Component } from './concatmap2/concatmap2.component';
import { ExhaustmapComponent } from './exhaustmap/exhaustmap.component';
import { MergeComponent } from './merge/merge.component';
import { MergemapComponent } from './mergemap/mergemap.component';
import { ShareReplayComponent } from './share-replay/share-replay.component';
import { SwitchmapComponent } from './switchmap/switchmap.component';
import { Switchmap2Component } from './switchmap2/switchmap2.component';

const routes: Routes = [
  {path:'asyncsubject',component:AsyncSubjectComponent},
  {path:'concat',component:ConcatComponent},
  {path:'merge',component:MergeComponent},
  {path:'mergemap',component:MergemapComponent},
  {path:'concatmap',component:ConcatmapComponent},
  {path:'switchmap',component:SwitchmapComponent},
  {path:'concatmap2',component:Concatmap2Component},
  {path:'switchmap2',component:Switchmap2Component},
  {path:'exhaustmap',component:ExhaustmapComponent},
  {path:'shareReplay',component:ShareReplayComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
