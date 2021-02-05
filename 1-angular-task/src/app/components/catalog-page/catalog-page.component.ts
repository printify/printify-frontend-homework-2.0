import { Component, OnInit } from '@angular/core';
import {_deepCopy} from 'src/app/helpers/deep-copy';
import {Blueprint} from 'src/app/models/blueprint';
import {CatalogService} from 'src/app/services/catalog-service.service';

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.scss']
})
export class CatalogPageComponent implements OnInit {
  productsList: Blueprint[] = [];
  filteredList: Blueprint[] = [];

  constructor(private catalogService: CatalogService) { }

  ngOnInit(): void {
    this.catalogService.getProductsList().subscribe((data: Blueprint[]) => {
      this.productsList = data;
      this.filteredList = _deepCopy(data);
    });
  }

  filterList(query: string) {
    if (!query) { 
      this.filteredList = _deepCopy(this.productsList);
      return;
    }
    const lowerCaseQuery = query.toLowerCase();
    this.filteredList = this.filteredList.filter((product: Blueprint) => {
      return product.name.toLowerCase().includes(query.toLowerCase())
          || product.brand.toLowerCase().includes(query.toLowerCase());
    });
  }

}
