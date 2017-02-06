import { Injectable } from '@angular/core';

export interface Item {
  title: string;
  done: boolean;
}

@Injectable()
export class TodoService {

  private _items: Item[];

  constructor() {
    this._items = [
      {title: 'walk the dog', done: false },
      {title: 'buy groceries', done: false }
    ]
  }

  get items(): Item[] {
    return this._items;
  }

}
