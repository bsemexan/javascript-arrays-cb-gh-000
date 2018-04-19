var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(arr, elem){
  arr = [element, ...arr]
}

function destructivelyAddElementToBeginningOfArray(arr, elem) {
  arr.unshift(elem);
  return arr;
}
