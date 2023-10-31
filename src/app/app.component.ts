import { Component, OnInit } from '@angular/core';
import { WishItem } from './shared/models/wishItem';
import { EventService } from './shared/services/EventService';
import { WishService } from './wish/wish.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  
}