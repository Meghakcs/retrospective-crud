import {Component, OnInit} from '@angular/core';
import {PostServiceService} from './product-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  productList: any;

  constructor(private postService: PostServiceService) {
  }

  ngOnInit(): void {
   this.getAllProducts();
  }

  getAllProducts() {
    this.postService.getProducts().subscribe(products => {
      this.productList = products;
    });
  }
}
