let arr =[
    {
       name:"bhairav",
       roll_no:23
    },
    {
        name:"ramesh",
        roll_no:12
     },
     {
        name:"omkar",
        roll_no:56
     },
     {
        name:"tushar",
        roll_no:23
     }
]

let updatedArr =arr.filter((el,i)=>{
   return !(el.name=="tushar" && el.roll_no==23)
    

})
console.log(updatedArr)