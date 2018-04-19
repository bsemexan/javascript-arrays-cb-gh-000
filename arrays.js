var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(arr, elem){
  return [elem, ...arr]
}

function destructivelyAddElementToBeginningOfArray(arr, elem) {
  arr.unshift(elem);
  return arr;
}

var addElementToEndOfArray = (arr, elem) => ([...arr, elem])

var destructivelyAddElementToEndOfArray = (arr, elem) => {arr.push(elem); return arr;}

var accessElementInArray = (arr, i) => (arr[i])

var destructivelyRemoveElementFromBeginningOfArray = (array) => {array.shift(); return array;}
