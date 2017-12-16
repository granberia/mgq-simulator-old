import { ActivatedRoute, Router } from '@angular/router';
import { ActorNameFilter, ActorSecondaryNameFilter } from '../../shared/filter';
import { ActorComparators } from '../../shared/comparator';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/shared/data.service';
import { Actor } from '../../shared/datatype/actors';
import { BaseRace, RaceType } from '../../shared/datatype/races';

@Component({
  selector: 'app-actors-list',
  templateUrl: './actors-list.component.html',
  styleUrls: ['./actors-list.component.scss']
})
export class ActorsListComponent implements OnInit {
  columns = ['secondaryName', 'hp', 'mp', 'sp', 'atk', 'def', 'mat', 'mdf', 'agi', 'luk'];
  nameFilter = new ActorNameFilter();
  secondaryNameFilter = new ActorSecondaryNameFilter();
  actorComparators = ActorComparators;

  actorList: Actor[];
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
    const data = this.dataService.getAllActors();
    this.actorList = data.actors;
    this.total = data.total;
  }

  viewDetail(actor: Actor) {
    this.router.navigate([`./${actor.id}`], { relativeTo: this.route });
  }

  addFilter(item: BaseRace) {
    if (this.dataService.raceFilter.includes(item)) {
      this.dataService.raceFilter.splice(this.dataService.raceFilter.indexOf(item), 1);
    } else {
      this.dataService.raceFilter.push(item);
    }
    this.actorList = this.dataService.getAllActors().actors;
  }

}


