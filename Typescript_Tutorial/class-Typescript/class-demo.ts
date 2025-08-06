class user{
    username:string;
    age:number;


    constructor(username:string, age:number){
        this.username=username;
        this.age=age;
    }
    display():void{
    console.log(`username:${this.username},age:${this.age}`);
    }
}
let user1=new user('hima',34)
user1.display();