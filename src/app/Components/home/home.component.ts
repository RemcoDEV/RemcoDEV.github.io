import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(@Inject(LOCALE_ID) protected local: string) {
  }

  ngOnInit() {
    var script = document.createElement('script');
    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    document.getElementsByTagName('head')[0].appendChild(script);
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
