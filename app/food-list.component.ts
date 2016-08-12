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
    <div class="container">
      <add-food (onSubmit)="createFood($event)" ></add-food>
    </div>
    <div class="container">
      <h4>Filter Options</h4>
      <label for="calorie-category">Filter by Calorie Type</label>
      <select (change)="onOperandChange($event.target.value)" id="calorie-category">
        <option value="all">Show All</option>
        <option value="less">Show Lower Calorie Foods</option>
        <option value="greater">Show Higher Calorie Foods</option>
      </select>
      <label for="calorie-amount">Number of Calories</label>
      <select (change)="onCalorieChange($event.target.value)" id="calorie-amount">
      <option value="100">100 Calories</option>
      <option value="200">200 Calories</option>
      <option value="300">300 Calories</option>
      <option value="400">400 Calories</option>
      <option value="500" selected>500 Calories</option>
      <option value="600">600 Calories</option>
      <option value="700">700 Calories</option>
      </select>


    </div>
    <div class="container">
      <food-display *ngFor="#currentFood of foods | calorie: calorieLevelProperty: calorieOperandProperty" [food]="currentFood" (click)="foodClicked(currentFood)" ></food-display>
    </div>
    <edit-food *ngIf="selectedFood" [food]="selectedFood"></edit-food>

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
    console.log(this.calorieLevelProperty);
  }
  onCalorieChange(filterOption) {
    this.calorieLevelProperty = parseInt(filterOption);
  }
}
