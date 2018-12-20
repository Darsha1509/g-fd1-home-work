
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

data.filter(function(item) {
    if (item.display && !item.disable) {
        return item;
    }
}).map(function(item) {
    return 'item 1 ' + item.text;
}).forEach(function(item) {
    console.log(item);
});