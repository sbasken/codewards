/*
DESCRIPTION:
A new task for you!

You have to create a method, that corrects a given time string.
There was a problem in addition, so many of the time strings are broken.
Time is formatted using the 24-hour clock, so from 00:00:00 to 23:59:59.
Examples

```
"09:10:01" -> "09:10:01"  
"11:70:10" -> "12:10:10"  
"19:99:99" -> "20:40:39"  
"24:01:01" -> "00:01:01"  
```
*/

function timeCorrect(timestring) {
  if (timestring === null || timestring.length === 0) return timestring
  const regex = /\d\d:\d\d:\d\d/;
  if (!timestring.match(regex)) {
    return null
  } else {
     let timeArray = timestring.split(":")
     if (timeArray[0] >= 24) {
       timeArray[0] = parseInt(timeArray[0]) % 24
     }
     for (let i = 0; i < timeArray.length; i++) {
       if (timeArray[i] >= 60) {
         timeArray[i-1] = parseInt(timeArray[i-1]) + 1
         if (timeArray[i-1] >= 60) {
           timeArray[i-2] = parseInt(timeArray[i-2]) + 1
           timeArray[i-1] = parseInt(timeArray[i-1]) - 60
         }
         
         timeArray[i] = parseInt(timeArray[i]) - 60
         timeArray[i] = timeArray[i].toString().padStart(2, '0')
       }
       if (timeArray[0] >= 24) {
       timeArray[0] = parseInt(timeArray[0]) % 24
     }
       timeArray[0] = timeArray[0].toString().padStart(2, '0')
       timeArray[1] = timeArray[1].toString().padStart(2, '0')
       timeArray[2] = timeArray[2].toString().padStart(2, '0')
       
     }
    console.log(timeArray)
    return timeArray.join(":")
  }
}