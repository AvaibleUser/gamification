import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MatchComponent } from './components/match/match.component';
import { CrosswordsModule } from './crosswords/crosswords.module';
import { MatchCreatorComponent } from './components/match-creator/match-creator.component';

@NgModule({
  declarations: [
    AppComponent,
    MatchComponent,
    MatchCreatorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    CrosswordsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
