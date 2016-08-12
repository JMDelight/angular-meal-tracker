import { Component } from 'angular2/core';
import { Food } from './food.model';
import { FoodComponent } from './food.component';

@Component({
  selector: 'food-list',
  directives: [FoodComponent],
  inputs: ['foods'],
  pipes: [],
  template: `

    <div class="container">
      <h3 *ngFor="#food of foods">{{ food.description }} | {{ food.details}}</h3>
      <food-display *ngFor="#currentFood of foods" [food]="currentFood" (click)="foodClicked(currentFood)" ></food-display>
    </div>

  `
})
export class FoodListComponent {
  public foods: Food[];
  public selectedFood: Food;

  constructor(){}
  foodClicked(clickedFood: Food) {
    this.selectedFood = clickedFood;
    console.log(this.selectedFood);
  }
}
