function convert(...array) {
  return array.map(element => {
    return typeof element === 'number' ? `${element}` : parseFloat(element)
  })
}

const executeforEach = (array, func) => {
  array.forEach(func)
};

const mapArray = (array, func) => {
  return array.map(element => {
    element = typeof element === 'number' ? element : parseFloat(element)
    return func(element)
  })
};

const filterArray = (array, func) => {
  return array.filter(func)

};

const flipOver = (string) => {
  let newString = ''
  for (let i = 0; i < string.length; i++) {
    newString += string[string.length - i - 1]
  }
  return newString
};

const makeListFromRange = (range) => {
  let array = []
  let rangeLenght = range[1] - range[0]
  array[0] = range[0]
  for (let i = 0; i < Math.abs(rangeLenght); i++) {
    array.push(array[i] + rangeLenght / Math.abs(rangeLenght))
  }
  return array
};

const getArrayOfKeys = (array, key) => {
  return array.map(element => element[key])
}

const substitute = (array) => {
  return array.map(element => element < 30 ? '*' : element)
};

const getPastDay = (date, days) => {
  const newDate = new Date(date)
  newDate.setDate(date.getDate() - days)
  return newDate.getDate()
};


const formatDate = (date) => {
  const numberMinLenght = 2 
  let years = date.getFullYear()
    let months = numberFormat(date.getMonth() + 1, numberMinLenght)
    let days = numberFormat(date.getDate(), numberMinLenght)
    let hours = numberFormat(date.getHours(), numberMinLenght)
    let minutes = numberFormat(date.getMinutes(), numberMinLenght)
    let dateString = `${years}/${months}/${days} ${hours}:${minutes}`
    return dateString
};
function numberFormat(number, lenght) {
  let numberString = `${number}`
  if (numberString.length < lenght) {
      let amountOfZero = lenght - numberString.length
      for (let i = 0; i < amountOfZero; i++) {
          numberString = '0' + numberString
      }
  }
  return numberString
}

module.exports = {
  convert,
  executeforEach,
  mapArray,
  filterArray,
  flipOver,
  makeListFromRange,
  getArrayOfKeys,
  substitute,
  getPastDay,
  formatDate,
};
