abstract class user{
    username:string;
    age:number;


    constructor(username:string, age:number){
        this.username=username;
        this.age=age;
    }
    abstract display():void;
}
class student extends user{
    city:string;
    constructor(username:string, age:number, city:string){
        super(username,age)
        this.city=city;
    }
    display(): void {
        console.log(`username:${this.username},age:${this.age},city:${this.city}`);
    
    }
}
let student1=new student('hima', 34, 'bangladesh')
student1.display();

