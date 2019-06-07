import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  portfolio: Array<PortfolioItem> = [
    { title: "Car Search Engine", employer: "Autocentrum van Vliet", description: "During my time at Van Vliet Autogroep, I've worked on a new car search engine which uses Angular and TypeScript. I mostly worked on the leasemode, some search filters and the different view modes.", imageURL: "assets/projectimages/project5.png" },
    { title: "Bachelor End Project", employer: "Dutch Railways", description: "In a group of 12 people (10 developers, 2 artists) we've created a serious game for the Dutch Railways (NS) in 5 months (1 semester) using SCRUM with me as Scrum Master.", imageURL: "assets/projectimages/project4.png" },
    { title: "Recreate an Old Retro Game", employer: "Utrecht University", description: "Together with 5 other students we've recreated an old retro game. This was created with C# and MonoGame in Visual Studio. Features: online/offline multiplayer, highscores, play against the computer. This is created in 10 weeks.", imageURL: "assets/projectimages/project1.png" },
  ];

  index = 0;

  constructor() { }

  ngOnInit() {
  }

  next() {
    if (this.index < this.portfolio.length - 1)
      this.index++;
    else
      this.index = 0;
  }

  previous() {
    if (this.index == 0)
      this.index = this.portfolio.length - 1;
    else
      this.index--;
  }
}

export interface PortfolioItem {
  title: string;
  employer: string;
  description: string;
  imageURL: string;
}