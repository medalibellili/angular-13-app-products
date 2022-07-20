import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
})
export class ProductEditComponent implements OnInit {
  productId: any;
  productFormGroup?: any;
  submitted: boolean = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
    private fb: FormBuilder
  ) {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.productsService.getProduct(this.productId).subscribe((product) => {
      this.productFormGroup = this.fb.group({
        id: [product.id, Validators.required],
        name: [product.name, Validators.required],
        price: [product.price, Validators.required],
        quantity: [product.quantity, Validators.required],
        selected: [product.selected, Validators.required],
        available: [product.available, Validators.required],
      });
    });
  }
  onUpdateProduct() {
    this.productsService
      .updateProduct(this.productFormGroup?.value)
      .subscribe((data) => {
        alert('Success Product updated');
      });
  }
}
