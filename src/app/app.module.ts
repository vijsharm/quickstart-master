import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {PanelMenuModule,MenuItem,DialogModule,FileUploadModule,DropdownModule,TabViewModule,DataListModule} from 'primeng/primeng';
import { AppComponent }  from './app.component';
import {NewProduct} from './app.new.component';
import {DropdownComponent} from './app.dropdown.component';
import { RouterModule, Routes }  from '@angular/router';
import {InputTextModule} from 'primeng/primeng';
import {FormsModule} from '@angular/forms';
import {ViewSellers} from './app.viewsellers.component';
import {ProductList} from './Product/app.productList.component';
 
const appRoutes: Routes = [
  { path: 'new', component: NewProduct },{ path: 'viewSellers', component: ViewSellers },{ path: 'viewProducts', component: ProductList }];
@NgModule({
  imports:      [ BrowserModule,FormsModule,DialogModule,DataListModule,InputTextModule,TabViewModule,PanelMenuModule,FileUploadModule,DropdownModule,RouterModule.forRoot(appRoutes) ],
  exports: [
    RouterModule
  ],
  declarations: [ AppComponent,NewProduct,DropdownComponent ,ViewSellers,ProductList],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
