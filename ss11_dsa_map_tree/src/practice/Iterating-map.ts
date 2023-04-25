let myMap1: Map<string, number> = new Map<string, number>();

myMap1.set("Hung", 20);
myMap1.set("Tinh", 25);
myMap1.set("Quang", 21);
myMap1.set("Hue", 22);
myMap1.set("Kha", 24);

//Iterating over map keys
for (let name of myMap1.keys()) {
    console.log("Employee Name = ", name)
}

//Iterating over map values
for (let age of myMap1.values()) {
    console.log("Employee Age = ", age);
}

console.log("The iteratingMap Entries are: ");
//Iterating over map entries
for (let entry of myMap1.entries()) {
    console.log(entry[0], entry[1]);
}

//Destructuring on object entries
for(let [key, value] of myMap1){
    console.log("key: ", key, " - value: ", value)
}

