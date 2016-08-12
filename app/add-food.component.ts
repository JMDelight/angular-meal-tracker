import { Component, EventEmitter} from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'add-food',
  outputs: ['onSubmit'],
  template: `
  <div>
    <h3>Add New Food</h3>
    <label for="name">Add Food</label>
    <input placeholder="Name" #newName id="name">
    <label for="details">Details</label>
    <input placeholder="Details" #newDetails id="details">
    <label for="calories">Calories</label>
    <input type="number" min=0 placeholder="kiloCalories" #newCalories id="calories">
    <button (click)="addFood(newName, newDetails, newCalories)" class="btn my-btn">Add</button>
  </div>
  `
})
export class AddFoodComponent {
  public onSubmit: EventEmitter<[string, string, number]>;
  public specialties: string[];
  constructor(){
    this.onSubmit = new EventEmitter();
  }
  addFood(newName: HTMLInputElement, newDetails: HTMLInputElement, newCalories: HTMLInputElement) {
    this.onSubmit.emit([newName.value, newDetails.value, parseInt(newCalories.value)])
    newName.value = '';
    newDetails.value = '';
    newCalories.value = '';
  }
}
