import { Product } from './../models/product';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  readonly DETAILS = 'Ver más..';
  readonly AVAILABILITY = 'Disponible';
  readonly QUANTITY = 'Cantidad';
  readonly PRICE = 'Precio';

  @ViewChild('myModal') myModal;

  public products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe(data => {
      this.products = data.products;
    });
  }

  viewProduct(product: Product) {
    const setAlert = 'true';
    this.productService.setviewProduct(product);
    this.productService.setviewAlert(setAlert);
    localStorage.setItem('Product', JSON.stringify(product));
    console.log('Set item');

  }

}
