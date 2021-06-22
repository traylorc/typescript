class Pets
{
    name : string;
    breed : string;
    color : string;
    age : number;

    constructor(name:string, breed:string, color:string, age:number)
    {
        this.name = name;
        this.breed = breed;
        this.color = color;
        this.age = age;
    };

    print(): void
    {
        console.log(this.name, this.breed, this.color, this.age)
    };

}

let Mia = new Pets("Mia", "pitbull", "brown", 3);
let Lucy = new Pets("Lucy", "basset", "white", 1);
let Eevee = new Pets("Eevee", "cat", "brown", 9);

let animals: Pets[] =[
    Mia,Lucy,Eevee
]   

for(var pet of animals)
{
    pet.print();
}