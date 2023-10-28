import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
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
export class WishFilterComponent implements OnInit { 
  @Input() filter: any
  @Output() filterChange = new EventEmitter<any>()

  listFilter: any = '0'
  
  constructor() {}

  ngOnInit(): void {
    this.updateFilter(0)
  }

  updateFilter(value: any) {
    this.filter = filters[value]
    this.filterChange.emit(this.filter)
  }
}
