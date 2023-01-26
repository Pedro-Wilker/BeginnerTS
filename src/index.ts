//tipos basicos
let age=5;
const firstName:string = "Felipe";
const isValid:boolean = true;
let idk:any=5;

idk = "Pedro";

const ids:number[]= [1,2,3,4];


//tupla
const person: [number, string]= [14, 'P'];

//Listas de tupla
const people: [number,string][]= [
    [1,'Pedro'],
    [2,'Wilker']
]

//Intersections
const productID: string | number = 1;

//Enum
/* 
enum Direction {
    Up=1,
    Down=2
}

const Direction = Direction.Up;
 */

// Type Assertions 
const productName: any= 'Boné'

let itemId:string;

itemId = productName as string;



console.log(age);
 