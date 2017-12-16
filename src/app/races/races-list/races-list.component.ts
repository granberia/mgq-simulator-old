import { ActivatedRoute, Router } from '@angular/router';
import { RaceNameFilter } from '../../shared/filter';
import { RaceComparators } from '../../shared/comparator';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/shared/data.service';
import { Race } from '../../shared/datatype/races';

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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
  ) { }

  ngOnInit() {
    this.raceList = this.dataService.getAllRaces().races;
  }

  viewDetail(race: Race) {
    // this.router.navigate([`../${race.id}`], { relativeTo: this.route });
  }

}


