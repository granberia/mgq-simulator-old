import { ActivatedRoute, Router } from '@angular/router';
import { ActorNameFilter, ActorSecondaryNameFilter, ActorArtistFilter } from '../../shared/filter';
import { ActorComparators } from '../../shared/comparator';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/shared/data.service';
import { ArtistList } from './../../shared/datatype/artist';
import { Actor } from '../../shared/datatype/actors';
import { BaseRace, RaceType } from '../../shared/datatype/races';

@Component({
  selector: 'app-actors-list',
  templateUrl: './actors-list.component.html',
  styleUrls: ['./actors-list.component.scss']
})
export class ActorsListComponent implements OnInit {
  columns = ['secondaryName', 'artist', 'hp', 'mp', 'sp', 'atk', 'def', 'mat', 'mdf', 'agi', 'luk'];
  nameFilter = new ActorNameFilter();
  secondaryNameFilter = new ActorSecondaryNameFilter();
  artistFilter = new ActorArtistFilter(this.dataService);
  actorComparators = ActorComparators;

  actorList: Actor[];
  baseRaces: BaseRace[] = [];
  artistList = ArtistList;
  total: {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dataService: DataService,
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
    if (this.dataService.actorRaceFilter.includes(item)) {
      this.dataService.actorRaceFilter.splice(this.dataService.actorRaceFilter.indexOf(item), 1);
    } else {
      this.dataService.actorRaceFilter.push(item);
    }
    this.actorList = this.dataService.getAllActors().actors;
  }

}


