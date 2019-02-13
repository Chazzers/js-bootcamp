# JS-bootcamp

## Eloquent JavaScript aantekeningen

### Inhoudsopgave
1. [Values, Types, and Operators](#h1-values-types-and-operators)
2. [Program Structure](#h2-program-structure)
3. [Functions](#h3-functions)
4. [Data Structures: Objects and Arrays](#h4-data-structures-objects-and-arrays)
5. [Higher-order Functions](#h5-higher-order-functions)
6. [The Secret Life of Objects](#h6-the-secret-life-of-objects)
8. [Bugs and Errors](#h8-bugs-and-errors)
9. [Regular Expressions](#h9-regular-expressions)
10. [Modules](#h10-modules)
11. [Asynchronous Programming](#h11-asynchronous-programming)

## H1: Values, Types, And Operators

Inside the computer’s world, there is only data. All data is stored as long sequences of bits. Bits are any kind of two-valued things, usually described as zeros and ones. (13 in bits = 00001101 in binary).

### Values

A typical modern computer has more than 30 billion bits in its volatile data storage (working memory). Nonvolatile storage (hard disk or equivalent) has way more. 

To be able to work with these massive amounts of bits without getting lost, we must make chunks out of those bits that represents information. In JS those chunks are called values. Every value has a type that determines its role. Some values are numbers, some values are pieces of text, some values are functions, and so on. 

To create a value, you must merely invoke its name. If all values would be used at the same time the computer might run out of memory, but fortunately as soon as you no longer use a value, it will dissipate.

### Numbers

Values of the number type are numeric values. In JS they are written as follows: 13. JS uses a fixed number of bits (64), to store a single number which can be multiplied with powers (tot de macht). Because of this you can make a lot more combinations (18 trillion).

Fractional numbers are written by using a dot: 9.18.

It’s also possible to do a scientific notation: 2.99e8 = 2.998x108 = 299,800,000.

Calculations with whole numbers (integers) smaller than the aforementioned 9 quadrillion are guaranteed to always be precise. 

### Arithmetic

The main thing to do with numbers is arithmetic (+, -, =, *, /, %). These symbols are called operators. You can do everything you can do with math.

% is the remainder operation: 314%100 = 14.

### Special numbers

Three special values in JS that are considered numbers but don’t behave like normal numbers. The first two are Infinity and -Infinity, which represent the positive and negative infinities. Don’t put too much trust in infinity-based computation. It will quickly lead to the next special number NaN. 

NaN stands for “not a number”, although it is a value of the number type. 

### Strings

A string is a value that is typed between quotes: ‘Hello World’.
A few characters are hard to get between quotes like: ‘’. When a \ is typed inside a string the next character is considered special. ‘hi\nhi will give:

~~~~javascript
hi
hi
~~~~

The + operator can be used on Strings to make multiple strings glue together. ‘i’ + ‘ like’ = i like.

The difference between single or double quotes is which type of quote you need to escape inside of them. Backtick-quoted strings (template literals) can do a few more tricks. They can embed other values. 

~~~~javascript
console.log('half of 100 is ${100 / 2}')
~~~~


Zal dit weergeven in de console:

**half of 100 is 50.**

### Unary Operators

Not all operators are symbols. Some are written as words. For example typeof 4.5 will display the type of the variable, so: number.

### Boolean

Boolean has just two values: true and false. 

### Comparison

3>2 = true.

~~~~javascript
>= (greater than or equal to), <= (less than or equal to), == (equal to), and != (not equal to).
~~~~

There is only one value that isn’t equal to its self and that is NaN.

### Logical operators

Logical operators are: and, or ,and not. 

~~~~javascript
&& = and. Its result is true only if both the values given to it are true.

|| = or. It produces true if either of the values given to it is true.

! = not. It flips the value given to it. 
~~~~

Another logical operator is ternary, operating on three values. This one is called the conditional operator. When it is true it will choose the middle value and if it is false the value on the right. So:

~~~~javascript
true ? 1 : 2 = 1
false ? 1 : 2 = 2
~~~~

### Empty values

There are two special values, written `null` and `undefined` that are used to denote the absence of a meaningful value. No meaningful value yields: undefined. 

The difference in meaning between null and undefined is an accident of JavaScript’s design, and it doesn’t matter most of the time. Recommendation: treat them as interchangeable. 

### Automatic Type Conversion

When an operator is applied to the wrong type of value, JS will quietly convert that value to the type it needs (forgiving language). This is called type coercion. 

When you want to test if a value has a real value you can do that by using the `==` (or `!=`) operator.

If you do not want type conversion to happen, you can use two additional operators: `===`and `!==`. 

### Short-Circuiting Of Logical Operators

The || operator for example will return the value to its left, when that can be converted to true, and will return the value on its right otherwise. So:

~~~~javascript
null || “user” = user
“Agnes” || “user” = Agnes
~~~~

The rules for converting strings and numbers to Boolean values state that 0, NaN, and the empty string (“”) count as false, and the rest is true. 

&& works similarly but the other way around. When the value to its left is something that converts to false, it returns that value, and otherwise it returns the value on its right. 

The conditional operator works in a similar way. Of the second and third values, only the one that is selected is evaluated.

## H2: Program Structure

### Expressions And Statements

A fragment of code that produces a value is called an expression. An expression between parenthesis also an expression. Expressions can contain other expressions. This allows us to build expressions that describe arbitrarily complex computations.

If an expression corresponds to a sentence fragment, a JS statement corresponds to a full sentence. The simplest kind of statement is an expression with a semicolon after it. 

To catch and hold values, JS provides a thing called a **binding**, or **variable**:

~~~~javascript
let caught = 5 * 5;
~~~~

That’s a second kind of statement. The special word let indicates that this sentence is going to define a binding. It is followed by its name and if we want to give it a value by an `=` operator and an expression.

The previous statement creates a binding called caught and uses it to grab the number that is produced by multiplying 5 by 5.

After a binding has been defined, its name can be used as an expression.
A binding with a value is not stuck with that value, it can be changed. 
If you ask for the value of an empty binding, you’ll get undefined.

A single `let` statement may define multiple bindings. The definitions must be separated by commas.

The words `var` and `const` can also be used to create bindings, in a way similar to `let`.

The word `const` stands for constant. It defines a constant binding which points at the same value for as long as it lives. This is useful for bindings that give a name to a value so that you can easily refer to it later.


### Binding Names

**Binding names** can be any word, It can also contain digits as long as the first character isn’t a digit. A binding name may include $ or _ but no other punctuation or special characters.

Words with a special meaning such as let are keywords and the may **not** be used as binding names. 

### Alle binding names:

~~~~javascript
break; case; catch; class; const; continue; debugger; default;
delete; do; else; enum; export; extends; false; finally; for;
function; if; implements; import; interface; in; instanceof; let;
new; package; private; protected; public; return; static; super;
switch; this; throw; true; try; typeof; var; void; while; with; yield;
~~~~

### The environment

De verzameling bindings en hun waarden die bestaan op een bepaalde tijd heet: **The Environment**.

### Functions

Een `function` is een stukje van een script dat is verpakt in een waarde. Deze waarden kunnen toegevoegd worden om het verpakte script uit te voeren.

Het uitvoeren van een function heet een **function call**: 

~~~~javascript
function myFunction(){…};`
~~~~

De values binnen de haakjes van de functions zijn **parameters** en worden alleen binnen de functie gebruikt. Waarden die gegeven worden aan functions heten **arguments**.

De prompt function wordt vrijwel nooit gebruikt omdat je geen controle hebt over styling. 

### Console.log function

~~~~javascript
console.log();
~~~~

Met deze functie worden de argumenten binnen de haakjes als tekst-output gezet in de web-console. 

### Return values

Het laten zien van een “dialog box” of het schrijven van text naar een scherm is een **side effect**. Veel functies zijn bruikbaar door hun side-effects. Functions kunnen ook values produceren.

Wanneer een function een value produceert, wordt dit gedaan door het keyword: `return`.  Alles wat een waarde produceert is een expression in JS, wat betekent dat function calls gebruikt kunnen worden binnen grotere expressions.

### Control Flow

Statements in een script worden uitgevoerd van boven naar beneden. 

### Conditional execution

Niet alle scripts voeren van boven naar beneden uit. Met het `if` keyword in JS kan een situatie beschreven worden waarin een stuk code wel of niet uitgevoerd wordt. Dus een stuk code wordt uitgevoerd, alleen als er aan de opgegeven conditie wordt voldaan.

De `Number.isNaN` function is een standaard JS functie die alleen true returnt als het argument dat gegeven NaN is. Dus wanneer een string wordt gegeven aan deze functie wordt false gereturnd. 

De statement na de `if` is verpakt in {}. De curly brackets of braces kunnen gebruikt worden om een aantal statements te groeperen binnen een enkele statement, wat een **block** heet. 

Een `if` kan opgevolgd worden door een `else if` (meer dan twee conditionals) of door een `else`. 

### While and Do Loops

Een **Loop** wordt gebruikt om een stuk code een aantal keer te laten uitvoeren (een loop voert alle code binnen de {} **meerdere keren uit!**). 

Een statement dat begint met het keyword `while` creëert een loop `while(…){…}` dat een stuk code blijft herhalen als de boolean binnen de () true is. 

Een `do` loop zal altijd zijn body één keer uitvoeren, waarna de loop gaat testen of het moet stoppen na de eerste keer. Bijvoorbeeld:

~~~~javascript
let yourName;
do {
  yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);
~~~~

Dit voorbeeld forceert de gebruiker ervan om iets in te vullen door constant de vraag te herhalen tot de code input krijgt dat niet een lege string is. De ! operator zorgt ervoor dat een waarde naar een boolean wordt omgezet voordat de conditional gecontroleerd wordt en alle strings behalve “” zullen omgezet worden in true. 

### Indenting Code

Spaces of tabs en enters kunnen gebruikt worden om de code leesbaarder te maken. 

### For Loops

JS heeft ook `for` loops die korter geschreven zijn en vaak wat duidelijker in elkaar steken. 

~~~~javascript
for (let number = 0; number <= 12; number = number + 2) {
  console.log(number);
}
~~~~

Tussen de haakjes van de for loop moeten er twee `;` zitten. 

### Breakdown for loop

1. Met for maak je een loop aan.
2. Expression 1: (vaak) binding.  `var i = 0;`
3. Expression 2: boolean die kijkt of de loop moet door blijven gaan. `i < x;`
4. Expression 3: Update de state van de loop na elke iteratie.  `i++`

Dus:

~~~~javascript
for (let i = 0; i < 3; i++)
~~~~

### Breaking Out of a Loop

Wachten totdat de looping condition false wordt is niet de enige manier waarmee een loop gestopt kan worden. De statement `break;` kan ook de loop stoppen. Vaak wordt dit gedaan aan de hand van een `if` statement. 

~~~~javascript
for (let current = 20; ; current = current + 1) {
  if (current % 7 == 0) {
    console.log(current);
    break;
  }
}
~~~~

Als de loop niet een conditional of `break` heeft wordt het een infinite loop. Hierdoor kan je computer crashen. 

Het `continue` keyword is hetzelfde als break, op de manier dat het de progressie van de loop beïnvloed. Het verschil is dat met `continue` uit de loop wordt gebroken en verder wordt gegaan met de volgende iteratie. Dus:

~~~~javascript
var text = "";

for (var i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  text = text + i;
}


console.log(text); 
// expected output: "012456789"
~~~~

### Updating Bindings Succinctly (kort en bondig)

Vooral tijdens het loopen, zal een programma vaak een binding moeten updaten om een waarde vast te houden gebaseerd op de vorige waarde van die binding.

**JS Shortcut:**

~~~~javascript
counter += 1; || counter *= 1; || counter -= 1; || counter /= 1;
Of: counter++; || counter--
~~~~

### Dispatching on a Value with Switch

Het is niet ongebruikelijk voor een code om er zo uit te zien:

~~~~javascript
if (x == "value1") action1();
else if (x == "value2") action2();
else if (x == "value3") action3();
else defaultAction();`
~~~~

Er is een keyword, `switch`, die ervoor bedoeld is om zo een expression er directer uit te laten zien.

Helaas ziet het er een beetje ongemakkelijk uit (komt van Java)— een reeks `if` statements kunnen er beter uit zien. Dit ziet er zo uit:

~~~~javascript
switch (prompt("What is the weather like?")) {
  case "rainy":
    console.log("Remember to bring an umbrella.");
    break;
  case "sunny":
    console.log("Dress lightly.");
  case "cloudy":
    console.log("Go outside.");
    break;
  default:
    console.log("Unknown weather type!");
    break;
}
~~~~

Je kan zoveel `case` labels als je wilt binnen een **switch-block** zetten. Het programma zal beginnen met uitvoeren bij het label dat overeenkomt met de waarde die aan de `switch` gegeven is. De `case` zal uitgevoerd blijven worden, zelfs als andere labels erna worden aangeroepen, totdat het een `break` statement tegen komt. 

### Capitalization

Binding names mogen geen spaties bevatten. Dit kan opgelost worden door camel casing te gebruiken: 

~~~~javascript
function myFunctionIsAwesome(){…}`
~~~~

(elk woord met een hoofdletter behalve het eerste woord) 

### Comments

Om code duidelijker te maken voor lezers (of jezelf) kun je comments plaatsen op een regel: 

`//blablabla` (voor één regel)  
**of**  
`/**/` (voor meerdere regels).

## H3: Functions

Functions zijn er om:
* Structuur te geven aan grotere scripts
* Repetitie te verminderen
* Namen te geven aan subscripts 
* Subscripts te scheiden van elkaar.


### Defining a function

Een **functie definitie** is een normale binding waarvan de waarde van de binding een functie is.
Dus:  
~~~~javascript
const square = function(x){…};
~~~~  
zorgt ervoor dat square refereert naar een functie.

Een functie wordt gemaakt met een **expression** dat begint met het keyword `function`. Functions kunnen parameters hebben en hebben altijd een **body** (hier staan statements in).

`return` statements bepalen de waardes die de function returnt. Wanneer deze statement gecontroleerd wordt wordt er onmiddellijk uit de huidige functie gesprongen en wordt de gereturnde waarde gegeven aan de code die de functie aanroept. Een `return` keyword zonder expression erna geeft de gereturnde waarde: undefined. Functies die geen return statement hebben, returnen ook `undefined`.

**Parameters** van een function gedragen zich als normale bindings, maar de oorspronkelijke waardes van de parameters worden meegegeven door de **caller** van de functie, niet binnen de code van de functie zelf. Dus:

~~~~javascript
function myFunction(yolo){
    console.log(yolo);
}

myFunction('You Only Live Once')
~~~~

### Bindings and scopes

Elke binding heeft een scope, wat een gedeelte van het script voorstelt waarin de binding zichtbaar is. Als bindings buiten een functie of blok staan, is de scope het hele script.

Local bindings zijn bindings die binnen een scope zitten (alleen bruikbaar binnen deze scope). 
Elke scope kan buiten de scope eromheen kijken. De uitzondering is wanneer meerdere bindings dezelfde naam hebben. In dit geval kan de code alleen de binnenste lezen. 

### Nested Scope

Scopes kunnen genest worden wat ervoor zorgt dat er niet alleen local en global bindings zijn. Blocks en functions kunnen gemaakt worden binnen andere blocks en functions wat verschillende gradaties van lokaliteit produceren.

### Functions as Values

Een function binding is simpelweg een naam voor een specifiek gedeelte van de code. Zo een binding wordt één keer gedefinieerd en kan nooit verandert worden. (verschil tussen de name van de function en de binding van de functie kan verwarrend zijn)

Een function value kan alles doen dat alle andere values kunnen doen— je kan het gebruiken in expressions, niet alleen een call uitvoeren. Een function value kan in een nieuwe binding worden opgeslagen, gebruiken als een argument van een function, enzovoorts. Een binding dat een vast houdt is nog steeds een normale binding en kan een nieuwe waarde krijgen:

~~~~javascript
let launchMissiles = function() {
  missileSystem.launch("now");
};
if (safeMode) {
  launchMissiles = function() {/* do nothing */};
}
// De functie is leeg in safeMode.
~~~~

### Declaration notation

Er is een kortere manier om een function binding te maken. Dit kan gedaan worden door:

~~~~javascript
function square(x) {
  return x * x;
}
square();
~~~~
Of:
~~~~javascript
console.log("The future says:", future());

function future() {
  return "You'll never have flying cars";
}
~~~~

Functie declaraties zijn niet onderdeel van het top-to-bottom flow of control. Ze worden conceptueel verplaatst naar het bovenste gedeelte van de scope.

### Arrow Functions

Er is een derde notatie voor functies, dit ziet er anders uit dan de anderen. Het gebruikt een (`=>`) anders dan greater than or equal to(`>=`).

~~~~javascript
const power = (base, exponent) => {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};
~~~~

De pijl komt na de parameters en **vóór** de function body. 
Dus:

~~~~javascript
(parameter1, parameter2) => {body}
~~~~

Als er maar **één** parameter is kunnen de **()** weg die de parameters wrappen.  
Als de body maar **één** expression heeft kunnen de {} en return ook weg.

~~~~javascript
const square1 = (x) => { return x * x; };
const square2 = x => x * x;
// Doen hetzelfde
~~~~

### The Call Stack

~~~~javascript
function greet(who) {
  console.log("Hello " + who);
}
greet("Harry");
console.log(“Bye");
~~~~

**Doet dit:**

not in function  
in greet  
in console.log  
in greet  
not in function  
in console.log 
not in function  

**Dus:**
1. Computer ziet function greet(doet niks tot call)
2. Computer ziet call greet();
3. Computer gaat in greet kijken
4. Ziet daar console.log();
5. Gaat in console.log(); kijken
6. Gaat console.log(); uitvoeren
7. Gaat uit console.log(); binnen greet
8. Gaat kijken of er nog iets anders in greet staat
9. Er staat niks dus gaat uit greet
10. Gaat uit de function 
11. Ziet buiten de function na de greet(); call console.log();
12. Kijkt binnen console.log();
13. Voert console.log(); uit
14. Gaat uit console.log();

### Optional Arguments
~~~~javascript
function square(x) { return x * x; }
console.log(square(4, true, "hedgehog"));
// → 16
~~~~
JS negeert extra argumenten voor parameters en aan parameters zonder value wordt automatisch undefined toegekend. 
Voordeel: De functie kan aangeroepen worden met meer parameters dan argumenten of omgekeerd zonder een foutmelding.
Nadeel: Parameters kunnen gemakkelijk vergeten worden zonder dat je het weet. 
~~~~javascript
function minus(a, b) {
  if (b === undefined) return -a;
  else return a - b;
}

console.log(minus(10));
// → -10
console.log(minus(10, 5));
// → 5
~~~~

Als je een = operator na een parameter zet gevolgd door een expression, zal de waarde die gegeven is aan de parameter blijven bestaan bij de call als deze niet wordt aangeroepen. Als de parameter wordt aangeroepen dan wordt de waarde overschreven.
~~~~javascript
function power(base, exponent = 2) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
}

console.log(power(4));
// → 16
console.log(power(2, 6));
// → 64
~~~~
### Closure
~~~~javascript
function wrapValue(n) {
  let local = n;
  return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
// → 1
console.log(wrap2());
// → 2
~~~~
De closure is een verzameling van alle variabelen binnen de function scope wanneer de functie gemaakt wordt. In het voorbeeld hierboven wordt:
1. De function wordt gedeclareerd
2. Function wordt gebonden aan variable wrap1 met de parameter 1 en wordt gelijk gecalld
3. De parameter n wordt 1, local wordt 1 en de waarde wordt gereturnd. 
4. Doordat er bij de function niks wordt opgeteld zal de waarde de opgegeven waarde blijven van de function.


### Recursion

Een recursive function is een function die zichzelf blijft uitvoeren totdat hij dat niet meer zal doen. Het lijkt op een loop, maar het is een function.

Recursion is een sterker middel dan een loop omdat de call stack hierdoor minder erg wordt belast. (geloof ik)

### Functions and side-effects

Soorten functions kunnen onderscheiden worden in functions die gebruikt worden voor de return value en functions die gebruikt worden voor de side-effects. 

Side-effects geven niet per see een waarde mee wanneer ze gecalled worden.

## H4: Data Structures: Objects and Arrays

### Data Sets

JS heeft een manier om een lijst te maken van items dat heet: Array. Bijvoorbeeld:
~~~~javascript
let list = [‘item 1’, ‘item 2’, ‘item 3’];
~~~~
Als je een item als output in de console wilt kun je bijvoorbeeld doen:
~~~~javascript
console.log(list[1]);
// item 1
~~~~
De Array begint met tellen vanaf 0.

### Properties

Bijna alle JS values hebben een property. Wat voor property het is kan opgevraagd worden door:

**typeof:**
~~~~javascript
typeof value; 
~~~~
Een **property** kan opgevraagd worden door:

**Binnen een array:**
~~~~javascript
value[x];
~~~~
**normale variabele:**
~~~~javascript
value.x;
~~~~
**Als je wilt weten hoeveel items een array heeft:**
~~~~javascript
array.length;
~~~~
### Methods

Methods zijn properties met functions. zoals:

**toUpperCase-method**
~~~~javascript
var ik = ‘ik’;
ik.toUpperCase;
//IK
~~~~

**push-method (item bij array voegen)**
~~~~javascript
let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
// → [1, 2, 3, 4, 5]
~~~~

**pop-method (laatst toegevoegde item verwijderen)**
~~~~javascript
sequence.pop();
~~~~

### Objects

Values van het type: **object**; zijn verzamelingen van properties. Een manier om een object te maken is:

~~~~javascript
let day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running"]
};
console.log(day1.squirrel);
// → false
console.log(day1.wolf);
// → undefined
day1.wolf = false;
console.log(day1.wolf);
// → false
~~~~

Binnen de accolades zit een lijst van properties die zijn gescheiden met komma’s. Elke property heeft een naam die gevolgd wordt door een : en een value. Properties waarvan de namen of nummers niet valide zijn moeten gequote worden:

~~~~javascript
let descriptions = {
  work: "Went to work",
  "touched tree": "Touched a tree"
};
~~~~

Accolades hebben dus twee betekenissen in JS namelijk:

Aan het einde van een statement, beginnen ze met een **block** van statements
Elke andere positie beschrijven ze een **object**.

Het lezen van een property dat niet bestaat zal `undefined` geven.

Het is mogelijk om een waarde aan een property te geven d.m.v. de `=` operator. Dit zal:
Als het een waarde heeft de waarde van de property vervangen
Als het geen waarde heeft een nieuwe property aanmaken binnen het object.

De `delete` operator kan gebruikt worden om een **object property** te verwijderen.

De `in` operator zal wanneer het op een **string** en een **object** uitgevoerd wordt, je vertellen of dat object de property met de opgevraagde naam bevat. Als een property `undefined` is bestaat het wel en als het gedelete wordt wordt hij verwijdert.

Als je erachter wilt komen wat voor **properties** een object heeft kan de `Object.keys` function gebruikt worden. 

~~~~javascript
console.log(Object.keys({x: 0, y: 0, z: 2}));
// → ["x", "y", “z"]
~~~~

Je kan bijvoorbeeld ook de `Object.assign` function gebruiken die alle properties van één object naar de ander kopieert. 

~~~~javascript
let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA);
// → {a: 1, b: 3, c: 4}
~~~~

Arrays, hierna, zijn een soort object gespecialiseerd voor het opslaan van reeksen van dingen. 

Als binnen een object een array wordt gemaakt zal de typeof van dat array, object blijven. 

~~~~javascript
let journal = [
  {events: ["work", "touched tree", "pizza",
            "running", "television"],
   squirrel: false},
  {events: ["work", "ice cream", "cauliflower",
           "lasagna", "touched tree", "brushed teeth"],
   squirrel: false},
  {events: ["weekend", "cycling", "break", "peanuts",
            "beer"],
   squirrel: true},
  /* and so on... */
];
~~~~

### Mutability

Object values kunnen aangepast worden. 

Strings, numbers en booleans zijn **immutable**— het is onmogelijk om de waarde van de types te veranderen. 

Van objects kunnen de properties verandert worden, waardoor één object value verschillende content heeft op verschillende tijden. 

Wanneer twee bindings hetzelfde object vastpakken zullen de waardes van deze twee objecten hetzelfde zijn. De twee bindings hebben dus dezelfde identiteit. Als de waardes tussen twee objecten hetzelfde zijn en doet een boolean of de objecten aan elkaar gelijk staan zal deze false geven, omdat het ene object niet het andere object is. Als de values met elkaar vergeleken worden zal de boolean true zijn.

~~~~javascript
let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

console.log(object1.value == object2.value);
// → true
console.log(object1.value == object3.value);
// → false

object1.value = 15;
console.log(object2.value);
// → 15
console.log(object3.value);
// → 10
~~~~

Bindings kunnen ook veranderen of constant zijn, maar dit staat los van de manier waarop hun waardes zich gedragen. Als de const binding wordt gebruikt kan de waarde van deze binding niet verandert worden behalve binnen een object of een array. 

~~~~javascript
const score = {visitors: 0, home: 0};
// This is okay
score.visitors = 1;
// This isn't allowed
score = {visitors: 1, home: 1};
//met een let binding mag dit wel
~~~~

Wanneer objecten vergeleken worden met `==` zal de identity vergeleken worden: het zal true geven alleen als de objects precies dezelfde value zijn. Als verschillende objecten met elkaar vergelijken worden zal false gegeven worden.

### The Lycanthrope’s Log

~~~~javascript
let journal = [];

function addEntry(events, squirrel) {
  journal.push({events, squirrel});
}
~~~~

Als een property niet gevolgd wordt door een value zullen de value en de property gelijk zijn aan elkaar. Dus in dit geval is de value van de property events ook events.

~~~~javascript
addEntry(["work", "touched tree", "pizza", "running",
          "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
          "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
          "beer"], true);
~~~~

Correlation is een meting van afhankelijkheid tussen twee statische variabelen. Een statistische variabele is niet hetzelfde als een programmeer variabele. In statistieken heb je normaal gesproken een aantal metingen en elke variabele wordt gemeten voor elke meting. De correlation tussen variabelen wordt expressed als een waarde dat tussen -1 en 1 zit. -1 0 en 1 betekenen:

* -1: De variabelen zijn perfect gerelateerd aan elkaar, maar zijn precies het omgekeerde.
* 0: De variabelen zijn niet gerelateerd aan elkaar, dus zero correlation.
* 1: De variabelen zijn perfect gerelateerd aan elkaar. 

### Computing Correlation

Arrays hebben een includes method die kijkt of een gegeven waarde bestaat binnen een array. 

### Array Loops

~~~~javascript
Een array loop:
for (let i = 0; i < JOURNAL.length; i++) {
  let entry = JOURNAL[i];
  // Do something with entry
}
~~~~

Er is een makkelijkere manier om deze loop te schrijven in modern JS:

~~~~javascript
for (let entry of JOURNAL) {
  console.log(`${entry.events.length} events.`);
}
~~~~

$ = een identifier in JS, wat betekent dat ze een object identificeren op dezelfde manier dat een naam dat doet.

Wanneer een for loop er zo uit ziet, met het keyword ‘of’ na een declaratie van een variabele, zal er geloopt worden over de elementen van de waarde die gegeven worden na ‘of’(‘of’ betekent in dit geval: van). 

### Further Arrayology

Met de array methods: shift en unshift kun je aan het begin van een array items toevoegen of verwijderen.

~~~~javascript
let todoList = [];
function remember(task) {
  todoList.push(task);
}
function getTask() {
  return todoList.shift();
}
function rememberUrgently(task) {
  todoList.unshift(task);
}
~~~~

* Als een task toegevoegd moet worden, kun je `remember(‘ietsDoen’);` aanroepen waardoor een taak wordt toegevoegd aan het einde van de array. 
* Als je een taak gaat uitvoeren kun je `getTask();` aanroepen waardoor de eerste taak uit de array wordt gehaald. 
* Als je een taak heb die bovenaan je todo-list moet staan kun je `rememberUrgently(ietsBelangrijksDoen);` uitvoeren die dan een taak toevoegt aan het begin van de takenlijst (array).

## H5: Higher-order Functions
## H6: The Secret Life of Objects
## H8: Bugs and Errors
## H9: Regular Expressions
## H10: Modules
## H11: Asynchronous Programming
