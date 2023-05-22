import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchComponent } from './components/match/match.component';
import { CreatorComponent } from './crosswords/components/creator/creator.component';
import { MatchCreatorComponent } from './components/match-creator/match-creator.component';

const routes: Routes = [
  {
    path: 'match/:id',
    component: MatchComponent,
  },
  {
    path: 'match',
    component: MatchCreatorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
