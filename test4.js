
function formatMath(x){
    let arr = x.splip(' ');
    let ketqua;
    if(arr[1] == "+"){
       ketqua = Number.arr[0] + Number.arr[2]
    }
    if(arr[1] == "-"){
        ketqua = Number.arr[0] - Number.arr[2]
    }
    if(arr[1] == "*"){
        ketqua = Number.arr[0] * Number.arr[2]
    }
    if(arr[1] == "/"){
        ketqua =  Number.arr[0] / Number.arr[2]
    }

    return `${x} + ${ketqua}`
}
console.log(formatMath("3 + 4")) //➞ "3 + 4 = 7"

console.log(formatMath("3 - 2")) //➞ "3 - 2 = 1"

console.log(formatMath("4 * 5")) //➞ "4 x 5 = 20"

console.log(formatMath("6 / 3")) //➞ "6 / 3 = 2"

