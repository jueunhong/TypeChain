
//1. implicit types
let a = 'hello';
//error : a = 2;

let c = [1, 2, 3]
//error: c.push("1");


//2. explicit types
let b : boolean = false;


let d : number[] = [];
//error: c.push('1');

//3. optional parameter (| undefined)
const playerNico : {name:string, age?:number} = {
    name : "nico"
}

if(playerNico.age !== undefined){

}

//4. type Alias
type Age = number;
type Name = string;
type Player = {name:Name, age?:Age}

const playLynn : Player = {
    name: "lynn",
    age:12,
}

//5. function return type
function playerMaker1(name:string): Player{
    return {
        name: name,
    }
}

const nico = playerMaker1("nico")
nico.age = 14


const playerMaker2 = (name:string): Player => ({name})

const lynn = playerMaker2("lynn")
lynn.age = 12

