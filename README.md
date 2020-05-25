# Data types homework

### Task №1. Write a function - convert, that converts the argument values. If it will be a string, convert it to number and wise versa. It should return an array of converted values.

#### For example:
```
convert('1', 2, 3, '4') // [1, '2', '3', 4]
convert(5, 6, 23, '66') // ['5, '6', '23', 66]
```
<hr>

### Task №2. Write function, which iterates over array and executes function on each element.

#### For example:
```
executeforEach([1,2,3], function(el) {console.log(el * 2)}) // logs 2 4 6
```
<hr>

### Task №3. Write function, which returns transformed array based on function, which passed as a second parameter (callback). If array contains a number as string, it should convert it and return as number. You’re allowed to change a body of that callback function if you need. You can reuse function from task 2.

#### For example:
```
mapArray([2, '5', 8], function(el) {return el + 3}) // returns [5, 8, 11]
```
<hr>

### Task№4. Write function, which returns filtered array based on function, which passed as a parameter. You can reuse function from task 2.

#### For example:
```
filterArray([2, 5, 8], function(el) { return el % 2 === 0 }) // returns [2, 8]
```
<hr>

### Task №5. Write a function that reverses the string value passed into it.

#### For example:
```
flipOver('hey world') // 'dlrow yeh'
```
<hr>

### Task №6. Write a function which creates an array from the given range of numbers

#### For example:
```
makeListFromRange([2, 7]) // [2, 3, 4, 5, 6, 7]
```
<hr>

### Task №7. Write a function that accepts an array of object and returns new array of values by passed key name.That function should not change the original array. You can reuse function from task 2. 

#### For example:
```
const actors = [
  { name: ‘tommy’, age: 36 },
  { name: ‘lee’, age: 28 }
];
 
getArrayOfKeys(actors, ‘name’); // [‘tommy’, ‘lee’]
```
<hr>

### Task №8. Write function substitute() that accepts an array of numbers and manages to replace all numbers lower than 30 with star("&#42;"). It should return a new array with numbers and "&#42;" instead of numbers lowest from 30. You can reuse function from task 3.

#### For example:
```
substitute([58, 14, 48, 2, 31, 29]); // [58, '*', 48, '*', 31, '*']
```
<hr>

### Task №9. Write a function which returns a day number that was some amount of days ago from the passed date. It should not change the given source date.

#### For example:
```
const date = new Date(2019, 0, 2);
getPastDay(date, 1); // 1, (1 Jan 2019)
getPastDay(date, 2); // 31, (31 Dec 2018)
getPastDay(date, 365); // 2, (2 Jan 2018)
```
<hr>

### Task №10. Write a function that formats a date in such format "YYYY/M/d HH:mm".

#### For example:
```
formatDate(new Date('6/15/2018 09:15:00')) // "2018/06/15 09:15:00"
formatDate(new Date()) // "2020/01/07 12:56" // gets current local time
```