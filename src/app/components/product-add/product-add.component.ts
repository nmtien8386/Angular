import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../interfaces/product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './product-add.component.html',
})
export class ProductAddComponent {
  constructor(private productService: ProductService) {}
  product: IProduct = {
    name: '',
    price: 0,
    description: '',
    imageUrl: '',
  }
  onSubmit = () => {
    this.productService.addProduct(this.product).subscribe(() => {
      location.pathname = "/";
    })
  }
}
