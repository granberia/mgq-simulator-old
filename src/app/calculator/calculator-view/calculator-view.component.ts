import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { DataService } from 'app/shared/data.service';
import { CalculateService } from '../../shared/calculate.service';
import { Actor } from '../../shared/datatype/actors';
import { Job } from '../../shared/datatype/jobs';
import { Race } from '../../shared/datatype/races';

@Component({
  selector: 'app-calculator-view',
  templateUrl: './calculator-view.component.html',
  styleUrls: ['./calculator-view.component.scss']
})
export class CalculatorViewComponent implements OnInit, OnDestroy {
  unsubscribe: Subject<void> = new Subject<void>();
  loaded = false;

  formGroup: FormGroup;
  viewId: string;

  actorList: Actor[];
  actor: Actor;

  jobList: Job[];
  job: Job;

  raceRawList: Race[]; // 각 Actor 마다 선택 가능한 종족이 다르다
  raceList: Race[];
  race: Race;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
    public calculateService: CalculateService,
  ) { }

  ngOnInit() {
    this.actorList = this.dataService.getAllActors();
    this.jobList = this.dataService.getAllJobs();
    this.raceRawList = this.dataService.getAllRaces();
    this.formGroup = new FormGroup({
      actor: new FormControl(['']),
      race: new FormControl(['']),
      job: new FormControl(['']),
    });
    this.formGroup.controls['actor'].valueChanges.takeUntil(this.unsubscribe)
      .subscribe((id) => {
        this.actor = this.actorList.find(actor => actor.id === id);
        this.formGroup.controls['job'].setValue(this.actor.defaultJob);
        this.raceList = this.raceRawList; // .filter(item => this.actor.baseRaces.includes(item.category));
        this.formGroup.controls['race'].setValue(this.actor.defaultRace);
      });
    this.formGroup.controls['job'].valueChanges.takeUntil(this.unsubscribe)
      .subscribe((id) => {
        this.job = this.jobList.find(job => job.id === id);
      });
    this.formGroup.controls['race'].valueChanges.takeUntil(this.unsubscribe)
      .subscribe((id) => {
        this.race = this.raceList.find(race => race.id === id);
      });

    this.formGroup.controls['actor'].setValue('1');

    this.route.params.takeUntil(this.unsubscribe)
      .subscribe((params) => {
        this.viewId = params['id'];
        if (this.viewId) {
          this.actor = this.actorList.find(actor => actor.id === this.viewId);
        }
      });

    this.loaded = true;
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
