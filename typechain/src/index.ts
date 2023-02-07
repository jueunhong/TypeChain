
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


//6. readonly
const names: readonly string[] = ["1", "2"]
//error: names.push("3")

//7. tuple
const player: [string, number, boolean] = ["nico", 1, true]
//error: player[0] = 1


//8. any - escape from typescript
//not good
const any1 : any[] = [1, 2, 3]
const any2 : any = "nico"
any1 + any2

//9. unknown
let u: unknown;

if(typeof u === 'number'){
    let u2 = u + 1
}

if(typeof u === "string"){
    let u3 = u.toUpperCase
    
}

//10. void
function hello(){
    console.log('x')
}


//11. never -> never return function
function hello2(): never{
    throw new Error("xx")
}

function hello3(name: string|number){
    if(typeof name === 'string'){
        name
    } else if (typeof name === 'number'){
        name
    } else {
        name
    }
}

