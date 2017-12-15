import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {
  table = {
    Mage: '마법사',
  };

  transform(value: string, args?: any): string {
    return this.table[value];
  }
}
