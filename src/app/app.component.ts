import { Component, OnInit } from '@angular/core';
import { WishItem } from './shared/models/wishItem';
import { EventService } from './shared/services/EventService';
import { WishService } from './wish.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  wishes: WishItem[] = []
  filter: any

  constructor(events: EventService, private wishService: WishService) {
    events.listen('removeWish', (wish: WishItem) => {
      console.log(wish)
      let index = this.wishes.indexOf(wish)
      this.wishes.splice(index, 1)
    }) 
  }

  ngOnInit(): void {
      this.wishService.getWishes().subscribe((data: any) => {
        console.log(data)
        this.wishes = data
      })
  }
  
}