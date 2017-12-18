import { ActivatedRoute, Router } from '@angular/router';
import { ArmorNameFilter, ArmorTypeFilter, SpecialStatFilter } from '../../shared/filter';
import { ArmorComparators } from '../../shared/comparator';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/data.service';
import { CalculateService } from '../../shared/calculate.service';
import { Armor } from '../../shared/datatype/armors';
import { ArmorType } from './../../shared/datatype/armors';
import { ElementPower } from '../../shared/datatype/elements';

@Component({
  selector: 'app-armors-list',
  templateUrl: './armors-list.component.html',
  styleUrls: ['./armors-list.component.scss']
})

export class ArmorsListComponent implements OnInit {
  columns = ['atkAdd', 'defAdd', 'matAdd', 'mdfAdd', 'agiAdd', 'lukAdd'];
  nameFilter = new ArmorNameFilter();
  typeFilter = new ArmorTypeFilter(this.dataService);
  specialStatFilter = new SpecialStatFilter();
  armorComparators = ArmorComparators;

  armorList: Armor[];
  armorType = ArmorType;
  armorTypes: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dataService: DataService,
    public calculateService: CalculateService,
  ) { }

  ngOnInit() {
    for (let key in ArmorType) {
      this.armorTypes.push(ArmorType[key]);
    }
    this.armorList = this.dataService.getAllArmors().armors;
  }

  viewDetail(armor: Armor) {
    // this.router.navigate([`./${armor.id}`], { relativeTo: this.route });
  }
}


