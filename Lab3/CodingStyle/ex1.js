function pow(x,n)//there are no spacing between arguments
{
  let result=1;
  for(let i=0;i<n;i++) {result*=x;}//the result should be on the new line
  return result;
}

let x=prompt("x?",''), n=prompt("n?",'')
if (n<=0)
{
  alert(`Power ${n} is not supported, please enter an integer number greater than zero`); //A very long line that can be put on several lines
}
else
{
  alert(pow(x,n))
}