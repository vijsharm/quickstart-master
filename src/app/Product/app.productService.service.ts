import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Product} from './app.Product';
    
@Injectable()
export class ProductService {
    product:Product[];
     

    getProducts() {
       this.product=[{name:'Mug1',alias:'TV',theme:'GOT',color:'white'},
       {name:'Mug1',alias:'Movie',theme:'POC',color:'white'},
       {name:'Mug1',alias:'Movie',theme:'POC',color:'white'},
       {name:'Mug1',alias:'Movie',theme:'POC',color:'white'},
       {name:'Mug1',alias:'Movie',theme:'POC',color:'white'},
       {name:'Mug1',alias:'Movie',theme:'POC',color:'white'},
       {name:'Mug1',alias:'Movie',theme:'POC',color:'white'}]
        return this.product;
    }
}