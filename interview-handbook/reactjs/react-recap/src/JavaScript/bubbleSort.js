const arr = [2,6,1,6,8]

arr.sort((a,b)=>{
    if(a>b) return 1
    if(a<b) return -1
    return 0
})

console.log(arr);