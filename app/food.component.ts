import { Component} from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'food-display',
  inputs: ['food'],
  template: `
    <div class="food-item">
      <h4>Food: {{ food.name }}</h4>
      <p>Details: {{ food.details }}</p>
      <p>Calories: {{ food.calories}}</p>
    </div>
  `
})
export class FoodComponent {
  public food: Food;
}
