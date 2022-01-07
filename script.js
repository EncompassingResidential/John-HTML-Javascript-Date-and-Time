
// expects convertMonthtoString(time_From_Date.getMonth())
function convertMonthtoString (monthAsNumber) {
  switch (monthAsNumber) {
    case 0:
      currentMonth = "January";
      break;
    case 1:
      currentMonth = "February";
      break;
    case 2:
      currentMonth = "March";
      break;
    case 3:
      currentMonth = "April";
      break;
    case 4:
      currentMonth = "May";
      break;
    case 5:
      currentMonth = "June";
      break;
    case 6:
      currentMonth = "July";
      break;
    case 7:
      currentMonth = "August";
      break;
    case 8:
      currentMonth = "September";
      break;
    case 9:
      currentMonth = "October";
      break;
    case 10:
      currentMonth = "November";
      break;
    case 11:
      currentMonth = "December";
      break;
    default:
      currentMonth = `time_From_Date.getMonth ${time_From_Date.getMonth} Unknown Month of Year`;
  }

  return currentMonth;

} // convertMonthtoString


  /*
    e.g. Friday, January 7th 2022
    Clock should show current date in format 
        Day, Month Date Year (eg. Monday, August 12th 2021)

    getFullYear()	Get the year as a four digit number (yyyy)
    getMonth()	Get the month as a number (0-11)
    getDate()	Get the day as a number (1-31)

      expects formatDateStamp(Date())
   */
function formatDateStamp(time_From_Date) {
  /*
  console.log("Date.getFullYear() is " + time_From_Date.getFullYear());
  console.log("Date.getMonth() is " + time_From_Date.getMonth());
  console.log("Date.getDate() which is day of month " + time_From_Date.getDate());
  */
  let dayOfWeek = "";
  switch (time_From_Date.getDay()) {
    case 0:
      dayOfWeek = "Sunday";
      break;
    case 1:
      dayOfWeek = "Monday";
      break;
    case 2:
      dayOfWeek = "Tuesday";
      break;
    case 3:
      dayOfWeek = "Wednesday";
      break;
    case 4:
      dayOfWeek = "Thursday";
      break;
    case 5:
      dayOfWeek = "Friday";
      break;
    case 6:
      dayOfWeek = "Saturday";
      break;
    default:
      dayOfWeek = `JR time_From_Date.getDay ${time_From_Date.getDay} Unknown Day of Week`;
  }

  let currentMonth = convertMonthtoString(time_From_Date.getMonth());

  let dayOfMonth = "";
  if (time_From_Date.getDate() === 1) {
    dayOfMonth = "1st";
  }
  else if (time_From_Date.getDate() === 2) {
    dayOfMonth = "2nd";
  }
  else if (time_From_Date.getDate() === 3) {
    dayOfMonth = "3rd";
  }
  else if (time_From_Date.getDate() >= 4) {
    dayOfMonth = time_From_Date.getDate() + "th";
  }
  else {
    dayOfMonth = "Unknown day of Month " + time_From_Date.getDate()
  }

  /*
    Friday, January 7th 2022
    Clock should show current date in format 
        Day, Month Date Year (eg. Monday, August 12th 2021)
   */
  return dayOfWeek
              + ", " +
              currentMonth
              + " " +
              dayOfMonth
              + " " +
              time_From_Date.getFullYear();

} // formatDateStamp()

function formatTimeStamp(time_From_Date) {

  let time_Hour = 0;
  let time_AM_or_PM = "";
  
  if (time_From_Date.getHours() > 12) {
    time_Hour = time_From_Date.getHours() - 12;
    time_AM_or_PM = "pm";
  }
  else {
    time_Hour = time_From_Date.getHours();
    time_AM_or_PM = "am";
  }

  return (time_Hour < 10 ? "0" : "") + time_Hour 
                  + ":" +

                  (time_From_Date.getMinutes() < 10 ? "0" : "") + time_From_Date.getMinutes()
                  + ":" +

                  (time_From_Date.getSeconds() < 10 ? "0" : "") + time_From_Date.getSeconds() +

                  " " + time_AM_or_PM ;
                  /* + "." +
                  time_From_Date.getMilliseconds(); */

} // formatTimeStamp()

function updateDateTimeStamp() {
  // let newRandom = Math.random();
  // console.log(newRandom);

  let currentTime = new Date();

  document.getElementById("dynamicDate").innerHTML= formatDateStamp(currentTime);


  document.getElementById("dynamicTime").innerHTML= formatTimeStamp(currentTime);

/*  console.log("Date.getHours() is " + currentTime.getHours());
  console.log("Date.getMinutes() is " + currentTime.getMinutes());
  console.log("Date.getSeconds() is " + currentTime.getSeconds());
  console.log("Date.getMilliseconds() is " + currentTime.getMilliseconds());
  console.log("Date.getTime() is " + currentTime.getTime());
  console.log("Date.getDay() is day of week " + currentTime.getDay());
  console.log("Date.now() is " + currentTime.now + "\n");

()	Get the hour (0-23)
()	Get the minute (0-59)
()	Get the second (0-59)
()	Get the millisecond (0-999)
()	Get the time (milliseconds since January 1, 1970)

Date.now()	Get the time. ECMAScript 5.)*/

}
