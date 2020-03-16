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

  email: string;
  password: string;

  constructor(private http: HttpClient) {
  }

  login() {
    this.http.post('/api/login', {
      email: this.email,
      password: this.password
    }).subscribe(result => console.log(result));
  }
}
