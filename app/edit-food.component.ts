import { Component} from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food',
  inputs: ['food'],
  template: `
  <h3>Edit Food Details</h3>
  <label>Food Description</label>
  <input [(ngModel)]="food.description">
  <label>Food Details</label>
  <input [(ngModel)]="food.details">
  <label>Food Calories</label>
  <input type="number" min=0 [(ngModel)]="food.calories">
  `
})

export class EditFoodComponent {
  public food: Food;
}
