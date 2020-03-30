import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: any): number {

    let time: Date = new Date();//Get current date and time
    let timeWithNoDate: any = new Date(time.getTime())//get time alone

    //var timeDiff = Math.abs(timeWithNoDate - value)//time diff in millisec
    //var timeDiffMin = timeDiff * 1.6667e-5; //converts millisec to mins
    //const minsInDay = 1440//mins in a day
    // //var timeAgo = timeDiffMin / minsInDay;
    // if (timeAgo >= 1 && timeWithNoDate > value) {
    return timeWithNoDate;

  }

}
