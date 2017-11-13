import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'jad-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StudentComponent implements OnInit {

  name : string = 'Luke'
  isJedi : boolean = true;
  
  constructor() { }

  ngOnInit() {
  }

}
