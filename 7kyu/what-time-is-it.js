// DESCRIPTION:
// Given a time in AM/PM format as a string, convert it to military (24-hour) time as a string.

// Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock

// Sample Input: 07:05:45PM Sample Output: 19:05:45

// Try not to use built in DateTime libraries.

// For more information on military time, check the wiki https://en.wikipedia.org/wiki/24-hour_clock#Military_time

function getMilitaryTime(input) {
    if (input.slice(-2) === "AM") {
      if (input.slice(0, 2) === '12') {
        return '00' + input.slice(2,-2)
      } else if (input.slice(0,2) === '24') {
        return '12' + input.slice(2,-2)
      } else {
        return input.slice(0,-2)
      }
    } else if (input.slice(-2) === "PM") {
      let hour = parseInt(input.slice(0,2)) + 12
      if (hour === 24) {
        hour -= 12
        return hour + input.slice(2,-2)
      }
      return hour + input.slice(2,-2)
    }
  };