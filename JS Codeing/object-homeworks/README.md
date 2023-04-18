# JAVASCRIPT OBJECT HOMEWORK

## 1. UPVOTES VS DOWNVOTES
Write a function that takes as an argument an object containing counts of both upvotes anddownvotes, 
return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.

* **Example:** 
  * ```getVoteCount({ upvotes: 13, downvotes: 0 }) ➞ 13```
  * ```getVoteCount({ upvotes: 2, downvotes: 33 }) ➞ -31 ```
  * ```getVoteCount({ upvotes: 132, downvotes: 132 }) ➞ 0 ```
 
## Notes*
You can expect only positive integers for vote counts. Answer

## 2. CONVERTING OBJECTS TO ARRAYS
Write a function that takes an object as an argument and converts it into an array,
where each element represents a key-value pair in the form of an array.

* **Example:**
  * ```toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]```
  * ```toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]```
  * ```toArray({}) ➞ []```

## Notes*
Return an empty array if the object is empty.

## 3. DRINK SORTING
Write a function that takes as an argument an array of objects, where each object is a drink with two properties: name and price, 
The function should return the given array where the drinks objects are sorted by price in ascending order.
**Assume that the following array of drink objects needs to be sorted:**

```ruby
drinks = [
{name: "lemonade", price: 50}, {name: "lime", price: 10} {name: "Fanta", price:17} {name: “Coca Cola", price:15}
]
```

* **Example:**
  * ```sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: “Coca Cola", price:15}, {name: "Fanta", price:17}, {name: "lemonade", price: 50}]```

## Notes*
Return an empty array if the object is empty.

## 4. GET SUM OF PEOPLE'S BUDGET
Create a function that takes as an argument an array of objects and returns the sum of people's budgets.

* **Example:**
```ruby
getBudgets([
{ name: "John", age: 21, budget: 23000 }, { name: "Steve", age: 32, budget: 40000 }, { name: "Martin", age: 16, budget: 2700 }
]) ➞ 65700
```

## 5. CONVERT KEY, VALUES IN AN OBJECT TO ARRAY
Write a function that takes an object as an argument and returns an array containing 2 arrays: 
one filled with the keys of given object, 
the other with values of given object.

* **Example:**
  * ```1.objectToArray({ A: 1, B: 2, C: 3, D: 4,}) ➞ [["A", “B”, “C”, “D”], [1, 2, 3, 4]];```
  ####
  * ```2.objectToArray({ likes: 2, dislikes: 3, followers: 10}) ➞ [["likes", "dislikes", “followers”], [2, 3, 10]];```

## 6. INVERT KEYS AND VALUES
Write a function that inverts the keys and values of an object.

* **Example:**
  * ```invert({ "z": "q", "w": "f" }) ➞ { "q": "z", "f": "w" }```
  * ```invert({ "a": 1, "b": 2, "c": 3 }) ➞ { 1: "a", 2: "b", 3: "c" }```
  * ```invert({ "zebra": "koala", "horse": "camel" }) ➞ { "koala": "zebra", "camel": "horse" }```

## 7. PERFUME
You have three capacity perfumes: 30, 50 and 100 mls and an array with list of perfumes: perfumeBrands.

```ruby
let perfumeBrands = [ 
 {
  name:"Chanel",
  prices:{
   '30ml': 35,
   '50ml': 70,
   '100ml': 100 
  }
 },
 { 
  name:"Dior",
  prices:{
  '30ml': 45,
  '50ml': 85, 
  '100ml': 130 
  }
},
{ 
  name:"Givenchy", 
  prices:{
  '30ml': 45, 
  '50ml': 96, 
  '100ml': 136 
  }
},
{
  name:"Giorgio Armani", 
  prices:{
  '30ml': 23, 
  '50ml': 56, 
  '100ml': 99 
  }
},
{ 
  name:"Hermes", 
  prices:{
  '30ml': 42, 
  '50ml': 67, 
  '100ml': 95 
  }
}];
```

Write a function that takes 3 arguments: perfume ```name(string)```,
```capacity(string)``` and the given array. 
It should return the ```price(included postfix $)``` of the perfume depending on the ```ml```.

* **Example:**
  * ```ChoosePerfume('Chanel', ‘50ml’, perfumeBrands) ➞ 70$```

## 8. HOMEWORK CAR
You have to write the code depending on the requirement

**Requirements:**
1. The program must create an object that represents a car.
   * The car object must have the following properties and methods:
   ####
    **Properties:**
      * `make (string)`: the make of the car
      * `model (string)`: the model of the car
      * `year (number)`: the year the car was made
      * `color (string)`: the color of the car
      * `mileage (number)`: the number of miles the car has been driven
   ####
   **Methods:**
      * `drive(distance)` method: increases the car's mileage by the specified distance.
      * `repaint(newColor)` method: changes the car's color to the specified newColor.


2. The program must use the car object's methods to change the car's mileage and color.
3. The program must output the car's updated mileage and color to the console.

## 9 CONSTRUCTOR FUNCTION
You have to write the code depending on the requirement

**Requirements:**
1. Create a `Constructor Function` called `Person` that takes three arguments: `name`, `age`, and `occupation`.
2. Inside the constructor function, use the `this` keyword to set the `name`, `age`, and `occupation` properties of the object being created.
3. Define a method called `sayHello` inside the `Person` constructor function. This method should log a greeting message to the console that includes the `name` and `age` properties of the object.
4. Create a new `Person` object called `person1` with the values `"Alice"`, `30`, and `"Engineer"` for the `name`, `age` and `occupation` properties, respectively.
5. Access the `name`, `age` and `occupation` properties of `person1` using dot notation and log them to the console to verify that they have been set correctly.
6. Call `sayHello` method of `person1` to log a greeting message to the console that includes the `name` and `age` properties of the object.

## 10 Getter and Setter Methods
**Description:**

Create an object called `person` that represents a person with properties like `name`, `age`, and `gender`.
Configure `getter` and `setter` methods for each `property` within the object itself,
The `name` property should be a string, the `age` property should be an integer,
and the `gender` property should be limited to `male`, `female`, or `other`.

**Tasks to be Completed:**

1. Create an object called "person" with the following properties: "name", "age", and "gender".
2. Configure a getter method for each property to retrieve their values from the object.
3. Configure a setter method for each property to set their values within the object and perform data validation.
4. For the "name" property, ensure that only string values are accepted.
5. For the "age" property, ensure that only positive integer values are accepted.
6. For the "gender" property, ensure that only "male", "female", or "other" values are accepted.
7. Test the getter and setter methods by setting and retrieving values for each property in the "person" object.


**Bonus Task**

## 11. CALL(), APPLY(), BIND() 

## Note: Useful links for self-study for bonus task
[Bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
[Call](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
[Apply](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)

##More
[w3School: bind](https://www.w3schools.com/js/js_function_bind.asp)
[w3School: call](https://www.w3schools.com/js/js_function_call.asp)
[w3School: apply](https://www.w3schools.com/js/js_function_apply.asp)


##11.1 Using CALL()
You have to write the code depending on the requirement

**Requirements:**
1. Define a function that uses the `this` keyword.
2. Define an object with a property that will be used as the value of `this`.
3. Invoke the function using the `call()` method and pass the object as the first argument.

##11.2 Using APPLY( )
You have to write the code depending on the requirement

**Requirements:**
1. Define a function that takes multiple arguments.
2. Define an array of values that will be passed to the function as arguments.
3. Invoke the function using the `apply()` method and pass `null` as the value of `this` and the `array` of arguments as the second argument.

##11.3 Using BIND( )
You have to write the code depending on the requirement

**Requirements:**
1. Define an object with a method that uses the `this` keyword.
2. Use the `bind()` method to create a new function with the object as the value of `this`.
2. Invoke the new function to execute the method with the object as the value of `this`.
