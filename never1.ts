function test (a:string|number) {
    if(typeof a=="string"){
        return true;
    }
    else if(typeof a=="number")
    {
        return false;
    }

    return  none();
}

let none=()=>{
    throw new Error("Never Occured");
}

console.log(test("Sai"))
