import { Component} from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'food-display',
  inputs: ['food'],
  template: `
    <div>
      <p class="css-food">{{ food.name }} | {{ food.details }} | {{ food.calories}}</p>
    </div>
  `
})
export class FoodComponent {
  public food: Food;
}
