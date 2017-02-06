import {Component, OnInit, Input} from '@angular/core';
import {Item} from "../todo.service";

@Component({
  selector: 'hp-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
 @Input()
 items: Item;

  constructor() { }

  ngOnInit() {
  }

}
