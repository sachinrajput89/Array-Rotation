//Basic Array Program to Rotate Array by 2
// I used it by temp

var arrayval = [1,2,3,4,5]

//Print Array
console.log(arrayval);

//Length of array
console.log(arrayval.length);

//Put first 2 values of array in a temp array
var temparr = [arrayval[0], arrayval[1]]

//initialize a new array 
var newarray = [];

//Create a new array with new values
for (var i = 2; i <= arrayval.length; i++)
{
    newarray.push(arrayval[i]);
}

console.log(newarray);

//Merge both the arrays
for (var i = 0; i <= temparr.length; i++)
{
     newarray.push(temparr[i]);

}

console.log(newarray);