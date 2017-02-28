import { Component } from '@angular/core';
import {PanelMenuModule,MenuItem} from 'primeng/primeng';
import {FileUploadModule} from 'primeng/primeng';
import {DropdownComponent} from './app.dropdown.component'
import {TabViewModule} from 'primeng/primeng';
import {InputTextModule} from 'primeng/primeng';
@Component({
  selector: 'viewSellers',
  template: `
  <div class="modal-body row">
      <div class="col-md-9 ">
      <p-tabView>
    <p-tabPanel header="Approved" leftIcon="fa-pencil">
       <span style="vertical-align:middle;font-weight: bold;" class="form-group required">Name: </span>
       
       <input type="text" pInputText [(ngModel)]="property"/>
       <br>
        
       <dropdown-basic></dropdown-basic>
    </p-tabPanel>
    <p-tabPanel header="Pending" leftIcon="fa-files-o">
        Content 2
    </p-tabPanel>
    <p-tabPanel header="Rejected" leftIcon="fa-money">
        Content 3    
    </p-tabPanel>
</p-tabView>
      </div>
      <div class="col-md-3" style="margin-top:70px">
      <h1></h1>
      </div>
    </div>
  
  `,
  styles: [`
  .form-group.required .control-label:after { 
   content:"*";
   color:red;
  `]
}
)
export class ViewSellers  { property = '';}
