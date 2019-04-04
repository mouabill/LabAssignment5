import { Component, OnInit } from '@angular/core';

interface IStudent {
  id: number;
  firstName: string;
  lastName: string;
  course: string;
  editMode: boolean;
}

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  studentArray: Array<IStudent> = [];
  disableAddButton = false;
  constructor() { }

  ngOnInit() {
    this.studentArray = [
      {
        id: 1,
        firstName: 'Billy',
        lastName: 'Moua',
        course: 'Programming',
        editMode: false
      },
      {
        id: 2,
        firstName: 'Jim',
        lastName: 'Bim',
        course: 'Fencing',
        editMode: false
      },
      {
        id: 3,
        firstName: 'Rick',
        lastName: 'Stick',
        course: 'Bowling',
        editMode: false
      }
    ];
  }

  delete(index: number) {
    this.studentArray.splice(index, 1);
    this.disableAddButton = false;
  }

  addStudent() {
    this.studentArray.unshift({
      id: null,
      firstName: null,
      lastName: null,
      course: null,
      editMode: true
    });
    this.disableAddButton = true;
  }

  save() {
    this.studentArray[0].editMode = false;
    this.disableAddButton = false;

    this.sort();
  }
  sort() {
    this.studentArray.sort((a: IStudent, b: IStudent) => {
      return a.id < b.id ? -1 : 1;
    });
  }

}
