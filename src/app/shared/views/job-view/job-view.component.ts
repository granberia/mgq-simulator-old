import { Component, OnInit, Input } from '@angular/core';
import { CalculateService } from '../../../shared/calculate.service';
import { Job } from '../../../shared/datatype/jobs';
import { JOB_DESC_TEXT } from '../../../shared/database/descriptionDataBase';
import { SkillType } from '../../../shared/datatype/skills';
import { ArmorType } from '../../../shared/datatype/armors';
import { WeaponType } from '../../../shared/datatype/weapons';

@Component({
  selector: 'app-job-view',
  templateUrl: './job-view.component.html',
  styleUrls: ['./job-view.component.scss']
})
export class JobViewComponent implements OnInit {
  @Input() job: Job;
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
