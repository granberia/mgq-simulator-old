import { ActivatedRoute, Router } from '@angular/router';
import { AbilityNameFilter, AbilityTypeFilter } from '../../shared/filter';
import { AbilityComparators } from '../../shared/comparator';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/data.service';
import { CalculateService } from '../../shared/calculate.service';
import { Ability, AbilityType } from '../../shared/datatype/abilities';

@Component({
  selector: 'app-abilities-list',
  templateUrl: './abilities-list.component.html',
  styleUrls: ['./abilities-list.component.scss']
})

export class AbilitiesListComponent implements OnInit {
  nameFilter = new AbilityNameFilter();
  typeFilter = new AbilityTypeFilter(this.dataService);
  abilityComparators = AbilityComparators;

  abilityList: Ability[];
  abilityType = AbilityType;
  abilityTypes: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dataService: DataService,
    public calculateService: CalculateService,
  ) { }

  ngOnInit() {
    for (let key in AbilityType) {
      this.abilityTypes.push(AbilityType[key]);
    }
    this.abilityList = this.dataService.getAllAbilities().abilities;
  }

  viewDetail(ability: Ability) {
    // this.router.navigate([`./${ability.id}`], { relativeTo: this.route });
  }
}


