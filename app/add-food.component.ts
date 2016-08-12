import { Component, EventEmitter} from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'add-food',
  outputs: ['onSubmit'],
  template: `
  <div>
    <h3>Add New Food</h3>
    <label>Food Description</label>
    <input placeholder="Description" #newDescription>
    <label>Food Details</label>
    <input placeholder="Details" #newDetails>
    <label>Food Calories</label>
    <input type="number" min=0 placeholder="kiloCalories" #newCalories>
    <button (click)="addFood(newDescription, newDetails, newCalories)">Add</button>
  </div>
  `
})

export class AddFoodComponent {
  public onSubmit: EventEmitter<[string, string, number]>;
  public specialties: string[];
  constructor(){
    this.onSubmit = new EventEmitter();
  }
  addFood(newDescription: HTMLInputElement, newDetails: HTMLInputElement, newCalories: HTMLInputElement) {
    this.onSubmit.emit([newDescription.value, newDetails.value, parseInt(newCalories.value)])
    newDescription.value = '';
    newDetails.value = '';
    newCalories.value = '';
  }
}
