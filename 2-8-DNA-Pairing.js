function pairElement(str) {
    var arr = str.split("");
    var check = ['A', 'T', 'C', 'G']
    var match = [["A", "T"], ["T", "A"], ["C", "G"], ["G", "C"]];
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < check.length; j++) {
            if (arr[i] === check[j]) {
                arr[i] = match[j];
            }
        }
    }
    console.log(arr)
    return arr;
}

//pairElement("GCG");

pairElement("ATCGA") //should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
//pairElement("TTGAG") //should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
//pairElement("CTCTA") //should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].