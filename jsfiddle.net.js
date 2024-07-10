let json = '[{"name":"Badr","age":30},{"name":"Wilke","age":25}]';

let jsonData = JSON.parse(json);

/* console.log(jsonData[1].name); */

// by value, by reference

/*
if(var) {  
  	// needs to be true 1 " "(space) [](array)
} else {
  // 0 false null undefined ''(empty string)
}
*/

let obj = {"cars": [
	{"model": "BWM", "color": "black"},
  {"model": "Mercedes", "color": "white"}
]};

let obj2 = {"persons": [
    {
        "name": "Badr",
        "age": 30,
        "cars": null
    },
    {
        "name": "Wilke",
        "age": 25,
        "cars": [obj.cars[1], {"model": "Tesla", "color": "black"}]
    }
]
}

/*
[null, [
	{"model": "Mercedes", "color": "white"},
  {"model": "Tesla", "color": "black"}
]]
*/

/* console.log(JSON.stringify(obj)); */

/* console.log(obj.cars[0].color); */

/* Mercedes has white color owned by Wilke */

/* let cars = obj2.persons.map((pers) => {
	// console.log(pers);
  return pers.cars; 
}); */

/* console.log(cars); */

for(let pers of obj2.persons) {
  if(Array.isArray(pers.cars)) {
  	for(let car of pers.cars) {
    	console.log(`${car.model} has ${car.color} color owned by ${pers.name}`);
    }
  }
}
