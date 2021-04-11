function Get_Sum(nums){
    var count = 0
    for(let i=0;i<nums.length;++i){
        count = count + nums[i]
    }
    return count
}
function Get_Repetitive(arr){
    var sumOf101Nums = Get_Sum(arr)
    var sumOf100Nums = parseInt((101*(100)/2))
    let res = sumOf101Nums - sumOf100Nums
    return res
}
var lst = []
for(let i=1;i<101;++i){
    lst.push(i)
}
lst.push(21)
console.log(Get_Repetitive(lst))