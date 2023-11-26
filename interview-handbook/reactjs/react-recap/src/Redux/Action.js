import { buy_book } from "./actionTypes"

const purchase_book=()=>{
    return{
        type:buy_book
    }
}




/*
1. Actions are JavaScript object that contains information
2. Action are the only soure of information for the store. It only tells us what has happend

3. Actions have a type property and it should be defined in string constraints

4. It is compulsory to include type property in the object

e.g
syntax

const Actions={
    type:""
}

*/