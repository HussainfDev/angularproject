import { HttpClient } from '@angular/common/http';
import { Component, } from '@angular/core';

@Component({
    selector: 'product-list',
    templateUrl: './productlist.component.html',
   
})
export class ProductlistComponent  {
    productList:any=[];

    constructor(private hc:HttpClient) {
        this.hc.get("https://jsonplaceholder.typicode.com/photos").
        subscribe(
            (data)=>{
this.productList=<any[]>data
            }
        )
     }

    
}
