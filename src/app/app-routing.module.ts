import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import booklist component
import { BookListComponent } from './book-list/book-list.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookDetailsComponent } from './book-details/book-details.component';


// การทำ route แอป
const routes: Routes = [
  //  redirecto  คือ การแตะให้ route อื่น
  { path: '', redirectTo: "books", pathMatch: 'full'},
  { path: "book",
    children: [
      { path: '', component: BookListComponent},
      { path: ':id', component: BookDetailsComponent},
    ]
  },// route 1
  { path: "create", component: BookCreateComponent }, // route 2
  // { path: "books/1", component: BookDetailsComponent }, // route 2
  { path: "**", component: BookListComponent} // route 3
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
