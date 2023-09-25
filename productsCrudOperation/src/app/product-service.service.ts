import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PostServiceService {

  private url = 'http://localhost:8000/products'; 
  
  constructor(private httpClient: HttpClient) { }

  getProducts()
  {
    return this.httpClient.get(this.url);// we don't need headers and params for this endpoint
  }

  createProduct(product) {  
    return this.httpClient.post(this.url, JSON.stringify(product))  
  }  
  
  updatePost(product){  
    return this.httpClient.patch(this.url + '/' + product.id, JSON.stringify({ isRead: true }))  
  }  
  
  deletePost(id) {  
    return this.httpClient.delete(this.url + '/' + id);  
  }  

}
