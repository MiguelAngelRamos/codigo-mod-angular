import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyect-angular';

  products: any[] = [];

  constructor() {}

  ngOnInit() {
    console.log('NgOnInit');
  }
}
