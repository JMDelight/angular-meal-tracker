import { Component} from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food',
  inputs: ['food'],
  template: `
  <h3>Edit Food Details</h3>
  <label for="edit-name">Food Name</label>
  <input [(ngModel)]="food.name" id="edit-name">
  <label for="edit-details">Food Details</label>
  <input [(ngModel)]="food.details" id="edit-details">
  <label for="edit-calories">Food Calories</label>
  <input type="number" min=0 [(ngModel)]="food.calories" id="edit-calories">
  `
})

export class EditFoodComponent {
  public food: Food;
}
