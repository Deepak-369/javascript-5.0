what is javascript and why we use it?

-javacsritpt is logic based programing language where we can create our project funcctionality in that.
-javacsript is a high level programing language for buildweb pages.
-Now we used the ES6(echma script 6) version of javascript, in other words we called vanila javascript.
-runtime envirnment of javascript is node js.

VARIABLE:-
-Variable is a container to store some data.
-In js we have three type of variables 
1.let:-
-Let is a type of variable which is used for changing the variable name later .
-Now these days ,most of the cases we used let for creating variable.
-Let is a block scope code so we have been using let for most of the cases.

2.var:-
-Var is a type of variable which is also used for changing the variable later stage.
-Var is used in browser so now a days we are don't use var most of the time.
-
3.const:-
-const is a type of variable where we can't change our data further.
-const means constant to store some data like numbers,iteger etc..

TASK-
1.DIFF btwn let and var.
2.Diff btwn var & const.
3.What do you mean by haisting(when we donn't decla.re value of variable but it execute the code).

RULES OF VARIABLE:-
-Variable names are case sensative "a" & "A" is different.
-Only letter ,digit,underscore & $ are allowed(not even space).
-only letter ,underscore or $ should be 1st character.
-Reserve words cannot be variable names.

DATA TYPES IN JAVASCRIPT:-
-Data type is a attribute associated with a piece of data that tells acomputer system how to interprets its value.
-Mainly in js their are 2 types of data type-
1.primitive:-
 -In js there are 7 types of primitive data type.
 1.Number:-number are the type of data  type those it contain some numerical value.
 2.String:-string is a type of data type that can hold some characterlike names....
 3.Boolean:-Inboolean data type we get Boolean value like true,false.
 4.Undefined:-IN undefined data type the data is not define so that it will show undefined.
 5.Null:-In this data type we get null for the value means nothing.
 6.Bigint:-In Bigint we will get big integer.
 7.Symbol:-In Symbol we get whole symbol as well as the value we get for the data type.

2.Non-primitive or Reference:-
  -Non-primitive data type are the type of data type that can hold multiple items in a single time .
  -Non-primitive data types are -object,array,function.

object:-
  -object is a non-primitive data types which can hold multiple of item in one single entity.
  -Mainly objects are working on (key;value)pair.
  -The left side is our keys and right hand side are the values of following object.

   ex-
   deepak={
   college :"GIET";
   address :"BBSR";
   age :50;
   salary:45000;
   carrier :"good"
   }

OPERATORS IN JS:-
 -Operators are the key todo some of task or operate so,e task.
 -ex=A+B
 -In the above example A & B are the operands ,'+' is the operators to do the addition.

  -ARITHMETIC OPERATORS:-
   -(+,-,*,/)
   modulus = %
   Exponential = **
   Increment = ++
   Decrement = --

3.Assign operator:-(assign some value to the operator)
(=, +=, -=, *-, **=)

4.Comparision operator:-(compiler the values)
-It gives the result true or false
equal to -> ==
not equal to -> !=
equal to & type -> ===
not equal to & type -> !==
( >, >=, <, <= )

5.Logical operator:-(check the logic of the operator (true or false))
>Logical AND &&
table of AND operator is:-
cond 1 , cond 2 , rs(&&)
T + T =T
T + F =F
F + T =F
F + F =F

>Logical OR ||
table of OR operator is:-
cond 1 , cond 2 , rs(||)
T + T =T
T + F =T
F + T =T
F + F =F

Conditional statement:-
-To implement condition in the code ,there  are 3 type of conditional statements are there-
1.if condition -
 -if condition is true then statement is true otherwise false.
 syntax:- 
 if(condition){
  statement
 }

 2.if-else condition
  -if if condition is true then block execcuted its terminate to else condition .
  syntax:-
  if(condition){
    statement
  }
  else{
    statement
  }

  3. else-if condition :-
   - It checks the condition multiple times where condition is true.
   syantax :-
   if(condition){
      statements;
   } else if(condtion){
      statements;
   } else{
      statements; 
   }

   LOOPS:-

   - loops are usedto execute a piece of code again and again.

   1.FOR LOOP :-
    syntax  - for (initialization ; condition ; updation){
      statement
    }

    ex - for (let i =1; i<= 6; i++){
      console.log("deepak)
    }

    2.WHILE LOOP:-
    syntax -
    while(condition){
      statement
      udation
    }

    3.do-while :-
    sytax - 
    do(
      statement
      udation
    )while(condion);

    4. for-of loop:-It iterate on string and array.

    5.for-in loop:- It iterate over objects(key-value pair)
    syntax -
    for(let key in objvar){
      statement
    }

Q.
1.print all even no. between 1 to 100.
2.create a game  you start with any random no. ,ask the user to guessing the  game no. untill the user enter correct number .

STRING IN JS:-
- String is sequence of character used to represent text.
- Create a strig  -> let str = "web bocket"
- string length ->str.length
- string indexing -> str[0], str[1], str[2]......

TEMPLETS LITERALS IN JS:-
- A way to have embedded expression in string.
-Its denoted on  ``. i.e `today is a greate day`

STRING INTERPOLATION :-
-To create strings by doing substitution on placeholders.
- EX- `string text ${expression} string text`

ESCAPE SYMBOL:-
- \n - new line.
- \t - tab inside the text.

STRING METHODS:-
- these are built in function to manupulate a string.
1. str.toUpperCase()
2. str.toLowerCase()
3. str.trim()
4. str.slice(start,end)
5. str1.concat(str2)
6. str.replace(searchval,newVal)
7. str.chatat(idx)

ARRAYS IN JS:-
collection of items-

EX-

let heros = ["ironman","thor","hulk","spiderman"];
let marks = [46,28,58,63,95];
let info = ["rahul","68",]
- array index starting from 0 .
EX- arr[0], arr[1],arr[2]....

Loops over the array :-
- print the below element in one by one 
- let heros = ["ironman","thor","hulk","spiderman"];
- we will  do it through loops.

PRACTICE QUESTION:-
Q1.For a given array with marks of students ->[85,97,44,37,76,60]. Find the average marks of the entire class.
Q2.For a given array with prices of 5 items  ->[250,645,300,900,50].All items have an 10% off on them.Change the array to  store final price after applying offer.