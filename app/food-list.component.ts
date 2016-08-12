import { Component } from 'angular2/core';
import { Food } from './food.model';
import { FoodComponent } from './food.component';
import { AddFoodComponent } from './add-food.component';
import { EditFoodComponent } from './edit-food.component';
import { CaloriePipe } from './calorie.pipe';


@Component({
  selector: 'food-list',
  directives: [FoodComponent, AddFoodComponent, EditFoodComponent],
  inputs: ['foods'],
  pipes: [CaloriePipe],
  template: `
    <select (change)="onOperandChange($event.target.value)">
      <option value="all">Show All</option>
      <option value="less">Show Low Calorie Foods</option>
      <option value="greater">Show High Calorie Foods</option>
    </select>
    <div class="container">
      <food-display *ngFor="#currentFood of foods | calorie: calorieLevelProperty: calorieOperandProperty" [food]="currentFood" (click)="foodClicked(currentFood)" ></food-display>
    </div>
    <edit-food *ngIf="selectedFood" [food]="selectedFood"></edit-food>
    <add-food (onSubmit)="createFood($event)" ></add-food>

  `
})
export class FoodListComponent {
  public foods: Food[];
  public selectedFood: Food;
  public calorieLevelProperty: number = 500;
  public calorieOperandProperty: string = "all";

  constructor(){}
  foodClicked(clickedFood: Food) {
    this.selectedFood = clickedFood;
  }
  createFood(args: [string, string, number]) {
    this.foods.push(
      new Food(args[0], args[1], args[2], this.foods.length)
    );
  }
  onOperandChange(filterOption: string) {
    this.calorieOperandProperty = filterOption;
  }
}
