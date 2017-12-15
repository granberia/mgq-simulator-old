import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { DataService } from '../../shared/data.service';
import { Actor } from './../../shared/datatype/actors';

@Component({
  selector: 'app-actors-detail',
  templateUrl: './actors-detail.component.html',
  styleUrls: ['./actors-detail.component.scss']
})
export class ActorsDetailComponent implements OnInit, OnDestroy {
  unsubscribe: Subject<void> = new Subject<void>();
  actor: Actor;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dataService: DataService,
  ) { }

  ngOnInit() {
    this.route.params
      .takeUntil(this.unsubscribe)
      .subscribe((params) => {
        this.actor = this.dataService.getOneActor(params.id);
      });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
