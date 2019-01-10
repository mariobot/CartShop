import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {
  // @Input() quantity: any;
  product: Product;
  public quantity: number;

  readonly PRICE = 'Precio';
  readonly QUANTITYSTOCK = 'Cantidades en Stock';
  readonly QUANTITY = 'Cantidades';
  readonly TOTALPRICE = 'Precio Total';
  readonly ADDCART = 'Adicionar';
  readonly SUCCESS = 'Articulo adicionado';
  readonly NOTAVAILABLE = 'No disponible';

  public seeModal: string = 'true';

  constructor(private productService: ProductService) { }

  ngOnInit() {
    /*
    this.productService.getProducts().subscribe((data: any) => {
      this.product = data;
    });
    this.productService.getviewAlert().subscribe((data: any) => {
      this.seeModal = data;
    });*/
    console.log('Init detail-product component');
  }

}
