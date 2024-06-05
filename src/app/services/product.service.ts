import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: IProduct[] = [];
  constructor(private http: HttpClient) {}
  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('http://localhost:3000/products');
  }
  delete(id: number): Observable<Object> {
    return this.http.delete('http://localhost:3000/products/' + id);
  }
  addProduct(product: IProduct): Observable<Object> {
    return this.http.post('http://localhost:3000/products', product);
  }
  getProduct(id: string): Observable<IProduct> {
    return this.http.get<IProduct>(`http://localhost:3000/products/${id}`)
  }
  updateProduct(product: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(`http://localhost:3000/products/${product.id}`, product);
  }
}