import { Component } from '@angular/core';
 import {DropdownModule,SelectItem} from 'primeng/primeng';
@Component({
  selector: 'dropdown-basic',
  template: `<span style="vertical-align:middle;font-weight: bold;">Category:</span>
   <span style="vertical-align:bottom"><p-dropdown [options]="cities" ></p-dropdown></span>
`
})
export class DropdownComponent {
    cities: SelectItem[];

    selectedCity: string;

    constructor() {
        this.cities = [];
        this.cities.push({label:'Select Category', value:null});
        this.cities.push({label:'TV- Series', value:{id:1, name: 'New York', code: 'NY'}});
        this.cities.push({label:'Football', value:{id:2, name: 'Rome', code: 'RM'}});
        this.cities.push({label:'Movies', value:{id:3, name: 'London', code: 'LDN'}});
        this.cities.push({label:'Cricket', value:{id:4, name: 'Istanbul', code: 'IST'}});
        this.cities.push({label:'Other', value:{id:5, name: 'Paris', code: 'PRS'}});
    }
}