import { Component } from '@angular/core';


// A decorator (ie. a function taking one object as an argument, and this object has 3 properties)
@Component({
  selector: 'apm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle: string = 'ACME Product Management';
}
