Conversion to celcius
function toCelcius(f)
{
	let celcius = (5/9) * (f - 32);
	return celcius;
}

//Conversion to faherient
function toFaherient(c)
{
  let faherient = ((9/5) * c) + 32;
  return faherient;
}

let test1 = toCelcius(2);

console.log('2 faherient to celcius = ' + test1);

let test2 = toFaherient(10);

console.log('10 celcius to faherient = ' + test2);

//Getting factorial using recursion
function getFactorial(num)
{
  if(num <= 1)
  {
    return 1;
  }
  else
  {
    return(num * getFactorial(num - 1));
  }
}

let test3 = getFactorial(4);

console.log('The factorial of 4 using recursion is ' + test3);

//Getting factorial using loop

function getFactorialLoop(num)
{
  let result = 1;
  for(var j = 1; j < num + 1; j++)
  {
    result *= j;
  }
  
  return result;
}

test5 = getFactorialLoop(4);
console.log('The factorial of 4 using loop is ' + test5);

//Get nth term of a Fibonacci sequence
function solveFibonnaci(num)
{
  let fibbos = [];
  for(var i = 0; i < num + 1; i++)
  {
    if(i < 2)
    {
      fibbos[fibbos.length] = i;
    }
    else
    {
      fibbos[fibbos.length] = fibbos[i-2] + fibbos[i-1];
    }
  }
  
  return fibbos[num];
}

let test4 = solveFibonnaci(10);
console.log('The 10th term of a fibonacci sequence is ' + test4);


