import { ActivatedRoute, Router } from '@angular/router';
import { ActorNameFilter, ActorSecondaryNameFilter } from '../../shared/filter';
import { ActorComparators } from '../../shared/comparator';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/shared/data.service';
import { Actor } from '../../shared/datatype/actors';

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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
  ) { }

  ngOnInit() {
    this.actorList = this.dataService.getAllActors();
  }

  viewDetail(actor: Actor) {
    this.router.navigate([`./${actor.id}`], { relativeTo: this.route });
  }

}


