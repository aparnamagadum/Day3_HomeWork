let arr=[10,20,30,40];
let sum=0;
function Add(arr){
for(var i=0;i<arr.length;i++){
    sum+=arr[i];
}
console.log(sum);
}
let mul=1;
function Multiplication(arr){
    for(var i=0;i<arr.length;i++){
        mul*=arr[i];
    }
    console.log(mul);
}
let sum1=0;
function SumOfEven(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2===0)  sum1+=arr[i];  
    }
    console.log(sum1);
}
let sum2=0;
function SumOfOdd(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!=0)  sum2+=arr[i];  
    }
    console.log(sum2);
}
Add(arr);
Multiplication(arr);
SumOfEven(arr);
SumOfOdd(arr);