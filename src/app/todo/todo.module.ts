import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { ItemsComponent } from './items/items.component';
import { ItemComponent } from './item/item.component';
import {TodoService} from "./todo.service";

@NgModule({
  providers: [TodoService],
  imports: [
    CommonModule
  ],
  declarations: [TodoComponent, HeaderComponent, MainComponent, FooterComponent, ItemsComponent, ItemComponent],
  exports: [TodoComponent]
})
export class TodoModule { }
