import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { WishListItemComponent } from './wish-list-item/wish-list-item.component';
import { WishComponent } from './wish.component';
import { AppRoutingModule } from '../app-routing.module';
import { WishDetailComponent } from './wish-detail/wish-detail.component';

@NgModule({
  declarations: [
    WishListComponent,
    WishFilterComponent,
    AddWishFormComponent,
    WishListItemComponent,
    WishDetailComponent,
    WishComponent,
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
  ],
  exports: [
    WishComponent,
  ],
})
export class WishModule { }
