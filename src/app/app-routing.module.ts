import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CombineLetestComponent } from './combine-letest/combine-letest.component';
import { AsyncSubjectComponent } from './component/async-subject/async-subject.component';
import { ConcatComponent } from './concat/concat.component';
import { ConcatmapComponent } from './concatmap/concatmap.component';
import { Concatmap2Component } from './concatmap2/concatmap2.component';
import { ExhaustmapComponent } from './exhaustmap/exhaustmap.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { Formarray2Component } from './formarray2/formarray2.component';
import { MergeComponent } from './merge/merge.component';
import { MergemapComponent } from './mergemap/mergemap.component';
import { PromiseComponent } from './promise/promise.component';
import { ShareReplayComponent } from './share-replay/share-replay.component';
import { SwitchmapComponent } from './switchmap/switchmap.component';
import { Switchmap2Component } from './switchmap2/switchmap2.component';
import { ZipForkJoinComponent } from './zip-fork-join/zip-fork-join.component';

const routes: Routes = [
  {path:'promise',component:PromiseComponent},
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
  {path:'combineLatest',component:CombineLetestComponent},
  {path:'zip',component:ZipForkJoinComponent},
  {path:'formarray',component:FormArrayComponent},
  {path:'formarray2',component:Formarray2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
