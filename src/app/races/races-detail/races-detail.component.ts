import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../shared/data.service';
import { CalculateService } from '../../shared/calculate.service';
import { Race } from '../../shared/datatype/races';
import { JOB_DESC_TEXT } from '../../shared/database/descriptionDataBase';
import { SkillType } from './../../shared/datatype/skills';
import { ArmorType } from './../../shared/datatype/armors';
import { WeaponType } from './../../shared/datatype/weapons';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-races-detail',
  templateUrl: './races-detail.component.html',
  styleUrls: ['./races-detail.component.scss']
})
export class RacesDetailComponent implements OnInit, OnDestroy {
  unsubscribe: Subject<void> = new Subject<void>();
  description = JOB_DESC_TEXT;
  skillType = SkillType;
  weaponType = WeaponType;
  armorType = ArmorType;
  race: Race;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dataService: DataService,
  ) { }

  ngOnInit() {
    this.route.params
      .takeUntil(this.unsubscribe)
      .subscribe((params) => {
        this.race = this.dataService.getOneRace(params.id);
      });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}

