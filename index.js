// Code your solution in this file!
const arr = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = function(arr) {
  const firstTwo = [arr[0], arr[1]];
  return firstTwo;
}

const returnLastTwoDrivers = function(arr) {
  const lastTwo = [arr[2], arr[3]];
  return lastTwo;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
  return function fareMultiplier(fare){
    return (fare*multiplier);
  }
}


const fare = createFareMultiplier(2);

function fareDoubler(fare) {
  return (fare*2)
}

function fareTripler(fare) {
  return (fare*3)
}

function selectDifferentDrivers(arr, x) {
  return x(arr);
}

//selectDifferentDrivers() — This function takes two arguments, an array of the names of Scuber's drivers and either the returnFirstTwoDrivers() or returnLastTwoDrivers() function. Based on these two arguments, selectDifferentDrivers() will return either the first two drivers or the last two drivers.