import { Component } from '@angular/core';
import { Http } from '@angular/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Alphe Store';
  color: String = 'Red';
  myData: Array<any>;
  //constructor(private http: Http) {
  //   this.http.get('https://jsonplaceholder.typicode.com/photos')
  //     .map(response => response.json())
  //     .subscribe(res => this.myData = res)
  // }
  generarRandom(): String {
    return Math.floor(Math.random() * 255).toString(16);
  }

  colorHex(): String {
    return "#" + this.generarRandom() + this.generarRandom() + this.generarRandom();
  }
}
