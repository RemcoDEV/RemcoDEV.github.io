import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses: Array<{ name: string, description: string, organization: string }> = [
    { name: "Artificial Intelligence", description: "Classification, Reinforcement Learning, Path Planning algorithms, Bayesian Networks and much more.", organization: "Utrecht University" },
    { name: "Multithreaded Programming", description: "Such as programming on the GPU with OpenCL.", organization: "Utrecht University" },
    { name: "Information Retrieval and Data Mining", description: "This included building a search engine for cars with techniques such as term frequency, inverse document frequency and Jaccard index.", organization: "Utrecht University" },
    { name: "Datastructures", description: "Learned all kinds of search algorithms such as quicksort, counting sort, selection-sort and bitwise operations and how to program efficiently.", organization: "Utrecht University" },
    { name: "Software Design", description: "Learned some useful design patterns such as Facade, Adapter, Strategy, Bridge, Abstract Factory, Decorator and Observer.", organization: "Utrecht University" },
    { name: "Cognition and Emotion", description: "Cognitive psychology applied to Human Computer Interaction. In teams of 5, we have developed a Virtual Reality Language Learning application, which takes cognitive and emotional aspects into account by using Affective Computing.", organization: "Utrecht University" },
    { name: "Interaction Technology", description: "Soldering and programming with an Arduino. For example, in teams of 2 we had to make a smart toilet freshner and a automatic watering plant (Internet of Things).", organization: "Utrecht University" },
    { name: "Programming", description: "Learned to program in C# by making Pong, Tetris and TickTick.", organization: "Utrecht University" },
    { name: "Computer Architecture and Networks", description: "Learned about network protocols and the inside of a computer.", organization: "Utrecht University" },
    { name: "Logic", description: "Learned the basics of logic.", organization: "Utrecht University" },
    { name: "Databases", description: "Learned everything about SQL, indexing, functional dependencies, relational models, ER diagrams, normalisation, recovery, concurrency and query processing.", organization: "Utrecht University" },
    { name: "Game Design", description: "Learned about the MDA-framework (mechanics, dynamics, aesthetics), playtesting, applied games, level design, Unity and other aspects of being a game designer.", organization: "Utrecht University" },
    { name: "Graphics", description: "Learned about linear algebra (vectors, matrices), ray tracing, shaders, post processing and more.", organization: "Utrecht University" },
    { name: "Functional Programming", description: "Learned how to program in Haskell, its advantages (and disadvantages).", organization: "Utrecht University" },
    { name: "Research Methods", description: "As an academic, it is inevitable to learn something about statistics and writing papers.", organization: "Utrecht University" },
    { name: "Law and Informatics", description: "Since developers are publishers, it is important to know something about copyrights, privacy and other related topics.", organization: "Utrecht University" },
    { name: "Designing Interactive Systems", description: "Learned about Human Factors, visual aspects and more. A big part of this course was to develop a mobile application for children (age 11-14) to gain insight in the effects of the Filter Bubble.", organization: "Utrecht University" },
    { name: "Human, Society and ICT", description: "Information science focused course where I learned about persuasive technology, applied data science and social media.", organization: "Utrecht University" },
    { name: "Software Testing and Verification", description: "Testing software is incredibly important.", organization: "Utrecht University" },
    { name: "E-Business", description: "Learned how to set up an E-business and learned about E-commerce and business models.", organization: "Utrecht University" },
  ];

  constructor() { }

  ngOnInit() {
  }

}
