import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsyncSubjectComponent } from './component/async-subject/async-subject.component';
import { ConcatComponent } from './concat/concat.component';
import { MergeComponent } from './merge/merge.component';
import { MergemapComponent } from './mergemap/mergemap.component';
import { ConcatmapComponent } from './concatmap/concatmap.component';
import { SwitchmapComponent } from './switchmap/switchmap.component';
import { Concatmap2Component } from './concatmap2/concatmap2.component';
import { Switchmap2Component } from './switchmap2/switchmap2.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ExhaustmapComponent } from './exhaustmap/exhaustmap.component';
import { ShareReplayComponent } from './share-replay/share-replay.component';

@NgModule({
  declarations: [
    AppComponent,
    AsyncSubjectComponent,
    ConcatComponent,
    MergeComponent,
    MergemapComponent,
    ConcatmapComponent,
    SwitchmapComponent,
    Concatmap2Component,
    Switchmap2Component,
    ExhaustmapComponent,
    ShareReplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
