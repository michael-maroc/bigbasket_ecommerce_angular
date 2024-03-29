import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit {
  categoryList:any[] = [];
  productList: any[] = [];

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
