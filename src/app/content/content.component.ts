import { Product } from './../models/product';
import { Component, OnInit } from '@angular/core';
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

}
