import { Component } from 'angular2/core';
import { Food } from './food.model';


@Component({
  selector: 'my-app',
  directives: [],
  template: `
    <h3 *ngFor="#food of foods">{{ food.description }} | {{ food.details}}</h3>
  `
})

export class AppComponent {
  public foods: Food[];
  constructor(){
    this.foods = [
      new Food("Pizza", "delicious", 200, 0),
      new Food("More Pizza", "still delicious", 200, 1),
      new Food("Even More Pizza", "Ok", 250, 2),
      new Food("Still More Pizza", "A little full", 250, 3),
      new Food("Why More Pizza?", "barfy", -200, 4),
      new Food("Pizza!", "delicious", 200, 5)
    ];

  }
}
