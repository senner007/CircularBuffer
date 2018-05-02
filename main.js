function circularBuffer (cblength) {
    if ( cblength < 1) throw "array buffer must be above 0"
    var arr = Array.from(Array(cblength), (v, i) => "EMPTY")
    var first = 0;
    return {
        append: function(num) {       
            arr[first] = num;
            first = first == cblength -1 ? 0 : first +1;
        },
        show: function () {
            return arr.map(function (v,i) {
                return "index " + i + ": " + v
            }).join("\n")
        },
        showSorted: function () {
            return arr.slice(0).sort((a, b) => a - b).map(function (v, i) {
                return "index " + i + ": " + v
            }).join("\n")
        }
    }
}
var cb = circularBuffer(3);

cb.append(6)
cb.append(7);
cb.append(8);
cb.append(9);
cb.append(10);
cb.append(11);
cb.append(12);
cb.append(13);


console.log(
    cb.show() // index 0: 12, index 1: 13, index 2: 11
)
console.log(
    cb.showSorted() // index 0: 11, index 1: 12, index 2: 13
)
