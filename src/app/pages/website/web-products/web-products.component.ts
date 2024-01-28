import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'web-products-app',
  standalone: true,
  imports: [CommonModule,FormsModule, RouterLink],
  templateUrl: './web-products.component.html',
  styleUrl: './web-products.component.css'
})
export class WebProductsComponent {
  categoryList:any[] = [];
  productList: any[] = []

  constructor(private productSrv: ProductService, private router: Router) {

  }

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategory();
  }
  navigateToPRoducts(id: number) {
    this.router.navigate(['products', id])
  }
  getAllProducts() {
    this.productSrv.getProducts().subscribe((res:any) => {
      this.productList = res.data;
    })
  }
  getAllCategory() {
    this.productSrv.getCategory().subscribe((res:any) => {
      this.categoryList = res.data;
    })
  }
}
