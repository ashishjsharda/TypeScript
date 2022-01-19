class Car{
    //field
    engine:string;
    constructor(engine:string){
        this.engine=engine;
    }
    disp():void{
        console.log("Hello ,this is my car class")
    }
}

var obj = new Car("tesla");
obj.disp();
