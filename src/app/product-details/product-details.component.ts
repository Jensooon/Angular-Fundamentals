import { Component, Input } from '@angular/core';
import { IProduct } from '../catalog/product.model';
import { CurrencyPipe, NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'bot-product-details',
  standalone: true,
  imports: [NgIf, NgClass, CurrencyPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  @Input() product!: IProduct;

  addToCart(product: IProduct) {
    console.log('Product added to cart:', product);
  }
}
