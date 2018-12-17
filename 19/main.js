
var data = [
    {
        text: 'some text 1',
        display: true,
        disable: false
    },
    {
        text: 'some text 2',
        display: false,
        disable: false
    },
    {
        text: 'some text 3',
        display: true,
        disable: true
    },
    {
        text: 'some text 4',
        display: true,
        disable: false
    },
];

// write code here uss filter, map and forEach functions of Array

// expected console.log
// 'item 1 some text 1'
// 'item 1 some text 4'

var addText = 'item 1 ';

//usage filter and map functions

var newData = data.map(function(item) {
    return addText + item.text
});


function filteredResult1(item) {

    var lastSymbol = item.substr(item.length - 1);
    return lastSymbol < 2;
}

var result1 = newData.filter(filteredResult1);

console.log(result1[0]);



//usage filter and forEach functions

data.forEach(function(item) {
    item.text = addText + item.text;
});


function filteredResult2(item) {
    var lastSymbol = item.text.substr(item.text.length - 1);
    return lastSymbol > 3;
}


var result2 = data.filter(filteredResult2);

console.log(result2[0].text);

