

//FILTER
array = [1, 2, 3, 4, 5]

function callBackFilter(element) {

  return element % 2 == 0

}

function metodoFilter(array, callback) {
  let newArray = []

  for (let index = 0; index < array.length; index++) {

    if (callback(array[index])) {
      newArray.push(array[index])
    }

  }

  return newArray
}

console.log(metodoFilter(array, callBackFilter));


//FIND
array = [1, 2, 3, 4, 5]

function callBackFind(element) {

  return element % 2 == 0

}

function metodoFind(array, callback) {

  for (let index = 0; index < array.length; index++) {

    if (callback(array[index])) {
      return array[index]
    }

  }

}
console.log(metodoFind(array, callBackFind));

//INCLUDES
function metodoIncludes(searchElement) {
  array = [1, 2, 3, 4, 5]

  for (let index = 0; index < array.length; index++) {

    if (searchElement == array[index]) {
      return true
    }
  }
  return false

}
console.log(metodoIncludes(5));

//REDUCE
array = [0, 1, 2, 3, 4]

function callBackReduce(element) {

return element

}


function metodoReduce(callback, array, valorInicial = 0) {
  // valorInicial = 0
  let total = valorInicial

  for (let index = 0; index < array.length; index++) {
    total += callback(array[index])
  }

  return total
}
console.log(metodoReduce(callBackReduce, array, 2));



//MAP
array = [1, 2, 3, 4, 5]

function callBackMap(element) {

  return element % 2 != 0

}

function metodoMap(array, callback) {

  let newArray = []

  for (let index = 0; index < array.length; index++) {

    if (callback(array[index])) {
      newArray.push(array[index])
    }

  }

  return newArray
}

console.log(metodoMap(array, callBackMap));



//INDEX OF
function metodoIndexOf(searchElement) {
  array = [1, 2, 3, 4, 5]

  for (let index = 0; index < array.length; index++) {

    if (searchElement === array[index]) {
      return index
    }
  }
  return -1

}
console.log(metodoIndexOf(2));