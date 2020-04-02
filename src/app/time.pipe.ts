import { Pipe, PipeTransform } from '@angular/core';

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
    var dateDiff = Math.abs(value - timeOnTime)
    const secInDay = 86400
    var dateDiffSec = dateDiff * 0.001;
    var timeAgo = dateDiffSec / secInDay;

    if (timeAgo >= 1 && value < timeOnTime) {
      return timeAgo
    }
    else {
      return value
    }


  }

}
