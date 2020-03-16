import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shikisha-spa';

  products$ = this.http.get('/api/products');

  constructor(private http: HttpClient) {
  }
}
