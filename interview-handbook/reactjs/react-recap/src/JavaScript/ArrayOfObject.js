const object=[
    {
       name:"object-1",
       value:10
    },
    {
        name:"object-1",
        value:20
    },
    {
        name:"object-1",
        value:30
    },
    {
        name:"object-1",
        value:40
    },
    {
        name:"object-1",
        value:50
    },
    {
        name:"object-1",
        value:60
    }
]

// const firstFiveArrayOfObjects = object.slice(0,5)
// console.log(firstFiveArrayOfObjects)


const arrayOfArrays = [
    [
      { name: 'Object1', value: 10 },
      { name: 'Object2', value: 20 },
      // ... more objects
    ],
    [
      { name: 'Object3', value: 30 },
      { name: 'Object4', value: 40 },
      // ... more objects
    ],
    [
      { name: 'Object5', value: 50 },
      { name: 'Object6', value: 60 },
      // ... more objects
    ],
    [
      { name: 'Object7', value: 70 },
      { name: 'Object8', value: 80 },
      // ... more objects
    ],
    [
      { name: 'Object9', value: 90 },
      { name: 'Object10', value: 100 },
      // ... more objects
    ],
    // ... more arrays
  ];

const firstFiveArray = arrayOfArrays.slice(0,Math.min(5,arrayOfArrays.length));

console.log(firstFiveArray);

const firtFiveArrays =[];

const maxArrays = Math.min(5,arrayOfArrays.length);


for(let i=0; i<maxArrays;i++){
    firtFiveArrays.push(arrayOfArrays[i])
}
// console.log(firtFiveArrays)