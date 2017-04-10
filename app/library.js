'use strict'

module.exports = {

 /* Find the average of three integers */
 computeAverage: function(num1, num2, num3) {
 	/* const = 3; */
   let average = (num1 + num2 + num3) / 3;
   return average;
 },
 
 /* Find the factorial of an integer */
 computeFactorial: function(num) {
   var factorial = 1;
   if (num == 0){
   	return 1;
   }
   for (var i = 1; i <= num; i++){
   	factorial *= i;
   }
   return factorial;
 },

 /* Convert a given Celcius temperature to Fahrenheit */
 convertTempCtoF: function(cTemp) {
   let fTemp = ((9/5) * cTemp) + 32;
   return fTemp;
 },

 /* Convert a given Fahrenheit temperature to Celcius */
 convertTempFtoC: function(fTemp) {
   let cTemp = (5/9) * (fTemp - 32);
   return cTemp;
 }

}
