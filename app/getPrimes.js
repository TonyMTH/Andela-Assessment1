'use strict'

var exports = module.exports = {};


exports.getPrimes = function(num){
  
  let primeList = [];
  
  if (typeof(num) != 'number'){
    return 'Input must be a Number';
  }
  
  if (num <= 0){
    return 'Number must be Positive';
  }
  
  for (var i=2; i <= num; i++){
    if (test_prime(i) !== undefined){
      primeList.push(test_prime(i));
    }
  }
  return primeList;
  
function test_prime(num){
  if(num == 2){
    return num;
  }else{
    for(var x = 2; x <= Math.sqrt(num); x++){
      if(num % x == 0){
        return;
      }
    }return num;  
  }
}
}