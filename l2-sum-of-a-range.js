// Your code here.
function range (start, end, step){
  let myArray = [];
  step = step || 1;

  if(start < end){
  for (start; start <= end; start += step) {
  	myArray.push(start);
  }
 } else {
	for (start; start >= end; start += step) {
  	myArray.push(start);
  }
 }
  return myArray;
}

function sum(myArray) {
  let total = 0;
  for (let value of myArray) {
    total += value;
  }
  return total;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
