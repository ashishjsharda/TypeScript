let jsonStr: string = '{"fname":"Ashish", "lname":"Sharda"}'
let jsonObj: any = JSON.parse(jsonStr)
console.log(jsonObj.fname) // Ashish
console.log(jsonObj.lname) // Sharda
