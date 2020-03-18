var chocolateBars=["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array,element) {

  var a=new Array()
  for value in array {
    
  a.unshift(value)
 }
  a.unshift(element)
  return a

}

function destructivelyAddElementToBeginningOfArray(array,element) {

  array.unshift(element)
  return array

}

function addElementToEndOfArray(array,element) {

  var a=new Array()
  a.push(array[0])
  a.push(element)
  return a

}

function destructivelyAddElementToEndOfArray(array,element) {

  array.push(element)
  return array

}

function accessElementInArray(array,index) {

  return array[index]
}

function removeElementFromBeginningOfArray(array,element) {

  var a=new Array()
  a.unshift(array[0])
  a.unshift(element)
  a.slice(0)
  return a

}

function destructivelyRemoveElementFromBeginningOfArray(array,element) {

  array.unshift(element)
  return array

}

function removeElementFromEndOfArray(array,element) {

  var a=new Array()
  a.push(array[0])
  a.push(element)
  return a

}

function destructivelyRemoveElementFromEndOfArray(array,element) {

  array.push(element)
  return array

}
