let ArrayOfArrays=[
    [
        {name:"object-1", value:10},
        {name:"object-2", value:20}
    ],
    [
        {name:"object-3", value:40},
        {name:"object-3", value:50}
    ],
    [
        {name:"object-3", value:40},
        {name:"object-3", value:50}
    ],
    [
        {name:"object-3", value:40},
        {name:"object-3", value:50}
    ],
    [
        {name:"object-3", value:40},
        {name:"object-3", value:50}
    ],
    [
        {name:"object-3", value:40},
        {name:"object-3", value:50}
    ],

]

const fistFiveArray= ArrayOfArrays.slice(0,5)
console.log(fistFiveArray)

let sortedObject=[
    {
        name:"rahane",
        age:23
    },
    {
        name:"bhairav",
        age:45
    },
    {
        name:"gotam",
        age:22
    }
]

sortedObject.sort((a,b)=>{
    if(a.age>b.age) return 1
    if(a.age<b.age) return -1
    return 0
})
// console.log(sortedObject)