import { Component } from '@angular/core';
import {PanelMenuModule,MenuItem} from 'primeng/primeng';
import {NewProduct} from './app.new.component';
import {ViewSellers} from './app.viewsellers.component'

@Component({
  selector: 'my-app',
  template: `
  <div><div class="top-menu"></div>
  
    <div class="modal-body row">
      <div class="col-md-3 layout-sidebar">
      <p-panelMenu [model]="items" [style]="{'width':'300px'}"></p-panelMenu>
      </div>
      <div class="col-md-6" style="margin-top:70px">
      <router-outlet></router-outlet>
      </div>
    </div>
    `
    ,
  
  styles: [`.layout-sidebar {
          overflow-y: auto;
          
          height: calc(100% - 56px);
          border-top: 1px solid #191924;
          box-sizing: border-box;
          margin-top:30px;   
      
          color: #333;
      
      
          background-color: #313b3f;
          border-right: solid 1px #151d21;
          overflow: hidden;}
.top-menu {
    box-sizing: border-box;
    display: block;
    overflow-y: auto;
    height:50px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #313b3f;
    z-index: 9;
}
  
  `]
  
})
export class AppComponent  { name = 'Angular';
private items: MenuItem[];

    ngOnInit() {
          this.items = [
            {
                label: 'Products',
                icon: 'fa-th-list',
                items: [{
                        label: 'Add Product', 
                        icon: 'fa-plus-circle',
                        routerLink: ['/new']
                    },
                    {label: 'Add Category', icon: 'fa-plus-circle'},
                    {label: 'View Product', icon: 'fa-plus-circle',routerLink: ['/viewProducts']}
                ]
            },
            {
                label: 'Sellers',
                icon: 'fa-users',
                items: [
                    {   label: 'View Sellers', 
                        icon: 'fa-user',
                        routerLink: ['/viewSellers']},
                    {   label: 'Add Seller', 
                        icon: 'fa-user',
                        routerLink: ['/viewSellers']}
                ]
            },
            {
                label: 'Help',
                icon: 'fa-question',
                items: [
                    {
                        label: 'Contents'
                    },
                    {
                        label: 'Search', 
                        icon: 'fa-search', 
                        items: [
                            {
                                label: 'Text', 
                                items: [
                                    {
                                        label: 'Workspace'
                                    }
                                ]
                            },
                            {
                                label: 'File'
                            }
                    ]}
                ]
            },
            {
                label: 'Actions',
                icon: 'fa-gear',
                items: [
                    {
                        label: 'Edit',
                        icon: 'fa-refresh',
                        items: [
                            {label: 'Save', icon: 'fa-save'},
                            {label: 'Update', icon: 'fa-save'},
                        ]
                    },
                    {
                        label: 'Other',
                        icon: 'fa-phone',
                        items: [
                            {label: 'Delete', icon: 'fa-minus'}
                        ]
                    }
                ]
            }
        ];
    }
}
   
