import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

    constructor(private http: Http) { }
    confirmationString:string = "New product has been added";
    isAdded: boolean = false;
    productObj:object = {};
  
  ngOnInit() {
  }

  addNewProduct = function(product) {
    this.productObj = {
      "description": product.description,
      "category": product.category,
      "price": product.price,
      "option": product.option,
      "expire": product.expire
    }
    console.log("productObj " +this.productObj.category )
    this.http.post("http://localhost:8000/products/", this.productObj).subscribe((res:Response) => {
      this.isAdded = true;
    })
  }

}
