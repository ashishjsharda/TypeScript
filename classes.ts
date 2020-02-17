class Car{
    model:String
    constructor(model:String)
    {
        this.model=model;
    }

    display():void{
        console.log("Model of car is",this.model);
    }
}

var obj=new Car("Rolls Royce");
obj.display();
