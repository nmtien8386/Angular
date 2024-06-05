import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { IProduct } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-product-update',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './product-update.component.html',
})
export class ProductUpdateComponent {
  productForm = this.formBuilder.group({
    name: [''],
    price: [0],
    description: [''],
    imageUrl: ['']
  });
  constructor( 
    private formBuilder: FormBuilder,
    private route : ActivatedRoute,
    private productService: ProductService,
    private router: Router
    ) {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.productService.getProduct(id).subscribe(product => {
          this.productForm.patchValue(product)
        })
      })
    }
  onsubmit(){
    const id = this.route.snapshot.params['id']
    this.productService.updateProduct({ id: id, ...this.productForm.value } as IProduct).subscribe((product) => {
      alert('Cập nhật sản phẩm thành công');
      this.router.navigateByUrl('')
    })
  }
}
