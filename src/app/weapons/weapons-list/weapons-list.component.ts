import { ActivatedRoute, Router } from '@angular/router';
import { WeaponNameFilter, WeaponTypeFilter, SpecialStatFilter } from '../../shared/filter';
import { WeaponComparators } from '../../shared/comparator';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/data.service';
import { CalculateService } from '../../shared/calculate.service';
import { Weapon } from '../../shared/datatype/weapons';
import { WeaponType } from './../../shared/datatype/weapons';
import { ElementPower } from '../../shared/datatype/elements';

@Component({
  selector: 'app-weapons-list',
  templateUrl: './weapons-list.component.html',
  styleUrls: ['./weapons-list.component.scss']
})

export class WeaponsListComponent implements OnInit {
  columns = ['atkAdd', 'defAdd', 'matAdd', 'mdfAdd', 'agiAdd', 'lukAdd'];
  nameFilter = new WeaponNameFilter();
  typeFilter = new WeaponTypeFilter(this.dataService);
  specialStatFilter = new SpecialStatFilter();
  weaponComparators = WeaponComparators;

  weaponList: Weapon[];
  weaponType = WeaponType;
  weaponTypes: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dataService: DataService,
    public calculateService: CalculateService,
  ) { }

  ngOnInit() {
    for (let key in WeaponType) {
      this.weaponTypes.push(WeaponType[key]);
    }
    this.weaponList = this.dataService.getAllWeapons().weapons;
  }

  viewDetail(weapon: Weapon) {
    // this.router.navigate([`./${weapon.id}`], { relativeTo: this.route });
  }
}


