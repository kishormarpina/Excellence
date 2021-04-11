function getmax(a,b){
    if(a>=b){
        return a
    }else{
        return b
    }
}
function Consecutive_1s(arr){
    var count = 0
    var max = 0
    for(let i=0;i<arr.length;++i){
        if(arr[i] == 1){
            count++
        }else{
            max = getmax(max,count)
            count = 0
        }
    }
    return max
}
var arr = [0,1,1,0,1,1,1,0]
console.log(Consecutive_1s(arr))