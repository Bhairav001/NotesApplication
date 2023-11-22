function curryAdd(x){
    return function(y){
        return function(z){
              console.log(x+y+z)
        }
    }
}

curryAdd(2)(4)(3)