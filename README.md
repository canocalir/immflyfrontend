<h1>Immfly Front-end Developer Test</h1>

## Live Admin Panel

<a href="https://immfly-frontend-test.herokuapp.com/"> Click Here for Live Demo </a>

## Questions and Answers

### 1. In the browser runtime, Javascript is a ...
a. ... compiled language
b. ... transpiled language
c. ... interpreted language

#### Answer
*Depends on some developers, it's an interpreted language actually because while runtime its interpreted by the client browser but, thanks to JIT compiles code just before execution we can think about it as compiled/interpreted hybrid too. (JIT === Just in Time Compiler)

### 2. How would you or which tool would you use ECMAScript6 in a project in order to make it backwards compatible with all/old browsers?

#### Answer

*Ofcourse with Babel.js ---> It's a toolchain to help us convert ES2015 code to make it usable and be recognized by all/old browsers. It's already bundled in <strong>create-react-app</strong> 

### 3. How would you structure this page into components? Use common sense.

#### Answer

*You can find the folder structure above in the repository. Besides, i've already built it and deployed on Heroku, its prototype version. You can check the live demo on <a href="https://immfly-frontend-test.herokuapp.com/"> Click Here for Live Demo </a>

** Logos and the corporate colors will be changed with dummy content after the test due to copyright issues.
** Please wait for a while after clicking the link, it can take a while because of its free tier on Heroku.
** It can also built by OracleJET easily. I'm still learning the core concepts of OracleJET. Mostly its used on Admin Panels and Graphs. 

### 4. Do you know what the frontend testing pyramid is?

#### Answer

*I'm aware the concept but don't know the pyramid, until i got that question. So, what i learned are as follows:
* On React, for example components and functions are units.
* Unit tests are fastest and not time consuming, budget solutions.
* Writing lots of small unit test cost less time and money when compared with others.
* Integration or snapshot tests are slower and we need to use them less. (component vs component comparison)
* E2E test are end to end tests(it opens browser and)
* Use very few high level tests.
* Avoid for ice-cream cone formation.
* If you are using minimal unit tests and much manual tests with E2E too, your project is going to be very complicated.

### 5. In your company there are three frontend developers working on the same react project, and each one is using a different version of NodeJS and there are packages that depend on the NodeJS version:
a. Ricard is using 10.0.6 version.
b. Nico is using 8.11.4 version.
c. Albert is using 6.14.1 version.

Do you think it is a problem? Why?
If you think it is a problem, tell us how would you solve this dependency.

#### Answer

*Using different versions of Node can create severe issues according to dependencies of the package. We need to use one stable version by entire team. We can manage it by "nvm" or reinstall the latest stable version by all team.

### 6. We have this project structure (it is simplified).If you have to add a new component Button and a new service/class/manager for authorization, and both will be used on login and dashboard section, how would you structure those new features in the project ?

#### Answer

*I add <strong>"authorizations"</strong> / <strong>"components"</strong> folders under <strong>"sections"</strong> folder. Add the <strong>Button.jsx</strong> and <strong>Button.scss</strong> under that folder.

#### 7.

#### Answer

### 8. What is the output of this code?
``` javascript
function compare (a) {
return a == false ? 'A' : 'B'
}
console.log(compare((1 - 1).toString()))
```

#### Answer 
*Output is 'A' ,because '==' operator is not also equity of types, its just passing the value 'A' or 'B' to 'a', but while returning and console logging we compare the value with 0 (false) and convert the final value to a string.

### 9. What is the output of this code?
```javascript
function compare (a) {
return a === false ? 'A' : 'B'
}
console.log(compare((1 - 1).toString())) //added one missing parantheses to the end.
```

#### Answer
*First of all there is a syntax error. (One parantheses is missing from the last line end)
Output is 'B' after i made correction to syntax because, this time we are not only passing the <strong>value</strong> also we are comparing the <strong>types</strong> too. So, (1 - 1 = 0) is a 'number' and 'false' is a boolean. While we are comparing the values, we are also comparing the types. Because of that it returns 'B' as answer.

### 10. What is the output of this code?
```javascript
const compare = (a, b) => a === b
console.log(compare(1, '1'))
```

#### Answer
*It's returning <strong>false</strong> as output because again there is a 'strict comparison' operator '===' used. Checking the given parameters 1 (is a number) and '1' (is a string) type and value are the same or not then because of the types are not equal it outputs as 'false'

### 11. What is the output of this code?
```javascript
function hello () {
return {
value: 'hello'
}
}
function goodbye () {
return
{
value: 'goodbye'
}
}
console.log(goodbye())
console.log(hello())
```
#### Answer
```value: 'goodbye'```
```value: 'hello'```
*It returns the objects  with all of the properties and values. If you want to call only one properties value inside an object we can use ```goodbye().value``` or ```hello().value```

### 12. What is the output of this code? Maybe it is undefined, or not.
```javascript
function sum () {
let result = 0
for (const argument of arguments) {
result += argument
}
return result
}
console.log(sum(1, 2, '1', 2))
```

#### Answer
*There is a for...of loop inside and it iterates through arguments. While ```result += argument``` and with help of the for...of loop we will sum the values of arguments. (1 + 2 + '1' + 2) ---> 312  It returns 312 because '1' is a string and it will just goes to the right side of the 1 + 2 = 3 number value and then because of '1' is a string '2' at the end of the line will also goes to the right side of the '1'.

### 13. If we are writing this code in ECMAScript 6 and we want the output to be: Hello. I like Javascript. Goodbye. If you only can change variables declaration, what would you change? Think in EC6 variables scope. Maybe you won't change anything.
```javascript
var a = 'Hello. '
var b = 'Goodbye.'
function print () {
return a + b
var a = 'I like Javascript. ' //Just change the place of that with return a + b
}
console.log(a + print())
```

#### Answer
*This is a very tricky question and the question is very simple. If we declare the variable 'a'(the one inside the function scope) before the ```return a + b``` we get the answer as 'Hello. I like Javascript. Goodbye.' Ok but why, because the other variable 'a' is hoisted in <strong>the first lines</strong> in global scope and it won't get another value inside the function.

### 14. If we are writing a sum and multiply function in ECMAScript 6, how would you simplify this code in only one line?
```javascript
function sumAndMultiply (a, b) {
const result = a + b + a * b
return result
}
```
#### Answer
*The shortest version is below. Curly brackets not required if only one expression is present. Also we don't need to use return.
```javascript
const sumAndMultiply = (a, b) =>  a + b + a * b;
```

### 15. What is the output of this code? Maybe it is undefined, or not.
```javascript
let a = [1, goodbye', 3] //If you don't add '(quote) at the beginning of 'goodbye' it won't run
const b = ['hello', 5, 6]
a = [...a, 'spread operator', undefined, ...b]
console.log(a)
```

#### Answer
*It has a syntax error and you must add single quote before the goodbye its missing. After that it runs and gives the output ```[1, "goodbye", 3, "spread operator", undefined, "hello", 5, 6]``` thanks to '...' spread operators before arrays (it must be an array or object) 'a' and 'b' it will call every item inside the arrays. Spread operators expands the arrays or objects into its set of items.

### 16. Consider this array:
```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```
### Write a chunk of code in ECMAScript 6 that stores in an other variable an array with only the odd numbers of this array. Simplify it as much as you can.

#### Answer
```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter((number) => number %2 !== 0);
const odds = [] = array;
console.log(odds);
```
*We will use filter method with if the value is not equal value or not equal type with 0 or remains 2, then we create an array 'odds' and store the 'array' arrays new items inside.

### 17. Consider this array:
```javascript
const array = [
{
name: 'Camilo', team: 'backend',
},
{
name: 'Rafa', team: 'frontend',
},
{
name: 'Pedro', team: 'operations',
}
]
```
### Write a chunk of code in ECMAScript 6 that transforms this array of dictionaries into a dictionary containing the names as keys and the team as value. Result:
```javascript
{
Camilo: 'backend',
Rafa: 'frontend',
Pedro: 'operations'
}
```
#### Answer
*I take a look at some sources because at first i didin't get the exact answer then i've learned if i use 'reduce' method i can solve that. So i found a solution is as follows:
```javascript
const res = array.reduce((acc, curr) => {          //we should give accumulator and current value
acc[curr.name] = curr.team;
return acc;
}, {});                                     //And a stating value '{}'(empty object)
console.log(res);                           //Object { Camilo: "backend", Rafa: "frontend", Pedro: "operations" }
```

### 18. What is the output of this code:
```javascript
var a = Person('a')
var b = new Person('b')
var c = Person
function Person(name) {
this.first_name = name
}
console.log(a.first_name)
console.log(b.first_name)
console.log(c.first_name)
```
#### Answer
*While we are adding a new first_name parameter value to 'Person' function, we must use 'new' then function name then the parameter value. It's a simple function with first_name property = name parameter. 'var c' is undefined because 'Person' function never called just stored in 'variable c'
