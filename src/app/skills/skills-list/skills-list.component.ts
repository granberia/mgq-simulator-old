import { ActivatedRoute, Router } from '@angular/router';
import { SkillNameFilter, SkillTypeFilter } from '../../shared/filter';
import { SkillComparators } from '../../shared/comparator';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/data.service';
import { CalculateService } from '../../shared/calculate.service';
import { Skill, SkillType } from '../../shared/datatype/skills';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.scss']
})

export class SkillsListComponent implements OnInit {
  nameFilter = new SkillNameFilter();
  typeFilter = new SkillTypeFilter(this.dataService);
  skillComparators = SkillComparators;

  skillList: Skill[];
  skillType = SkillType;
  skillTypes: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dataService: DataService,
    public calculateService: CalculateService,
  ) { }

  ngOnInit() {
    for (let key in SkillType) {
      this.skillTypes.push(SkillType[key]);
    }
    this.skillList = this.dataService.getAllSkills().skills;
  }

  viewDetail(skill: Skill) {
    // this.router.navigate([`./${skill.id}`], { relativeTo: this.route });
  }
}


