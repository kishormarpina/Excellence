function Even_nums(arr){
    var new_arr = []
    for(let i=0;i<arr.length;++i){
        if(arr[i]%2 === 0){
            new_arr.push(arr[i])
        }
    }
    return new_arr
}
var arr = [0,1,2,3,4,5,6,7,7,8,9,10]
console.log(Even_nums(arr))