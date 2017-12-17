import { ActivatedRoute, Router } from '@angular/router';
import { RaceNameFilter } from '../../shared/filter';
import { RaceComparators } from '../../shared/comparator';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/shared/data.service';
import { Race } from '../../shared/datatype/races';
import { BaseRace, RaceType } from '../../shared/datatype/races';

@Component({
  selector: 'app-races-list',
  templateUrl: './races-list.component.html',
  styleUrls: ['./races-list.component.scss']
})

export class RacesListComponent implements OnInit {
  columns = ['hp', 'mp', 'sp', 'atk', 'def', 'mat', 'mdf', 'agi', 'luk'];
  nameFilter = new RaceNameFilter();
  raceComparators = RaceComparators;

  raceList: Race[];
  baseRaces: BaseRace[] = [];
  total: {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
  ) { }

  ngOnInit() {
    for (let key in RaceType) {
      this.baseRaces.push(RaceType[key]);
    }
    const data = this.dataService.getAllRaces();
    this.raceList = data.races;
    this.total = data.total;
  }

  viewDetail(race: Race) {
    this.router.navigate([`./${race.id}`], { relativeTo: this.route });
  }

  addFilter(item: BaseRace) {
    if (this.dataService.raceFilter.includes(item)) {
      this.dataService.raceFilter.splice(this.dataService.raceFilter.indexOf(item), 1);
    } else {
      this.dataService.raceFilter.push(item);
    }
    this.raceList = this.dataService.getAllRaces().races;
  }

}


