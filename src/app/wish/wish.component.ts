import { Component, OnInit } from '@angular/core';
import { WishItem } from './../shared/models/wishItem';
import { EventService } from './../shared/services/EventService';
import { WishService } from './../wish/wish.service';

@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.css']
})
export class WishComponent implements OnInit {
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
        this.wishes = data
      },
      (error: any) => {
        alert(error.message)
      }
    )
  }

}
