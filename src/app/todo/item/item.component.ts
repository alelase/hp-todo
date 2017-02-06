import {Component, OnInit, Input} from '@angular/core';
import {Item} from "../todo.service";

@Component({
  selector: 'hp-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input()
  item: Item;

  constructor() { }

  ngOnInit() {
  }

}
