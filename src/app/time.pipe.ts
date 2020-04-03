import { Pipe, PipeTransform } from '@angular/core';
import { Data } from '@angular/router';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: any): number {

    let time: Date = new Date();
    let timeOnTime: any = new Date(
      time.getFullYear(),
      time.getMonth(),
      time.getDate(),
    );
    var dayDiff = Math.abs(value - timeOnTime)//answer is in millisec
    const secInDay = 86400//sec in a day
    var dayDiffSec = dayDiff * 0.001;//convert millisec to sec
    var timeAgo = dayDiffSec / secInDay;

    if (timeAgo >= 1 && value < timeOnTime) {
      return timeAgo
    }
    else {
      return value
    }



  }

}
