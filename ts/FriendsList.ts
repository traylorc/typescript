class Friends
{
     fullname : string;
     age : number;
     email : string;
     bff : boolean;

     constructor(fullname:string, age:number, email:string, bff:boolean)
     {
         this.fullname=fullname;
         this.age=age;
         this.email=email;
         this.bff=bff;
     }

     print(): void
     {
        console.log(this.fullname, this.age, this.email, this.bff)
     }

}


let Mattea = new Friends("Mattea", 30, "mmswain@tql.com", true);

let Jeff = new Friends("Jeff", 30, "jnorth@tql.com", true);
let Z = new Friends("Z", 30, "zpoindexter@tql.com", true);

let friends: Friends[] = [
    Mattea, Jeff, Z
]

for(var f of friends)
{
    f.print();
};