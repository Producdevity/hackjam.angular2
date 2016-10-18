import { Component, OnInit } from '@angular/core';
// Book Type
import { Book, mockBooks } from './mocks/books';
// Category Type
import categories, { Category } from './mocks/categories';

@Component({
  selector: 'bookstore',
  // template: ``,
  templateUrl: '../app/app.template.html'
})

export class AppComponent {
  books: Book []; // use mocks data instead
  categories: Category []; // use mocks data instead
  navClosed: Boolean = true;

  ngOnInit(){
    this.books = mockBooks;
    this.categories = categories;
  }

  clicked(category) {
    for (let c of categories){
      c.selected = (c == category ? true : false);
    }

    this.books = mockBooks.filter(item => {
      return item.category === category.name || category.category === 'All';
      // console.log(books);
    });
  }

  search(){}

  toggleSideBar(){
    this.navClosed = !this.navClosed;
  }
}