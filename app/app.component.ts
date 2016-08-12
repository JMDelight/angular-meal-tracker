import { Component } from 'angular2/core';
import { Food } from './food.model';
import { FoodListComponent} from './food-list.component';


@Component({
  selector: 'my-app',
  directives: [FoodListComponent],
  template: `
    <food-list [foods]="foods" [specialties]="specialties"></food-list>
  `
})

export class AppComponent {
  public foods: Food[];
  constructor(){
    this.foods = [
      new Food("Pizza", "delicious", 700, 0),
      new Food("More Pizza", "still delicious", 450, 1),
      new Food("Even More Pizza", "Ok", 250, 2),
      new Food("Still More Pizza", "A little full", 600, 3),
      new Food("Why More Pizza?", "barfy", -200, 4),
      new Food("Pizza!", "delicious", 900, 5)
    ];

  }
}
