function employee(id: number, name: String) {
  this.id = id;
  this.name = name;
}

var emp = new employee(10, "Ashish");
console.log("Id seen is ", emp.id);
console.log("Name seen is ", emp.name);
