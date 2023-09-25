import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../product-service.service';
import 'rxjs/add/operator/toPromise';
import { Http } from '@angular/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

productList: any;
headers = new Headers({ 'Content-Type': 'application/json'});
checkboxFlag = true;

constructor(private postService: PostServiceService,private http: Http) {
}


ngOnInit(): void {
 this.getAllProducts();
}

getAllProducts() {
  this.postService.getProducts().subscribe(products => {
    this.productList = products;
   
  });
}

deleteProduct = function(id) {
  if(confirm("Are you sure?")) {
    const url = `${"http://localhost:8000/products"}/${id}`;
    return this.http.delete(url, {headers: this.headers}).toPromise()
      .then(() => {
      this.fetchData();
      })
  }
}



}
