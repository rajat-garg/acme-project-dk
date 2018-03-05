import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'apm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  _listFilter: string;
  filteredProducts: IProduct[];
  products: IProduct[] = [];
  errorMessage: any;

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }


  constructor(private _productService: ProductService) {

  }

  ngOnInit() {
    this._productService.getProducts()
      .subscribe(
        pr => {
          this.products = pr;
          this.filteredProducts = this.products;
        },
        err => this.errorMessage = <any>err)
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  //Return a new array of matched products
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1)
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List ' + message;
  }
}
