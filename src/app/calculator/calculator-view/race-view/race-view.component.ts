import { Component, OnInit, Input } from '@angular/core';
import { CalculateService } from '../../../shared/calculate.service';
import { Race } from '../../../shared/datatype/races';
import { JOB_DESC_TEXT } from '../../../shared/database/descriptionDataBase';
import { SkillType } from './../../../shared/datatype/skills';
import { ArmorType } from './../../../shared/datatype/armors';
import { WeaponType } from './../../../shared/datatype/weapons';

@Component({
  selector: 'app-race-view',
  templateUrl: './race-view.component.html',
  styleUrls: ['../calculator-view.component.scss']
})
export class RaceViewComponent implements OnInit {
  @Input() race: Race;
  description = JOB_DESC_TEXT;
  skillType = SkillType;
  weaponType = WeaponType;
  armorType = ArmorType;

  constructor(
    public calculateService: CalculateService,
  ) { }

  ngOnInit() {
  }

}
