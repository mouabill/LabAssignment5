import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {
  firstName = 'Billy';
  lastName = 'Moua';
  greeting = 'r1c1';

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  showGreeting() {
    this.greeting = 'Hello ' + this.firstName + ' ' + this.lastName + '.';

  }

  resetGreeting() {
    this.greeting = 'r1c1';
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

}
