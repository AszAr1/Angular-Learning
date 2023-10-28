import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';

const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isComplete,
  (item: WishItem) => item.isComplete
] 

@Component({
  selector: 'app-wish-filter',
  templateUrl: './wish-filter.component.html',
  styleUrls: ['./wish-filter.component.css']
})
export class WishFilterComponent { 
  @Output() filter = new EventEmitter<any>()

  listFilter: any = '0'
  
  constructor() {}

  ngOnInit(): void {
    this.changeFilter(0)
  }

  changeFilter(value: any) {
    this.filter.emit(filters[value])
  }
}
