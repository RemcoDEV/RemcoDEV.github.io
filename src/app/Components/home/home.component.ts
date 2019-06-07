import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getAge() {
    var currentDate = new Date();
    var birthday = new Date("1998-07-04");
    var age = currentDate.getFullYear() - birthday.getFullYear();

    if ((currentDate.getDate() < birthday.getDate() && currentDate.getMonth() == birthday.getMonth()) || currentDate.getMonth() < birthday.getMonth())
      age--;

    return age;
  }
}
