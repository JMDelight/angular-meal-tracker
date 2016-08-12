import {Pipe, PipeTransform} from 'angular2/core';
import {Food} from './food.model';

@Pipe({
  name: "calorie",
  pure: false
})
export class CaloriePipe implements PipeTransform {
  transform(input: Food[], args) {
    var desiredCalorieLevel: number = args[0];
    var desiredCalorieOperator: string = args[1];
    if(desiredCalorieOperator === "less") {
      return input.filter((food) => {
        return (food.calories <= desiredCalorieLevel);
      });
    } else if (desiredCalorieOperator === "greater") {
      return input.filter((food) => {
        return (food.calories >= desiredCalorieLevel);
      });
    } else {
      return input;
    }
  }
}
