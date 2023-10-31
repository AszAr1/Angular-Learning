import { Component, Input, Output, EventEmitter } from '@angular/core'
import { WishItem } from '../../shared/models/wishItem'
import { EventService } from '../../shared/services/EventService'

@Component({
  selector: 'app-wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrls: ['./wish-list-item.component.css']
})
export class WishListItemComponent {
  @Input() wish!: WishItem

  constructor(private events: EventService) {}

  get cssClasses() {
    return {'line-through text-gray-500' : this.wish.isComplete}
  }

  toggleFullfilled() {
    this.wish.isComplete = !this.wish.isComplete;
  }

  removeWish() {
    this.events.emit("removeWish", this.wish)
  }
}
