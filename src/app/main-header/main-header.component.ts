import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {
  firstName = 'Billy';
  lastName = 'Moua';
  greeting = 'r1c1';
  
  constructor() { }

  ngOnInit() {
  }

  showGreeting() {
    this.greeting = 'Hello ' + this.firstName + ' ' + this.lastName + '.'

  }

  resetGreeting() {
    this.greeting = 'r1c1';
  }

}
