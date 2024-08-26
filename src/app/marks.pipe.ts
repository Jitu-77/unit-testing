import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marks',
  standalone: true
})
export class MarksPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    // return null;
    let grade = ""
    if(value > 89 ){
      grade = 'A'
    }
    if(value > 79 && value <= 89){
      grade = 'B'
    }
    if(value > 69 && value <= 79){
      grade = 'C'
    }
    if(value > 59 && value <= 69){
      grade = 'D'
    }
    if(value > 49 && value <= 59){
      grade = 'E'
    }
    if(value <49){
      grade = 'Failed'
    }
    return grade
  }

}
