import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MatchesService } from 'src/app/services/matches/matches.service';
import { Match } from 'src/model/interfaces/match.interface';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatchComponent implements OnInit {
  id!: string;
  match: Match | undefined;

  constructor(
    private ref: ChangeDetectorRef,
    private route: ActivatedRoute,
    private matchesService: MatchesService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (param: ParamMap) => (this.id = param.get('id') ?? '')
    );
    this.matchesService.getMatch(this.id).subscribe((apiMatch) => {
      this.match = apiMatch;
      this.ref.markForCheck();
    });
  }
}
