import { Component, OnInit, Input } from '@angular/core';
import { CalculateService } from '../../../shared/calculate.service';
import { Actor } from '../../../shared/datatype/actors';
import { Job } from '../../../shared/datatype/jobs';
import { Race } from '../../../shared/datatype/races';

@Component({
  selector: 'app-state-resist-view',
  templateUrl: './state-resist-view.component.html',
  styleUrls: ['../calculator-view.component.scss']
})
export class StateResistViewComponent implements OnInit {
  @Input() actor: Actor;
  @Input() job: Job;
  @Input() race: Race;

  constructor(
    public calculateService: CalculateService,
  ) { }

  ngOnInit() {
  }

}
