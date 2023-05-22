import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrosswordsRoutingModule } from './crosswords-routing.module';
import { BoardComponent } from './components/board/board.component';
import { LetterComponent } from './components/letter/letter.component';
import { FormsModule } from '@angular/forms';
import { CreatorComponent } from './components/creator/creator.component';


@NgModule({
  declarations: [
    BoardComponent,
    LetterComponent,
    CreatorComponent,
  ],
  imports: [
    CommonModule,
    CrosswordsRoutingModule,
    FormsModule,
  ],
  exports: [
    BoardComponent,
    CreatorComponent,
  ]
})
export class CrosswordsModule { }
