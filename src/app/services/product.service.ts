import { Product } from './../models/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  viewAlert: Subject<any> = new Subject<any>();
  viewProduct: Subject<any> = new Subject<any>();

constructor(private http: HttpClient ) { }

getProducts(): Observable<any> {
  return this.http.get('../../assets/data/products.json');
}

getviewAlert() {
  return this.viewAlert;
}

setviewAlert(action: string) {
  return this.viewAlert.next(action);
}

setviewProduct(product: Product) {
  return this.viewProduct.next(product);
}

getviewProduct() {
  return this.viewProduct;
}

}
