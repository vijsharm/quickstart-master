import { Component } from '@angular/core';
import {PanelMenuModule,MenuItem} from 'primeng/primeng';
import {FileUploadModule} from 'primeng/primeng';
import {DropdownComponent} from './app.dropdown.component'
import {TabViewModule} from 'primeng/primeng';
import {InputTextModule} from 'primeng/primeng';
@Component({
  selector: 'new',
  template: `
  <p-tabView>
    <p-tabPanel header="General" leftIcon="fa-pencil">
       <span style="vertical-align:middle;font-weight: bold;" class="form-group required">Name: </span>
       
       <input type="text" pInputText [(ngModel)]="property"/>
       <br>
       <br><br>
       <p-fileUpload name="myfile[]" url="http://localhost:3000/upload"></p-fileUpload>
       <br>
       <dropdown-basic></dropdown-basic>
    </p-tabPanel>
    <p-tabPanel header="Variants and Options" leftIcon="fa-files-o">
        Content 2
    </p-tabPanel>
    <p-tabPanel header="Price Details" leftIcon="fa-money">
        Content 3    
    </p-tabPanel>
</p-tabView>
  `,
  styles: [`
  .form-group.required .control-label:after { 
   content:"*";
   color:red;
  `]
}
)
export class NewProduct  { property = '';}
