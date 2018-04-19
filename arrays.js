var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(arr, elem){
  arr = [...elem]
}

function destructivelyAddElementToBeginningOfArray(arr, elem) {
  return arr.unshift(elem);
}
