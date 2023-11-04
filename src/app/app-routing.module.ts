import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SecondComponent } from './second/second.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WishComponent } from './wish/wish.component';
import { WishDetailComponent } from './wish/wish-detail/wish-detail.component';

const routes: Routes = [
  {path: '', component: WishComponent},
  {path: 'second', component: SecondComponent},
  {path: 'wishes/:id', component: WishDetailComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
