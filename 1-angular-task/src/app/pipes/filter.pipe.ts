import { Pipe, PipeTransform, Query } from '@angular/core';
import { Blueprint } from '../models/blueprint';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: Blueprint[] | null, query?: any): Blueprint[] {
    if (!items) return [];
    if (!query) return items;

    return items.filter(item => JSON.stringify(item).toLowerCase().includes(query.toLowerCase()))
  }
}
