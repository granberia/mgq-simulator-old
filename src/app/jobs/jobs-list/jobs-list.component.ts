import { ActivatedRoute, Router } from '@angular/router';
import { JobNameFilter } from '../../shared/filter';
import { JobComparators } from '../../shared/comparator';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/shared/data.service';
import { Job } from '../../shared/datatype/jobs';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.scss']
})

export class JobsListComponent implements OnInit {
  columns = ['hp', 'mp', 'sp', 'atk', 'def', 'mat', 'mdf', 'agi', 'luk'];
  nameFilter = new JobNameFilter();
  jobComparators = JobComparators;

  jobList: Job[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
  ) { }

  ngOnInit() {
    this.jobList = this.dataService.getAllJobs().jobs;
  }

  viewDetail(job: Job) {
    this.router.navigate([`./${job.id}`], { relativeTo: this.route });
  }

}


