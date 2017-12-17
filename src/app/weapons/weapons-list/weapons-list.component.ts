import { ActivatedRoute, Router } from '@angular/router';
import { WeaponNameFilter, WeaponTypeFilter } from '../../shared/filter';
import { WeaponComparators } from '../../shared/comparator';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/shared/data.service';
import { Weapon } from '../../shared/datatype/weapons';
import { WeaponType } from './../../shared/datatype/weapons';

@Component({
  selector: 'app-weapons-list',
  templateUrl: './weapons-list.component.html',
  styleUrls: ['./weapons-list.component.scss']
})

export class WeaponsListComponent implements OnInit {
  columns = ['atkAdd', 'defAdd', 'matAdd', 'mdfAdd', 'agiAdd', 'lukAdd'];
  nameFilter = new WeaponNameFilter();
  typeFilter = new WeaponTypeFilter();
  weaponComparators = WeaponComparators;

  weaponList: Weapon[];
  weaponType = WeaponType;
  weaponTypes: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
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
  
  addFilter(item: string) {
    if (this.dataService.weaponFilter.includes(item)) {
      this.dataService.weaponFilter.splice(this.dataService.weaponFilter.indexOf(item), 1);
    } else {
      this.dataService.weaponFilter.push(item);
    }
    this.weaponList = this.dataService.getAllWeapons().weapons;
  }

  calculateStyle(icon: number) {
    return {
      'width': '24px',
      'height': '24px',
      'object-fit': 'none',
      'object-position': '-' + (icon % 16 * 24) + 'px -' + (Math.floor(icon / 16) * 24) + 'px',
    }
  }

}


