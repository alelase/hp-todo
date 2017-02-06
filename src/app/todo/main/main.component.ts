import { Component, OnInit } from '@angular/core';
import {TodoService} from "../todo.service";

@Component({
  selector: 'hp-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  private list: TodoService;
  constructor(list: TodoService) {
    this.list = list;
  }

  ngOnInit() {
  }

}
