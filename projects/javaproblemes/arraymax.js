var marks = [94, 45, 67, 23, 90, 34,]
var max = marks[5];
for (var i = 0; i < marks.length; i++) {
    var element = marks[i];
    if (element > max) {
        max = element;
    }
}
console.log(max);