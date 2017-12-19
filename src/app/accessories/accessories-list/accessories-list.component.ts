import { ActivatedRoute, Router } from '@angular/router';
import { AccessoryNameFilter, SpecialStatFilter } from '../../shared/filter';
import { AccessoryComparators } from '../../shared/comparator';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/data.service';
import { CalculateService } from '../../shared/calculate.service';
import { Accessory } from '../../shared/datatype/accessories';
import { ElementPower } from '../../shared/datatype/elements';

@Component({
  selector: 'app-accessories-list',
  templateUrl: './accessories-list.component.html',
  styleUrls: ['./accessories-list.component.scss']
})

export class AccessoriesListComponent implements OnInit {
  nameFilter = new AccessoryNameFilter();
  specialStatFilter = new SpecialStatFilter();
  accessoryComparators = AccessoryComparators;

  accessoryList: Accessory[];
  accessoryTypes: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dataService: DataService,
    public calculateService: CalculateService,
  ) { }

  ngOnInit() {
    this.accessoryList = this.dataService.getAllAccessories().accessories;
  }

  viewDetail(accessory: Accessory) {
    // this.router.navigate([`./${accessory.id}`], { relativeTo: this.route });
  }
}


