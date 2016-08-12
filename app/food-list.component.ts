import { Component } from 'angular2/core';
import { Food } from './food.model';
import { FoodComponent } from './food.component';
import { AddFoodComponent } from './add-food.component';


@Component({
  selector: 'food-list',
  directives: [FoodComponent, AddFoodComponent],
  inputs: ['foods'],
  pipes: [],
  template: `

    <div class="container">
      <food-display *ngFor="#currentFood of foods" [food]="currentFood" (click)="foodClicked(currentFood)" ></food-display>
    </div>
    <add-food (onSubmit)="createFood($event)" ></add-food>


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

  createFood(args: [string, string, number]) {
    this.foods.push(
      new Food(args[0], args[1], args[2], this.foods.length)
    );
  }
}
