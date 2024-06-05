import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IProduct } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  products!: IProduct[];
  constructor(private productService: ProductService){
    this.products = productService.products
    this.productService.getAll().subscribe(products => this.products = products)
  }
  handleDelete(id: number) {
    if (confirm('Bạn chắc chắn xoá không?')) {
      this.productService.delete(id).subscribe(() => {
        this.products = this.products.filter((p) => p.id != id);
        alert('Xoá thành công');
      });
    }
  }
}
