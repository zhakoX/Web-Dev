import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Import this
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  shareOnWhatsApp(product: Product) {
    window.open(`https://wa.me/?text=Check out this product: ${product.kaspiUrl}`, '_blank');
  }

  shareOnTelegram(product: Product) {
    window.open(`https://t.me/share/url?url=${product.kaspiUrl}&text=Check out this product!`, '_blank');
  }
}

