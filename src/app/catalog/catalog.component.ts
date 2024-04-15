import { Component } from '@angular/core';
import { IProduct } from './product.model';

@Component({
  selector: 'bot-catalog',
  standalone: true,
  imports: [],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css',
})
export class CatalogComponent {
  product: IProduct;

  constructor() {
    this.product = {
      id: 2,
      name: 'Friendly Bot',
      description:
        'A friendly robot head with two eyes and a smile -- great for dosmetic use.',
      imageName: 'head-friendly.png',
      category: 'Heads',
      price: 945.0,
      discount: 0.2,
    };
  }
}
