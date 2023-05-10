import { Component } from '@angular/core';
import { Card } from '../Card';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent {
  myStates: Card[];
  constructor() {
    this.myStates = [
      {
        title: 'To Do',
        tasks: [{
          title : "ticket A",
          descriere : "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
          title: "Ticket B",
          descriere :"Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        }]
      },
      {
        title: 'In progress',
        tasks: [{
          title : "ticket A",
          descriere : "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
          title: "Ticket B",
          descriere :"Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        }]
      },
      {
        title: 'In testing',
        tasks: [{
          title : "ticket A",
          descriere : "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
          title: "Ticket B",
          descriere :"Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        }]
      },
      {
        title: 'Done',
        tasks: [{
          title : "ticket A",
          descriere : "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
          title: "Ticket B",
          descriere :"Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        }]
      },
    ]
  }
}
