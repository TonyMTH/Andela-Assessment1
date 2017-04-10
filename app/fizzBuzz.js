'use strict'

module.exports = {

 /* Find the average of three integers 
 computeAverage: function(num1, num2, num3) {
 	const = 3;
   let average = (num1 + num2 + num3) / 3;
   return average;
 },*/
 fizzBuzz: function(num){
 	if (num % 3 === 0 && num % 5 === 0){
 		return 'FizzBuzz';
 	}else if (num % 3 === 0){
 		return 'Fizz';
 	}else if (num % 5 === 0){
 		return 'Buzz';
 	}else{
 		return num;
 	}
 }
}