import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  directives: [],
  inputs: ['foods'],
  pipes: [],
  template: `

    <div class="container">
      <h3 *ngFor="#food of foods">{{ food.description }} | {{ food.details}}</h3>

    </div>

  `
})
export class FoodListComponent {
  public foods: Food[];
  public selectedFood: Food;

  constructor(){
  }

}
