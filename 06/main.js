var array1 = [123, "string", true, {value: 321}, null],
    array2 = ["first", "second", "last"],
    result = [];

// write code here

for(var counter = 0; counter < array1.length; counter++) {
  result[counter] = array1[counter];
}

var i = 0

do {
  result[counter] = array2[i];
  counter++;
  i++;
} while (i != 3);

console.log("result: ", result);