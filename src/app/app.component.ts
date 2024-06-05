import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CommonModule } from '@angular/common';
import { ProductAddComponent } from './components/product-add/product-add.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , ProductListComponent , CommonModule, ProductAddComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  
}
