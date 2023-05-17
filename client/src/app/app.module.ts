import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameOneComponent } from './game-one/game-one/game-one.component';
import { GameInicioComponent } from './game-one/game-inicio/game-inicio.component';
import { GameRankingComponent } from './game-one/game-ranking/game-ranking.component';
import { GameDataService } from './game-one/game-data.service';



@NgModule({
  declarations: [
    AppComponent,
    GameOneComponent,
    GameInicioComponent,
    GameRankingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [GameDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
