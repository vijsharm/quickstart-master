import { Component,OnInit } from '@angular/core';
import {Product} from  './app.Product';
import {ProductService} from './app.productService.service'
import {DataListModule} from 'primeng/primeng';
import {Header} from 'primeng/primeng';
import {Footer} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
@Component({
  selector: 'product-list',
  templateUrl: 'app/Product/productList.template.html',
  providers: [ProductService]
}
)
export class ProductList implements OnInit { 
    products: Product[];
    
    selectedProduct: Product;
    
    displayDialog: boolean;
constructor(private productService: ProductService) { }

    ngOnInit() {
        this.products=this.productService.getProducts();
    }
    
    selectProduct(product: Product) {
        this.selectedProduct = product;
        this.displayDialog = true;
    }
    
    onDialogHide() {
        this.selectedProduct = null;
    }

}