# JS-bootcamp

## Eloquent JavaScript aantekeningen

### Inhoudsopgave

1.  [Values, Types, and Operators](#h1-values-types-and-operators)
2.  [Program Structure](#h2-program-structure)
3.  [Functions](#h3-functions)
4.  [Data Structures: Objects and Arrays](#h4-data-structures-objects-and-arrays)
5.  [Higher-order Functions](#h5-higher-order-functions)
6.  [The Secret Life of Objects](#h6-the-secret-life-of-objects)
7.  [Bugs and Errors](#h8-bugs-and-errors)
8.  [Regular Expressions](#h9-regular-expressions)
9.  [Modules](#h10-modules)
10. [Asynchronous Programming](#h11-asynchronous-programming)

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

The main thing to do with numbers is arithmetic (+, -, =, \*, /, %). These symbols are called operators. You can do everything you can do with math.

% is the remainder operation: 314%100 = 14.

### Special numbers

Three special values in JS that are considered numbers but don’t behave like normal numbers. The first two are Infinity and -Infinity, which represent the positive and negative infinities. Don’t put too much trust in infinity-based computation. It will quickly lead to the next special number NaN.

NaN stands for “not a number”, although it is a value of the number type.

### Strings

A string is a value that is typed between quotes: ‘Hello World’.
A few characters are hard to get between quotes like: ‘’. When a \\ is typed inside a string the next character is considered special. ‘hi\\nhi will give:

```javascript
hi
hi
```

The + operator can be used on Strings to make multiple strings glue together. ‘i’ + ‘ like’ = i like.

The difference between single or double quotes is which type of quote you need to escape inside of them. Backtick-quoted strings (template literals) can do a few more tricks. They can embed other values.

```javascript
console.log('half of 100 is ${100 / 2}')
```

Zal dit weergeven in de console:

**half of 100 is 50.**

### Unary Operators

Not all operators are symbols. Some are written as words. For example typeof 4.5 will display the type of the variable, so: number.

### Boolean

Boolean has just two values: true and false.

### Comparison

3>2 = true.

```javascript
>= (greater than or equal to), <= (less than or equal to), == (equal to), and != (not equal to).
```

There is only one value that isn’t equal to its self and that is NaN.

### Logical operators

Logical operators are: and, or ,and not.

```javascript
&& = and. Its result is true only if both the values given to it are true.

|| = or. It produces true if either of the values given to it is true.

! = not. It flips the value given to it.
```

Another logical operator is ternary, operating on three values. This one is called the conditional operator. When it is true it will choose the middle value and if it is false the value on the right. So:

```javascript
true ? 1 : 2 = 1
false ? 1 : 2 = 2
```

### Empty values

There are two special values, written `null` and `undefined` that are used to denote the absence of a meaningful value. No meaningful value yields: undefined.

The difference in meaning between null and undefined is an accident of JavaScript’s design, and it doesn’t matter most of the time. Recommendation: treat them as interchangeable.

### Automatic Type Conversion

When an operator is applied to the wrong type of value, JS will quietly convert that value to the type it needs (forgiving language). This is called type coercion.

When you want to test if a value has a real value you can do that by using the `==` (or `!=`) operator.

If you do not want type conversion to happen, you can use two additional operators: `===`and `!==`.

### Short-Circuiting Of Logical Operators

The || operator for example will return the value to its left, when that can be converted to true, and will return the value on its right otherwise. So:

```javascript
null || “user” = user
“Agnes” || “user” = Agnes
```

The rules for converting strings and numbers to Boolean values state that 0, NaN, and the empty string (“”) count as false, and the rest is true.

&& works similarly but the other way around. When the value to its left is something that converts to false, it returns that value, and otherwise it returns the value on its right.

The conditional operator works in a similar way. Of the second and third values, only the one that is selected is evaluated.

## H2: Program Structure

### Expressions And Statements

A fragment of code that produces a value is called an expression. An expression between parenthesis also an expression. Expressions can contain other expressions. This allows us to build expressions that describe arbitrarily complex computations.

If an expression corresponds to a sentence fragment, a JS statement corresponds to a full sentence. The simplest kind of statement is an expression with a semicolon after it.

To catch and hold values, JS provides a thing called a **binding**, or **variable**:

```javascript
let caught = 5 * 5;
```

That’s a second kind of statement. The special word let indicates that this sentence is going to define a binding. It is followed by its name and if we want to give it a value by an `=` operator and an expression.

The previous statement creates a binding called caught and uses it to grab the number that is produced by multiplying 5 by 5.

After a binding has been defined, its name can be used as an expression.
A binding with a value is not stuck with that value, it can be changed.
If you ask for the value of an empty binding, you’ll get undefined.

A single `let` statement may define multiple bindings. The definitions must be separated by commas.

The words `var` and `const` can also be used to create bindings, in a way similar to `let`.

The word `const` stands for constant. It defines a constant binding which points at the same value for as long as it lives. This is useful for bindings that give a name to a value so that you can easily refer to it later.

### Binding Names

**Binding names** can be any word, It can also contain digits as long as the first character isn’t a digit. A binding name may include $ or \_ but no other punctuation or special characters.

Words with a special meaning such as let are keywords and the may **not** be used as binding names.

### Alle binding names:

```javascript
break; case; catch; class; const; continue; debugger; default;
delete; do; else; enum; export; extends; false; finally; for;
function; if; implements; import; interface; in; instanceof; let;
new; package; private; protected; public; return; static; super;
switch; this; throw; true; try; typeof; var; void; while; with; yield;
```

### The environment

De verzameling bindings en hun waarden die bestaan op een bepaalde tijd heet: **The Environment**.

### Functions

Een `function` is een stukje van een script dat is verpakt in een waarde. Deze waarden kunnen toegevoegd worden om het verpakte script uit te voeren.

Het uitvoeren van een function heet een **function call**:

```javascript
function myFunction(){…};`
```

De values binnen de haakjes van de functions zijn **parameters** en worden alleen binnen de functie gebruikt. Waarden die gegeven worden aan functions heten **arguments**.

De prompt function wordt vrijwel nooit gebruikt omdat je geen controle hebt over styling.

### Console.log function

```javascript
console.log();
```

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

```javascript
let yourName;
do {
  yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);
```

Dit voorbeeld forceert de gebruiker ervan om iets in te vullen door constant de vraag te herhalen tot de code input krijgt dat niet een lege string is. De ! operator zorgt ervoor dat een waarde naar een boolean wordt omgezet voordat de conditional gecontroleerd wordt en alle strings behalve “” zullen omgezet worden in true.

### Indenting Code

Spaces of tabs en enters kunnen gebruikt worden om de code leesbaarder te maken.

### For Loops

JS heeft ook `for` loops die korter geschreven zijn en vaak wat duidelijker in elkaar steken.

```javascript
for (let number = 0; number <= 12; number = number + 2) {
  console.log(number);
}
```

Tussen de haakjes van de for loop moeten er twee `;` zitten.

### Breakdown for loop

1.  Met for maak je een loop aan.
2.  Expression 1: (vaak) binding.  `var i = 0;`
3.  Expression 2: boolean die kijkt of de loop moet door blijven gaan. `i < x;`
4.  Expression 3: Update de state van de loop na elke iteratie.  `i++`

Dus:

```javascript
for (let i = 0; i < 3; i++)
```

### Breaking Out of a Loop

Wachten totdat de looping condition false wordt is niet de enige manier waarmee een loop gestopt kan worden. De statement `break;` kan ook de loop stoppen. Vaak wordt dit gedaan aan de hand van een `if` statement.

```javascript
for (let current = 20; ; current = current + 1) {
  if (current % 7 == 0) {
    console.log(current);
    break;
  }
}
```

Als de loop niet een conditional of `break` heeft wordt het een infinite loop. Hierdoor kan je computer crashen.

Het `continue` keyword is hetzelfde als break, op de manier dat het de progressie van de loop beïnvloed. Het verschil is dat met `continue` uit de loop wordt gebroken en verder wordt gegaan met de volgende iteratie. Dus:

```javascript
var text = "";

for (var i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  text = text + i;
}


console.log(text);
// expected output: "012456789"
```

### Updating Bindings Succinctly (kort en bondig)

Vooral tijdens het loopen, zal een programma vaak een binding moeten updaten om een waarde vast te houden gebaseerd op de vorige waarde van die binding.

**JS Shortcut:**

```javascript
counter += 1; || counter *= 1; || counter -= 1; || counter /= 1;
Of: counter++; || counter--
```

### Dispatching on a Value with Switch

Het is niet ongebruikelijk voor een code om er zo uit te zien:

```javascript
if (x == "value1") action1();
else if (x == "value2") action2();
else if (x == "value3") action3();
else defaultAction();`
```

Er is een keyword, `switch`, die ervoor bedoeld is om zo een expression er directer uit te laten zien.

Helaas ziet het er een beetje ongemakkelijk uit (komt van Java)— een reeks `if` statements kunnen er beter uit zien. Dit ziet er zo uit:

```javascript
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
```

Je kan zoveel `case` labels als je wilt binnen een **switch-block** zetten. Het programma zal beginnen met uitvoeren bij het label dat overeenkomt met de waarde die aan de `switch` gegeven is. De `case` zal uitgevoerd blijven worden, zelfs als andere labels erna worden aangeroepen, totdat het een `break` statement tegen komt.

### Capitalization

Binding names mogen geen spaties bevatten. Dit kan opgelost worden door camel casing te gebruiken:

```javascript
function myFunctionIsAwesome(){…}`
```

(elk woord met een hoofdletter behalve het eerste woord)

### Comments

Om code duidelijker te maken voor lezers (of jezelf) kun je comments plaatsen op een regel:

`//blablabla` (voor één regel)
**of**
`/**/` (voor meerdere regels).

## H3: Functions

Functions zijn er om:

-   Structuur te geven aan grotere scripts
-   Repetitie te verminderen
-   Namen te geven aan subscripts
-   Subscripts te scheiden van elkaar.

### Defining a function

Een **functie definitie** is een normale binding waarvan de waarde van de binding een functie is.
Dus:

```javascript
const square = function(x){…};
```

zorgt ervoor dat square refereert naar een functie.

Een functie wordt gemaakt met een **expression** dat begint met het keyword `function`. Functions kunnen parameters hebben en hebben altijd een **body** (hier staan statements in).

`return` statements bepalen de waardes die de function returnt. Wanneer deze statement gecontroleerd wordt wordt er onmiddellijk uit de huidige functie gesprongen en wordt de gereturnde waarde gegeven aan de code die de functie aanroept. Een `return` keyword zonder expression erna geeft de gereturnde waarde: undefined. Functies die geen return statement hebben, returnen ook `undefined`.

**Parameters** van een function gedragen zich als normale bindings, maar de oorspronkelijke waardes van de parameters worden meegegeven door de **caller** van de functie, niet binnen de code van de functie zelf. Dus:

```javascript
function myFunction(yolo){
    console.log(yolo);
}

myFunction('You Only Live Once')
```

### Bindings and scopes

Elke binding heeft een scope, wat een gedeelte van het script voorstelt waarin de binding zichtbaar is. Als bindings buiten een functie of blok staan, is de scope het hele script.

Local bindings zijn bindings die binnen een scope zitten (alleen bruikbaar binnen deze scope).
Elke scope kan buiten de scope eromheen kijken. De uitzondering is wanneer meerdere bindings dezelfde naam hebben. In dit geval kan de code alleen de binnenste lezen.

### Nested Scope

Scopes kunnen genest worden wat ervoor zorgt dat er niet alleen local en global bindings zijn. Blocks en functions kunnen gemaakt worden binnen andere blocks en functions wat verschillende gradaties van lokaliteit produceren.

### Functions as Values

Een function binding is simpelweg een naam voor een specifiek gedeelte van de code. Zo een binding wordt één keer gedefinieerd en kan nooit verandert worden. (verschil tussen de name van de function en de binding van de functie kan verwarrend zijn)

Een function value kan alles doen dat alle andere values kunnen doen— je kan het gebruiken in expressions, niet alleen een call uitvoeren. Een function value kan in een nieuwe binding worden opgeslagen, gebruiken als een argument van een function, enzovoorts. Een binding dat een vast houdt is nog steeds een normale binding en kan een nieuwe waarde krijgen:

```javascript
let launchMissiles = function() {
  missileSystem.launch("now");
};
if (safeMode) {
  launchMissiles = function() {/* do nothing */};
}
// De functie is leeg in safeMode.
```

### Declaration notation

Er is een kortere manier om een function binding te maken. Dit kan gedaan worden door:

```javascript
function square(x) {
  return x * x;
}
square();
```

Of:

```javascript
console.log("The future says:", future());

function future() {
  return "You'll never have flying cars";
}
```

Functie declaraties zijn niet onderdeel van het top-to-bottom flow of control. Ze worden conceptueel verplaatst naar het bovenste gedeelte van de scope.

### Arrow Functions

Er is een derde notatie voor functies, dit ziet er anders uit dan de anderen. Het gebruikt een (`=>`) anders dan greater than or equal to(`>=`).

```javascript
const power = (base, exponent) => {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};
```

De pijl komt na de parameters en **vóór** de function body.
Dus:

```javascript
(parameter1, parameter2) => {body}
```

Als er maar **één** parameter is kunnen de **()** weg die de parameters wrappen.
Als de body maar **één** expression heeft kunnen de {} en return ook weg.

```javascript
const square1 = (x) => { return x * x; };
const square2 = x => x * x;
// Doen hetzelfde
```

### The Call Stack

```javascript
function greet(who) {
  console.log("Hello " + who);
}
greet("Harry");
console.log("Bye");
```

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

```javascript
function square(x) { return x * x; }
console.log(square(4, true, "hedgehog"));
// → 16
```

JS negeert extra argumenten voor parameters en aan parameters zonder value wordt automatisch undefined toegekend.
Voordeel: De functie kan aangeroepen worden met meer parameters dan argumenten of omgekeerd zonder een foutmelding.
Nadeel: Parameters kunnen gemakkelijk vergeten worden zonder dat je het weet.

```javascript
function minus(a, b) {
  if (b === undefined) return -a;
  else return a - b;
}

console.log(minus(10));
// → -10
console.log(minus(10, 5));
// → 5
```

Als je een = operator na een parameter zet gevolgd door een expression, zal de waarde die gegeven is aan de parameter blijven bestaan bij de call als deze niet wordt aangeroepen. Als de parameter wordt aangeroepen dan wordt de waarde overschreven.

```javascript
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
```

### Closure

```javascript
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
```

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

```javascript
let list = [‘item 1’, ‘item 2’, ‘item 3’];
```

Als je een item als output in de console wilt kun je bijvoorbeeld doen:

```javascript
console.log(list[1]);
// item 1
```

De Array begint met tellen vanaf 0.

### Properties

Bijna alle JS values hebben een property. Wat voor property het is kan opgevraagd worden door:

**typeof:**

```javascript
typeof value;
```

Een **property** kan opgevraagd worden door:

**Binnen een array:**

```javascript
value[x];
```

**normale variabele:**

```javascript
value.x;
```

**Als je wilt weten hoeveel items een array heeft:**

```javascript
array.length;
```

### Methods

Methods zijn properties met functions. zoals:

**toUpperCase-method**

```javascript
var ik = ‘ik’;
ik.toUpperCase;
//IK
```

**push-method (item bij array voegen)**

```javascript
let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
// → [1, 2, 3, 4, 5]
```

**pop-method (laatst toegevoegde item verwijderen)**

```javascript
sequence.pop();
```

### Objects

Values van het type: **object**; zijn verzamelingen van properties. Een manier om een object te maken is:

```javascript
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
```

Binnen de accolades zit een lijst van properties die zijn gescheiden met komma’s. Elke property heeft een naam die gevolgd wordt door een : en een value. Properties waarvan de namen of nummers niet valide zijn moeten gequote worden:

```javascript
let descriptions = {
  work: "Went to work",
  "touched tree": "Touched a tree"
};
```

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

```javascript
console.log(Object.keys({x: 0, y: 0, z: 2}));
// → ["x", "y", “z"]
```

Je kan bijvoorbeeld ook de `Object.assign` function gebruiken die alle properties van één object naar de ander kopieert.

```javascript
let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA);
// → {a: 1, b: 3, c: 4}
```

Arrays, hierna, zijn een soort object gespecialiseerd voor het opslaan van reeksen van dingen.

Als binnen een object een array wordt gemaakt zal de typeof van dat array, object blijven.

```javascript
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
```

### Mutability

Object values kunnen aangepast worden.

Strings, numbers en booleans zijn **immutable**— het is onmogelijk om de waarde van de types te veranderen.

Van objects kunnen de properties verandert worden, waardoor één object value verschillende content heeft op verschillende tijden.

Wanneer twee bindings hetzelfde object vastpakken zullen de waardes van deze twee objecten hetzelfde zijn. De twee bindings hebben dus dezelfde identiteit. Als de waardes tussen twee objecten hetzelfde zijn en doet een boolean of de objecten aan elkaar gelijk staan zal deze false geven, omdat het ene object niet het andere object is. Als de values met elkaar vergeleken worden zal de boolean true zijn.

```javascript
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
```

Bindings kunnen ook veranderen of constant zijn, maar dit staat los van de manier waarop hun waardes zich gedragen. Als de const binding wordt gebruikt kan de waarde van deze binding niet verandert worden behalve binnen een object of een array.

```javascript
const score = {visitors: 0, home: 0};
// This is okay
score.visitors = 1;
// This isn't allowed
score = {visitors: 1, home: 1};
//met een let binding mag dit wel
```

Wanneer objecten vergeleken worden met `==` zal de identity vergeleken worden: het zal true geven alleen als de objects precies dezelfde value zijn. Als verschillende objecten met elkaar vergelijken worden zal false gegeven worden.

### The Lycanthrope’s Log

```javascript
let journal = [];

function addEntry(events, squirrel) {
  journal.push({events, squirrel});
}
```

Als een property niet gevolgd wordt door een value zullen de value en de property gelijk zijn aan elkaar. Dus in dit geval is de value van de property events ook events.

```javascript
addEntry(["work", "touched tree", "pizza", "running",
          "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
          "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
          "beer"], true);
```

Correlation is een meting van afhankelijkheid tussen twee statische variabelen. Een statistische variabele is niet hetzelfde als een programmeer variabele. In statistieken heb je normaal gesproken een aantal metingen en elke variabele wordt gemeten voor elke meting. De correlation tussen variabelen wordt expressed als een waarde dat tussen -1 en 1 zit. -1 0 en 1 betekenen:

-   \-1: De variabelen zijn perfect gerelateerd aan elkaar, maar zijn precies het omgekeerde.
-   0: De variabelen zijn niet gerelateerd aan elkaar, dus zero correlation.
-   1: De variabelen zijn perfect gerelateerd aan elkaar.

### Computing Correlation

Arrays hebben een includes method die kijkt of een gegeven waarde bestaat binnen een array.

### Array Loops

```javascript
Een array loop:
for (let i = 0; i < JOURNAL.length; i++) {
  let entry = JOURNAL[i];
  // Do something with entry
}
```

Er is een makkelijkere manier om deze loop te schrijven in modern JS:

```javascript
for (let entry of JOURNAL) {
  console.log(`${entry.events.length} events.`);
}
```

$ = een identifier in JS, wat betekent dat ze een object identificeren op dezelfde manier dat een naam dat doet.

Wanneer een for loop er zo uit ziet, met het keyword ‘of’ na een declaratie van een variabele, zal er geloopt worden over de elementen van de waarde die gegeven worden na ‘of’(‘of’ betekent in dit geval: van).

### Further Arrayology

Met de array methods: shift en unshift kun je aan het begin van een array items toevoegen of verwijderen.

```javascript
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
```

-   Als een task toegevoegd moet worden, kun je `remember(‘Iets doen’);` aanroepen waardoor een taak wordt toegevoegd aan het einde van de array.
-   Als je een taak gaat uitvoeren kun je `getTask();` aanroepen waardoor de eerste taak uit de array wordt gehaald.
-   Als je een taak heb die bovenaan je todo-list moet staan kun je `rememberUrgently('Iets belangrijks doen');` uitvoeren die dan een taak toevoegt aan het begin van de takenlijst (array).

Voor als je op zoek bent naar een specifieke waarde, hebben arrays de method `indexOf`. De methode zoekt dan door de hele array naar de eerste waarde die overeenkomt met de opgegeven waarde. Als je wilt dat er achterstevoren gezocht wordt, kun je de methode `lastIndexOf` gebruiken.

```javascript
console.log([1, 2, 3, 2, 1].indexOf(2));
// → 1 (Want de array telt vanaf 0 en de tweede item komt overeen met de opgegeven waarde)
console.log([1, 2, 3, 2, 1].lastIndexOf(2));
// → 3 (Want de array telt vanaf 0 en de vierde item komt overeen met de opgegeven waarde)
```

Beide indexOf en lastIndexOf kunnen een tweede argument meegegeven krijgen die bepaald waar de method moet beginnen met zoeken.

Een ander fundamentele array method is `slice`, dat begin en eind indexen neemt en een array returnt met **alleen** de elementen die tussen deze indexen zitten. De eerste index is **inclusief** in de return en de laatste is **exclusief**.

```javascript
console.log([0, 1, 2, 3, 4].slice(2, 4));
// → [2, 3]
console.log([0, 1, 2, 3, 4].slice(2));
// → [2, 3, 4]
```

Wanneer de eind index niet gegeven is, zal `slice` alle elementen na de start index nemen. Je kan ook helemaal geen index geven waardoor de hele array gekopieerd wordt.

De `concat` methode kan gebruikt worden om arrays aan elkaar te plakken, waardoor er een nieuwe array ontstaat (lijkt op + operator)

Het volgende voorbeeld laat beide concat en slice zien. Het neemt een array en een index en returnt een nieuwe array dat een kopie is van de originele array met de opgegeven index verwijdert.

```javascript
function remove(array, index) {
  return array.slice(0, index)
    .concat(array.slice(index + 1));
}
console.log(remove(["a", "b", "c", "d", "e"], 2));
// → ["a", "b", "d", "e"]
```

Als je concat een argument geeft dat geen array is, zal die waarde toegevoegd worden aan de nieuwe array alsof het een one-element array was.

### Strings and their Properties

Properties zoals `length` en `toUpperCase` worden gelezen als string values. Maar als er een nieuwe property aan toegevoegd wordt, blijft deze niet plakken.

```javascript
let kim = "Kim";
kim.age = 88;
console.log(kim.age);
// → undefined
```

**Dus**: Values van het type string, number en boolean zijn geen objects. De properties hiervan kunnen niet verandert worden. Wel hebben deze values methods. Een paar handige zijn `slice` en `indexOf`, die hetzelfde zijn en werken als bij arrays.

```javascript
console.log("coconuts".slice(4, 7));
// → nut
console.log("coconut".indexOf("u"));
// → 5
```

Een verschil met de method `indexOf` tussen string en array is dat de `indexOf` van een string kan zoeken naar een string die meer dan één character heeft, terwijl dezelfde method bij een array alleen kijkt naar één element.

```javascript
console.log("one two three".indexOf("ee"));
// → 11
```

De `trim` method verwijdert whitespace (spaties, nieuwe regels, tabs en nog meer gelijksoortige characters) van begin tot het einde van de string.

```javascript
console.log("  okay \n ".trim());
// → okay
```

De zeroPad function bestaat ook als method. Het heet padStart en neemt de gewenste length en padding character als arguments.

```javascript
console.log(String(6).padStart(3, "0"));
// → 006
```

Een string kan opgesplitst worden elke keer als een string gevonden wordt met `split` en kan bij elkaar gevoegd worden met `join`.

```javascript
let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words);
// → ["Secretarybirds", "specialize", "in", "stomping"]
console.log(words.join(". "));
// → Secretarybirds. specialize. in. stomping
```

Een string kan herhaald worden met de `repeat` method, die een nieuwe string aanmaakt met daarin meerdere kopieën van de originele string, achterelkaar geplakt.

```javascript
console.log("LA".repeat(3));
// → LALALA
```

De `length` property van strings kan zo getoond worden:

```javascript
let string = "abc";
console.log(string.length);
// → 3
console.log(string[1]);
// → b
```

### Rest Parameters

Math.max function berekent het maximum van alle argumenten die meegegeven worden. Om zo een functie te scrhijven zet je 3 ... vóór de laatste parameter.

```javascript
function max(...numbers) {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}
console.log(max(4, 1, 9, -2));
// → 9
```

Wanneer zo een functie wordt aangeroepen, zal de _rest parameter_ gebonden worden aan een array die alle opvolgende argumenten bevatten. Als er parameters voor staan, zijn de waardes van deze parameters niet  een onderdeel van de array. Als er alleen één parameter is, zal het alle argumenten vasthouden.

Je kan een soortgelijke _three-dot notation_ gebruiken om een functie aan te roepen met een array van argumenten.

```javascript
let numbers = [5, 1, 7];
console.log(max(...numbers));
// → 7
```

Dit spreidt de array uit de function call in, waardoor de elementen doorgegeven worden als gescheiden argumenten.

Square bracket array notatie zorgt er ook voor dat een _three dot operator_ een andere array spreid in de nieuwe array.

```javascript
let words = ["never", "fully"];
console.log(["will", ...words, "understand"]);
// → ["will", "never", "fully", "understand"]
```

### The Math Object

`Math` is een verzameling van een hoop nummer-gerelateerde utility functions. Math geeft een _namespace_ zodat al deze functions en values niet global bindings hoeven te zijn. Omdat JS deze namen al in gebruik heeft, hoef je als programmeur je minder zorgen te maken dat je ze gebruikt als binding names.

Math heeft vrijwel alles wat je met wiskunde geleerd hebt. Deze wiskundige dingen hoef je dus niet zelf te programmeren maar hoef je alleen aan te roepen. Hier onder wat voorbeelden:

`cos` (cosinus), `sin` (sinus) en `tan` (tangent). Of alle tegenovergestelde van deze 3: `acos`, `asin` en `atan`.

```javascript
function randomPointOnCircle(radius) {
  let angle = Math.random() * 2 * Math.PI;
  return {x: radius * Math.cos(angle),
          y: radius * Math.sin(angle)};
}
console.log(randomPointOnCircle(2));
// → {x: 0.3667, y: 1.966}
```

Math.random is een function die een nieuw random nummer genereert tussen 0 en 1.

```javascript
console.log(Math.random());
// → 0.36993729369714856
console.log(Math.random());
// → 0.727367032552138
console.log(Math.random());
// → 0.40180766698904335
```

Als je een heel getal wilt vanuit een `Math.random` kun je vóór `Math.random`, `Math.floor` (rond af naar beneden) zetten.

```javascript
console.log(Math.floor(Math.random() * 10));
// → 2
```

Andere `Math` functies zijn: `Math.ceil` (rond af naar boven), `Math.round` (rond af naar meest dichtsbijzijnde hele nummer) en `Math.abs` (neemt de absolute waarde van een nummer (negatieve nummers worden uitgesloten en positieve blijven staan).

### Destructuring

Als je bindings wilt hebben voor de **elementen** van de array kun je dit gebruiken:

```javascript
function phi([n00, n01, n10, n11]) {
  return (n11 * n00 - n10 * n01) /
    Math.sqrt((n10 + n11) * (n00 + n01) *
              (n01 + n11) * (n00 + n10));
}
```

Als je weet dat de waarde die je wilt binden een array is, kun je square brackets `[]` gebruiken om binnen de array te _kijken_ en de inhoud te binden. Dit heet destructureren.

Je kan hetzelfde doen met objects, maar in plaats van `[]` gebruik je `{}`.

```javascript
let {name} = {name: "Faraji", age: 23};
console.log(name);
// → Faraji
```

Het destructureren van een `null` of `undefined` geeft een error.

### JSON

Omdat properties alleen hun waarde vastgrijpen, in plaats van bevatten, worden objects en arrays opgeslagen in het geheugen van de computer, als reeksen van bits die de _addresses_ vasthouden -de plek in het geheugen- van de inhoud. Dus een zowel nested array als de _container array_ neemt een stukje geheugen in beslag met een nummer die aan geeft welke array in welke zit.

Als je data in een bestand wilt opslaan voor later of het naar een andere computer wilt sturen, moet je op een een of andere manier deze _adresses_ omzetten naar een beschrijving die verstuurd of opgeslagen kan worden.

De beste manier om dit te doen is om de data te _serializen_. Dit betekent dat dat de data omgezet wordt in een platte beschrijving. Een populaire serialization format is JSON (JavaScript Object Notation). Het wordt gebruikt als een data opslag en communicatie format op het Web.

JSON ziet er hetzelfde uit qua het schrijven van arrays en objects als JS, met een paar limitaties. Alle property namen moeten omringt zijn door double quotes en alleen simpele data expressions zijn toegestaan-geen function calls, bindings of iets dat berekeningen bevat. Comments zijn ook niet toegestaan.

Voorbeeld:

```javascript
{
  "squirrel": false,
  "events": ["work", "touched tree", "pizza", "running"]
}
```

JS geeft ons de functions `JSON.stringify` en `JSON.parse` om data om te zetten naar en vanaf deze format.

-   `JSON.stringify` pakt een JS value en returnt een JSON-encoded string.
-   `JSON.parse` pakt een string en zet het om naar de waarde dat het codeert.

## H5: Higher-order Functions

Een groot programma is vaak complex, wat programmeurs kan verwarr. Binnen een groot programma kan het lastig zijn om bugs te vinden.

Het is handig als de oplossing in een vocabulaire wordt uitgedrukt dat overeenkomt met het probleem dat wordt opgelost.

### Abstraction

Deze vocabulaires worden **abstractions** genoemd. Abstractions verbergen details en geven ons de mogelijkheid om over problemen te praten op een hoger niveau.

Als de vocabulaires duidelijk zijn voor de programmeur kan een code korter en makkelijker leesbaar zijn.

### Abstracting repetition

Als je leert om in EcmaScript te schrijven worden de codes korter en ook makkelijker leesbaar.

### Higher-order functions

Functies die draaien op andere functies, door deze functies op te nemen als argumenten of te returnen, worden **Higher-order Functions** genoemd.

Higher-order functions maken het mogelijk om te abstraheren over _actions_, niet alleen values. Je kan bijvoorbeeld functions maken die nieuwe functions maken:

```javascript
function greaterThan(n) {
  return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
// → true
```

Of functions die andere functions veranderen:

```javascript
function noisy(f) {
  return (...args) => {
    console.log("calling with", args);
    let result = f(...args);
    console.log("called with", args, ", returned", result);
    return result;
  };
}
noisy(Math.min)(3, 2, 1);
// → calling with [3, 2, 1]
// → called with [3, 2, 1] , returned 1
```

Zelfs functions die nieuwe types van control flows geven:

```javascript
function unless(test, then) {
  if (!test) then();
}

repeat(3, n => {
  unless(n % 2 == 1, () => {
    console.log(n, "is even");
  });
});
// → 0 is even
// → 2 is even
```

De array method `forEach`, die een for/of loop als een higher-order function geeft:

["A", "B"].forEach(l => console.log(l));
// → A
// → B

### Script Data Set

Higher-order functions zijn erg goed in data processing.

### Filtering Arrays

Je kan bijvoorbeeld een function schrijven die elementen in een array eruit filtert die niet door de opgegeven test heen komen.

```javascript
function filter(array, test) {
  let passed = [];
  for (let element of array) {
    if (test(element)) {
      passed.push(element);
    }
  }
  return passed;
}

console.log(filter(SCRIPTS, script => script.living));
// → [{name: "Adlam", …}, …]
```

In plaats van items uit de array te verwijderen, maakt de filter functie een nieuwe array aan met alleen de elementen erin die door de test heen komen.

`.filter` is een standaard array method.

```javascript
console.log(SCRIPTS.filter(s => s.direction == "ttb"));
// → [{name: "Mongolian", …}, …]
```

### Transforming With Map

Je kan met de method `.map` van een array een nieuwe array maken van de gereturnde values. De nieuwe array zal dezelfde lengte hebben als de input array, maar de inhoud van de array zal gemapt worden tot een nieuwe vorm door de method.

```javascript
function map(array, transform) {
  let mapped = [];
  for (let element of array) {
    mapped.push(transform(element));
  }
  return mapped;
}

let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");
console.log(map(rtlScripts, s => s.name));
// → ["Adlam", "Arabic", "Imperial Aramaic", …]
```

### Summarizing With Reduce

Wat ook vaak voorkomt is om een enkele waarde te berekenen van een array. De higher-order operation die dit doet heet `.reduce`. Het maakt een waarde door steeds een enkel element van de array te nemen en te combineren met de huidige waarde.

De parameters van `.reduce` zijn een combineer functie en een start waarde.

```javascript
function reduce(array, combine, start) {
  let current = start;
  for (let element of array) {
    current = combine(current, element);
  }
  return current;
}

console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));
// → 10
```

De method `.reduce` laat het toe om het start argument weg te laten als de array tenminste één element heeft.

```javascript
console.log([1, 2, 3, 4].reduce((a, b) => a + b));
// → 10
```

Een voorbeeld waarbij twee keer gereduced wordt:

```javascript
function characterCount(script) {
  return script.ranges.reduce((count, [from, to]) => {
    return count + (to - from);
  }, 0);
}

console.log(SCRIPTS.reduce((a, b) => {
  return characterCount(a) < characterCount(b) ? b : a;
}));
// → {name: "Han", …}
```

### Composability

Higher-order functions zijn handig wanneer je _operations_ moet **composen** omdat de leesbaarheid beter wordt.

Dit is beter leesbaar:

```javascript
function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}

console.log(Math.round(average(
  SCRIPTS.filter(s => s.living).map(s => s.year))));
// → 1188
console.log(Math.round(average(
  SCRIPTS.filter(s => !s.living).map(s => s.year))));
// → 188
```

Dit is moeilijker leesbaar:

```javascript
let total = 0, count = 0;
for (let script of SCRIPTS) {
  if (script.living) {
    total += script.year;
    count += 1;
  }
}
console.log(Math.round(total / count));
// → 1188
```

De readable approach kan soms minder snel zijn.

### Strings And Character Codes

De `some` method is een higher-order function die een test function pakt en je vertelt of die function true returnt voor elk van de elementen.

```javascript
function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}

console.log(characterScript(121));
// → {name: "Latin", …}
```

Een probleem met JS is dat sommige string characters is dat de lengte hiervan wordt gezien als twee characters (bijv. Emoji's). Een oplossing hiervoor is de codePointAt loop, die toch de characters weergeeft als code units.

```javascript
let roseDragon = "🌹🐉";
for (let char of roseDragon) {
  console.log(char);
}
// → 🌹
// → 🐉
```

### Recognizing Text

function countBy(items, groupName) {
  let counts = \[];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({name, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

console.log(countBy([1, 2, 3, 4, 5], n => n > 2));
// → [{name: false, count: 2}, {name: true, count: 3}]

De `.findIndex` methode in de code hierboven vindt de eerste waarde waarvan de gegeven functie true returnt.

## H6: The Secret Life of Objects

In de programmeer cultuur hebben we iets dat heet object-georiënteerd programmeren, een verzameling van technieken die objecten gebruiken als het hoofd principle van het organiseren van programmas.

### Encapsulation

Het kernidee van object-georiënteerd programmeren is om scripts te scheiden in kleinere onderdelen en elk verantwoordelijk te maken voor het managen van zijn eigen state. Dus een script die lokaal iets uitvoert.

Verschillende delen van zo'n programma kunnen interacteren met elkaar door middel van interfaces, gelimiteerde verzamelingen van functions of bindings die handige functionaliteiten verschaffen op een abstract niveau.

Zulke script onderdelen worden gemodelleerd aan de hand van objects. Hun interface bestaat uit een specifieke verzameling van methodes en properties. Properties dat onderdeel zijn van de interface worden _public_ genoemd. Alles dat buiten de interface valt wordt _private_ genoemd.

Veel talen verschaffen een manier om public en private properties te scheiden. JavaScript doet dit (nog) **niet**.

Echter wordt dit idee wel gebruikt voor JavaScript, meestal door de beschikbare interface te beschrijven in documentatie of comments. Het is ook gebruikelijk om een `_` te zetten bij het begin van de namen van properties, hierdoor laat je zien dat deze properties private zijn.

Het scheiden van interface en implementatie is een goed idee en wordt vaak **encapsulation** genoemd.

### Methods

Methods zijn properties die function values hebben. Voorbeeld van method:

```javascript
let rabbit = {};
rabbit.speak = function(line) {
  console.log(`The rabbit says '${line}'`);
};

rabbit.speak("I'm alive.");
// → The rabbit says 'I'm alive.'
```

Gebruikelijk doet een method iets met de object waarop het wordt aangeroepen. Om dit te doen kun je de binding `this` gebruiken.

Je kan `this` zien als een extra parameter die mee wordt gegeven op een andere manier. Je kan de `call` method van de function gebruiken die de value van `this` gebruikt als het eerste argument en alle andere arguments als normale parameters behandelt.

Sinds elke function zijn eigen `this` binding heeft, waarvan de waarde bepaald word door de manier waarop het wordt aangeroepen, kan je niet refereren naar de `this` van de wrapping scope binnen een normale function die gedefinieerd wordt met het `function` keyword.

Arrow functions binden niet hun eigen `this`, maar kunnen de `this` binding zien van de scope om hun heen.

```javascript
function normalize() {
  console.log(this.coords.map(n => n / this.length));
}
normalize.call({coords: [0, 2, 3], length: 5});
// → [0, 0.4, 0.6]
```

Zoals je hierboven kan zien dat de tweede `this` hetzelfde is als de eerste terwijl de tweede in een local function zit.

### Prototypes

De meeste objects hebben naast hun verzameling properties ook een **prototype**. Een **prototype** is een ander object dat gebruikt wordt als fallback bron van properties.

Wanneer een object wordt gevraagd om een property die het niet heeft, zal zijn prototype worden doorzocht en daarna het prototype van het prototype, enzovoorts.

Het prototype van een leeg object is Object.prototype.

`Object.getPrototypeOf` returnt het prototype van een object.

De prototype relaties van JS objecten vormen een _tree-shaped structure_ en aan de wortel van deze structuur zit Object.prototype. Het verschaft een aantal methodes die er zijn in alle objecten.

Niet alle objecten hebben `Object.prototype` maar hebben een ander object met andere standaard properties. Functions komen van Function.prototype en arrays komen van Array.prototype.

Prototype objecten hebben vaak Object.prototype zodat ze gelijk ook methods erbij krijgen.

Object.create maakt een object met een specifiek prototype.

```javascript
let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
};
let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEE!");
// → The killer rabbit says 'SKREEEE!'
```

Een property zoals `speak(line)` in een object expression is een korte manier om een method te definen.

In het voorbeeld hierboven is protoRabbit de container voor de properties die gedeeld worden met alle konijnen. Voor de rest wordt er een nieuw object aangemaakt voor een individueel soort konijn.

### Classes

Het prototype systeem van JS lijkt op **classes** van object-georiënteerd programmeren. Een class definieert de vorm en het type van een object-wat voor methods en properties het heeft. Zo'n object wordt een **instance** van de class genoemd.

Prototypes zijn handig om properties te definiëren die gelden voor alle instances van een class, zoals methods. Properties die verschillen per instance moeten direct in de objects zelf gezet worden.

Om een instance van een class te maken, moet je een object maken die komt van het juiste prototype, maar ook moet je ervoor zorgen dat het prototype de juiste properties heeft die binnen deze class horen. Dit is wat een **constructor** functie doet.

```javascript
function makeRabbit(type) {
  let rabbit = Object.create(protoRabbit);
  rabbit.type = type;
  return rabbit;
}
```

JS verschaft een manier om een constructor function gemakkelijker te schrijven door middel van het keyword new vóór een function call te zetten. Dat betekent ook dat een object met het juiste prototype automatisch gemaakt wordt, die gebonden is aan de `this` binnen de function en gereturned aan het einde van de function.

Je kan het prototype object die gebruikt wordt tijdens het constructen van objects vinden door het prototype `property` te pakken van de constructor function.

Constructors (alle functions eigenlijk) krijgen automatisch de property `prototype`, wat een leeg object is, van Object.prototype.

De eerste letters van de namen van constructors worden met hoofdletters aangegeven. (convention)

Het verschil tussen hoe een prototype is geassocieerd met een constructor en de manier waarop objects prototypes hebben is dat constructors het prototype Function.prototype hebben, terwijl de `prototype` property daarvan de prototype vasthoudt door instances die hierdoor gemaakt worden.

### Class Notation

Zo schrijf je een `class`.

```javascript
class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}

let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");
```

Het `class` keyword start een class declaratie, die de mogelijk geeft om een constructor en een verzameling methodes te definiëren op één plek. Er kunnen zoveel methodes als je wilt in geschreven worden. De `constructor` wordt speciaal behandeld, omdat het de constructor function verschaft die aan de class gebonden wordt. Alle andere worden gegroepeerd in het prototype van de constructor.

Class declaraties laten het alleen toe om methods toe te voegen aan het prototype. Er kunnen extra properties toegevoegd worden aan het prototype na de class declaratie.

Net zoals `function`, kan `class` gebruikt worden beide in statements en expressions. Als expression zal het geen binding definiëren, maar zal het een constructor als waarde produceren. De class **naam** kan weggelaten worden bij een class expression.

### Overriding Derived Properties

Wanneer een property toegevoegd wordt aan een object, wordt de property toegevoegd aan het object zelf. Als een prototype dezelfde property al had zal de property overschreven worden en de property van het prototype zal niet meer werken.

```javascript
Rabbit.prototype.teeth = "small";
console.log(killerRabbit.teeth);
// → small
killerRabbit.teeth = "long, sharp, and bloody";
console.log(killerRabbit.teeth);
// → long, sharp, and bloody
console.log(blackRabbit.teeth);
// → small
console.log(Rabbit.prototype.teeth);
// → small
```

Het overschrijven van properties wordt ook wel gebruikt om de standaard function en array prototypes een andere `toString` method te geven dan het basis object prototype.

```javascript
console.log(Array.prototype.toString ==
            Object.prototype.toString);
// → false
console.log([1, 2].toString());
// → 1,2
```

### Maps

Een **map** is een data structuur dat waardes (de sleutels) associeert met andere waardes. Dit kun je doen met objects.

```javascript
let ages = {
  Boris: 39,
  Liang: 22,
  Júlia: 62
};

console.log(`Júlia is ${ages["Júlia"]}`);
// → Júlia is 62
console.log("Is Jack's age known?", "Jack" in ages);
// → Is Jack's age known? false
console.log("Is toString's age known?", "toString" in ages);
// → Is toString's age known? true
```

In dit voorbeeld zijn de namen van de properties van de objects de namen van mensen en de property waardes zijn hun leeftijd. Omdat toString wel bestaat binnen Object.prototype geeft het true.

Normale objects als mappen moet je nooit doen. Je kan bijvoorbeeld `Object.create(null);` doen zodat deze object geen prototype heeft.

Object property namen moeten strings zijn. Als dit niet mogelijk is kan je een object niet gebruiken als map.

Javascript heeft gelukkig de class genaamd `Map` dat is geschreven voor dit doel. Het slaat een mapping op en laat elk soort type sleutels toe.

```javascript
let ages = new Map();
ages.set("Boris", 39);
ages.set("Liang", 22);
ages.set("Júlia", 62);

console.log(`Júlia is ${ages.get("Júlia")}`);
// → Júlia is 62
console.log("Is Jack's age known?", ages.has("Jack"));
// → Is Jack's age known? false
console.log(ages.has("toString"));
// → false
```

De methods `set`, `get` en `has` zijn onder deel van de interface van het `Map` object.

Als je toch een normaal object nodig hebt die zich moet gedragen als map, is het handig om te weten dat Object.keys alleen een object's eigen sleutels returnt, niet degene in het prototype. Als alternatief van de `in` operator, kun je hasOwnProperty method gebruiken, die het prototype van het object negeert.

```javascript
console.log({x: 1}.hasOwnProperty("x"));
// → true
console.log({x: 1}.hasOwnProperty("toString"));
// → false
```

### Polymorphisme

Wanneer een stuk code geschreven wordt om te werken met objecten die een bepaalde interface hebben, kan elk soort object dat toevallig deze interface support in de code gezet worden.

Dit heet **polymorphism**. Polymorphic code kan werken met waardes van verschillende vormen, zolang als deze de interface support die het verwacht.

Een `for/of` loop kan loopen over verschillende data structuren wat ook een polymorphisme is.

### Symbols

Property names hoeven niet altijd strings te zijn, ze kunnen ook **symbols** zijn. Symbols zijn waardes die gemaakt zijn met de `Symbol` function. Symbols zijn uniek en hetzelfde symbol kan niet opnieuw gemaakt worden.

De string die je geeft aan een `Symbol` zit erbij inbegrepen als het verandert naar een string, maar het heeft geen verdere betekenis. Meerdere symbols mogen dezelfde naam hebben.

Sinds symbols uniek en bruikbaar zijn als property namen zorgt ervoor dat ze handig zijn voor het definiëren van interfaces.

```javascript
const toStringSymbol = Symbol("toString");
Array.prototype[toStringSymbol] = function() {
  return `${this.length} cm of blue yarn`;
};

console.log([1, 2].toString());
// → 1,2
console.log([1, 2][toStringSymbol]());
// → 2 cm of blue yarn
```

Het is mogelijk om `Symbol` properties te zetten in object expressions en classes door square brackets om de property naam heen te zetten. Hierdoor wordt de property name geëvalueerd.

```javascript
let stringObject = {
  [toStringSymbol]() { return "a jute rope"; }
};
console.log(stringObject[toStringSymbol]());
// → a jute rope
```

### The iterator Interface

Het object dat gegeven wordt aan een `for/of` loop is _iterable_, wat betekent dat het een method heeft die `Symbol.iterator` heeft.

Wanneer deze wordt aangeroepen zal deze methode een object returnen dat een tweede interface verschaft, _iterator_.

`next`, `value` en `done` property namen zijn normale strings, geen symbols. Alleen `Symbol.iterator` is een symbol.

```javascript
let okIterator = "OK"[Symbol.iterator]();
console.log(okIterator.next());
// → {value: "O", done: false}
console.log(okIterator.next());
// → {value: "K", done: false}
console.log(okIterator.next());
// → {value: undefined, done: true}
```

### Getters, Setters, and Statics

Interfaces bestaan vooral uit methods, maar er kunnen ook properties die geen function values hebben in gezet worden.

Het is niet nodig voor een object om een property te berekenen en op te slaan in de instance. Properties die direct gebruikt worden kunnen een _method call_ verbergen. Zulke methods heten **getters** en worden zo geschreven: `get`. Deze `get` zet je voor de **method naam** in een object expression.

```javascript
let varyingSize = {
  get size() {
    return Math.floor(Math.random() * 100);
  }
};

console.log(varyingSize.size);
// → 73
console.log(varyingSize.size);
// → 49
```

Wanneer iemand van deze `size` property leest, zal de method die erbij hoort aangeroepen worden. Je kan hetzelfde doen als een property geschreven wordt met een setter.

Met een setter kun je ook de waarde aanpassen wat ook gelijk de waarde is van zijn eigen property.

```javascript
class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }
  get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }
  set fahrenheit(value) {
    this.celsius = (value - 32) / 1.8;
  }

  static fromFahrenheit(value) {
    return new Temperature((value - 32) / 1.8);
  }
}

let temp = new Temperature(22);
console.log(temp.fahrenheit);
// → 71.6
temp.fahrenheit = 86;
console.log(temp.celsius);
// → 30
```

Binnen een class declaratie worden methods die `static` voor hun naam hebben staan opgeslagen op de constructor.

### Inheritance

JS's prototype systeem maakt het mogelijk om een `new class` te maken, wat lijkt op de oude class, maar met nieuwe definities voor sommige van zijn properties.

Dit heet _inheritance_.

```javascript
class SymmetricMatrix extends Matrix {
  constructor(size, element = (x, y) => undefined) {
    super(size, size, (x, y) => {
      if (x < y) return element(y, x);
      else return element(x, y);
    });
  }

  set(x, y, value) {
    super.set(x, y, value);
    if (x != y) {
      super.set(y, x, value);
    }
  }
}

let matrix = new SymmetricMatrix(5, (x, y) => `${x},${y}`);
console.log(matrix.get(2, 3));
// → 3,2
```

Door het woord `extends` te gebruiken zorg je ervoor dat deze `class` niet direct gebasseerd moet worden op de standaard `Object` maar op een ander soort class. Dit heet de **superclass**. De class die ervan wordt afgeleid heet de \*_subclass_.

Om een `SymmetricMatrix` instance te starten, roept de constructor zijn superclass constructor aan door het `super` keyword.

Binnen class methods geeft `super` een manier om methodes aan te roepen die gedefinieerd zijn in de superclass.

Inheritance geeft dus een manier om licht verschillende data types te bouwen van bestaande data types.

Probeer altijd eerst iets op te lossen zonder het inheritance concept.

### The Instance Operator

Het is soms handig om te weten of een object komt van een specifieke class, wat je kan doen met de operator `instanceof`.

## H8: Bugs and Errors

### Language

Omdat JS als taal niet streng is kan het soms moeilijk zijn om bugs te vinden.

Alleen als de JS grammatica van het script niet klopt gaat de computer zeuren, maar anders vaak niet.

Het zoeken van fouten in de coden heet **debugging**.

### Strict Mode

JS kan strenger gemaakt worden door **strict mode** aan te zetten. Dit kan gedaan worden door bovenaan het bestand of een function body `"use strict";` te zetten.

Wat strict mode doet:

-   Binding name zonder binding (bijv: `let`) geeft een foutmelding. Als de binding al bestaat als global binding zal deze global binding overschreven worden.
-   Als een method of constructor incorrect aangeroepen wordt wordt er een foutmelding gegeven.
-   Het laat het niet toe dat functions meerdere parameters met dezelfde namen heeft en verwijdert sommige problematische taal in zijn geheel.

Dus is strict mode erg handig!

### Types

Door type conversion is het soms lastig om te weten wat JS doet met een bepaalde binding. JS probeert namelijk om bepaalde type waardes om te zetten naar wat de taal verwacht wat het type is (type conversion) waardoor je errors kan krijgen.

Om sommige fouten te voorkomen is het handig als je uitschrijft welke binding welk type zou moeten zijn en wat het programma in zijn geheel moet doen. Dit kan je doen in je code met **comments**. Bijvoorbeeld zo:

```javascript
// (VillageState, Array) → {direction: string, memory: Array}
function goalOrientedRobot(state, memory) {
  // ...
}
```

### Testing

Het is handig om test programma's te schrijven om te kijken of individuele code de gewenste taak volbrengt. Een voorbeeld van een methode die getest wordt:

```javascript
function test(label, body) {
  if (!body()) console.log(`Failed: ${label}`);
}

test("convert Latin text to uppercase", () => {
  return "hello".toUpperCase() == "HELLO";
});
test("convert Greek text to uppercase", () => {
  return "Χαίρετε".toUpperCase() == "ΧΑΊΡΕΤΕ";
});
test("don't convert case-less characters", () => {
  return "مرحبا".toUpperCase() == "مرحبا";
});
```

Er is software die helpt bij het bouwen en testen van code, deze heten **test runners**.

### Debugging

Je kan proberen om met `console.log()` elke binding of function te testen en bij de console kijken of het wel doet wat het moet doen.

Je kan ook als je `console.log()` gebruikt kijken bij de debugger van de browser. Je kan in de browser **breakpoints** instellen, die de code stoppen op de regel van de breakpoint, waarna je de waarde van bindings op dat moment kan inspecteren.

Je kan ook in je code breakpoints instellen met een `debugger` statement in je code.

### Error Propagation

Als een programma gebruikt gaat worden door andere mensen, kan het soms input krijgen die het niet kan verwerken, waardoor de code crasht.

Soms is het dan handig om de code door te laten draaien en de input te negeren. In andere gevallen is het beter als je de gebruiker laat weten wat er mis is gegaan en de code daarna te laten stoppen met draaien. De code moet echter wel altijd wat doen met het probleem.

Soms is het niet handig om een 'special value' te returnen aan de gebruiker als hij wat fout doet. Als de function bijvoorbeeld al elke soort value kan returnen, wat dan? Je kan bijvoorbeeld het resultaat in een object wrappen die dan kan weergeven of iets succesvol is of niet.

### Exceptions

Wanneer er een fout optreed wil je het liefst dat de code gelijk de fout oplost. Dit heet **exception handling**.

Exceptions zijn een mechanisme dat het mogelijk maakt voor code om een uitzondering uit te voeren. Een exception maken kan soms lijken op een super return van een function: de code springt uit de huidige function en zijn callers, helemaal terug naar de eerste call die de huidige execution start. Dit heet **unwinding the stack**. Een exception gaat weg uit de stack en gooit alle call contexten weg die het tegenkomt.

Je hoeft niet meteen bij een fout gelijk uit de hele code te springen. Je kan ook 'obstakels' plaatsen waar de code dan naar toe moet springen.

Bijvoorbeeld zo:

```javascript
function promptDirection(question) {
  let result = prompt(question);
  if (result.toLowerCase() == "left") return "L";
  if (result.toLowerCase() == "right") return "R";
  throw new Error("Invalid direction: " + result);
}

function look() {
  if (promptDirection("Which way?") == "L") {
    return "a house";
  } else {
    return "two angry bears";
  }
}

try {
  console.log("You see", look());
} catch (error) {
  console.log("Something went wrong: " + error);
}
```

Het keyword `throw` wordt gebruikt om een exception aan te maken. Een obstakel kan gemaakt worden met het keyword `try` gevolgd door `catch` (lijkt op `if/else`). Wanneer de `try` een exception aanmaakt, zal de `catch` geëvalueerd worden, met de naam tussen haakjes die gebonden is aan de exception value. Nadat `catch` klaar is of `try` het doet zonder problemen, zal het programma onder de `try/catch` statement verder gaan met uitvoeren.

Een `Error` constructor is een standaard JS constructor dat een object aanmaakt met een `message` property. Instances van deze constructor verzamelen ook informatie over de call stack die bestaat als de exception gemaakt wordt, deze heet **stack trace**. Deze informatie wordt opgeslagen in de `stack` property en vertelt ons de function waar het probleem zich heeft voorgedaan en welke functions de failing call hebben gemaakt.

Het grote voordeel van exceptions is dat de error-handling code alleen nodig is bij het punt waar de fout zich bevindt. De functions ertussen kunnen dit vergeten.

### Cleaning Up After Exceptions

Het kan zo zijn dat een code met exceptions sommige stappen skipt die noodzakelijk zijn bij het proces.

Hieronder een bank code die eerst geld verplaatst maar bij een uitzondering het proces stopt waardoor het geld niet doorgestuurd wordt naar een andere gebruiker en het geld dus verdwijnt.

```javascript
const accounts = {
  a: 100,
  b: 0,
  c: 20
};

function getAccount() {
  let accountName = prompt("Enter an account name");
  if (!accounts.hasOwnProperty(accountName)) {
    throw new Error(`No such account: ${accountName}`);
  }
  return accountName;
}

function transfer(from, amount) {
  if (accounts[from] < amount) return;
  accounts[from] -= amount;
  accounts[getAccount()] += amount;
}
```

Het is handig om code te schrijven met zo min mogelijk _side effects_. Dus een programmeer stijl die nieuwe values berekent in plaats van bestaande data te veranderen.

`try` blocks hebben ook nog de feature `finally` die gecombineerd kan worden (hoeft niet) met een `catch` block. Een `finally` block betekent: "run this block after trying to run the `try` block". Bijvoorbeeld:

```javascript
function transfer(from, amount) {
  if (accounts[from] < amount) return;
  let progress = 0;
  try {
    accounts[from] -= amount;
    progress = 1;
    accounts[getAccount()] += amount;
    progress = 2;
  } finally {
    if (progress == 1) {
      accounts[from] += amount;
    }
  }
}
```

Deze function kijkt naar zijn eigen proces en als het merkt dat het ergens stopt waar het een inconsistente state heeft, repareert het de schade die het heeft gedaan.

Zelfs als de `finally` code draait als een exception gegooid wordt in de `try` block, bemoeit het zich niet met de exception.

### Selective Catching

Wanneer een exception helemaal tot de laagste stack komt zonder gevangen te worden, wordt het behandeld door de omgeving. In browsers worden errors naar de console gestuurd. In Node.js wordt het hele proces gestopt wanneer een onbehandelde exception zich voordoet.

Als je aan het programmeren bent is het het handigst om de error door te laten gaan zodat je deze kan analyseren en verbeteren.

Om niks te doen met problemen die verwacht worden dat ze gebeuren is een slechte strategie.

Ongeldig gebruik van de taal zal ook resulteren in exceptions die opkomen. Zulke exceptions kunnen ook gevangen worden.

Wanneer een `catch` body gebruikt wordt, weet je dat er iets in de `try` body een exception heeft laten voordoen. Maar je weet niet waarom en welke code dit heeft laten doen.

JS geeft geen directe ondersteuning voor het selectief afvangen van exceptions: of je vangt ze allemaal of geen één. Je kan er snel vanuit gaan dat de exception die je krijgt degene is die je wilde krijgen uit je `catch` block.

Dit hoeft niet altijd het geval te zijn, want het kan zo zijn dat je een bug in je code heb zitten die een exception laat voordoen. Voorbeeld:

```javascript
for (;;) {
  try {
    let dir = promtDirection("Where?"); // ← typo!
    console.log("You chose ", dir);
    break;
  } catch (e) {
    console.log("Not a valid direction. Try again.");
  }
}
```

De `for (;;)` construct is een manier om bedoeld een loop te maken die niet stopt van zichzelf. In dit voorbeeld zit een spelfout die hierdoor een oneindige loop produceert met een error message die niet duidelijk de fout aanduid.

Als een algemene regel, doe geen onnodige `catch` exceptions tenzij het gebruikt wordt om iemand ergens anders naar toe te sturen.

Je kan nieuwe classes aanmaken die dan een bepaalde soort exceptions afvangen. Hierdoor kan de code doorlopen terwijl alleen specifieke exceptions afgevangen worden. Hierdoor kun je ook codes en errors beter scheiden van elkaar en wordt de code duidelijker.

### Assertions

**Assertions** zijn controles binnen een programma die bevestigen dat iets is wat het zou moeten zijn. Ze worden gebruikt om fouten van de programmeur te vinden.

Het voordeel van assertions is dat er een duidelijke foutmelding wordt weergeven.

## H9: Regular Expressions

**Regular expressions** zijn een manier om patterns te beschrijven in string data.

### Creating a Regular Expression

Een regular expression is een type van een object. Het kan geconstruct worden met de `RegExp` constructor of als een waarde geschreven worden door een enclosing pattern in forward slash (/) characters.

```javascript
let re1 = new RegExp("abc");
let re2 = /abc/;
```

Deze twee hebben hetzelfde patroon.

Backslashes worden anders behandeld. Sommige characters  kunnen alleen toegevoegd worden met een backslash

```javascript
let eighteenPlus = /eighteen\+/;
```

### Testing for Matches

Regular expressions hebben veel methods, waarvan de simpelste `test` is.

```javascript
console.log(/abc/.test("abcde"));
// → true
console.log(/abc/.test("abxde"));
// → false
```

### Sets of Characters

Je kan ook nummers testen:

```javascript
console.log(/[0123456789]/.test("in 1992"));
// → true
console.log(/[0-9]/.test("in 1992"));
// → true
```

Een aantal character groups hebben hun eigen shortcuts:

* `\d` Cijfer 0-9
* `\w` Letters
* `\s` Whitespace
* `\D` Geen cijfer
* `\W` Geen letter
* `\S` Geen whitespace
* `.` Elke character behalve newline

Date en time format kan zo getest worden:

```javascript
let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("01-30-2003 15:20"));
// → true
console.log(dateTime.test("30-jan-2003 15:20"));
// → false
```

Deze backslash codes kunnenn ook gebruikt worden in []. [\d.] betekent een getal of . character. Binnen square brackets verliezen operators hun betekenis.

Als je een set van characters wilt **inverten** (Allesbehalve de characters in de set matchen) kun je een dakje (^) gebruiken na de opening [].

### Repeating Parts of a Pattern

Als je een pattern meerdere keren wilt testen moet je een + zetten achter een regular expression, dus `/\d+/` matcht 1 of meer characters.

```javascript
console.log(/'\d+'/.test("'123'"));
// → true
console.log(/'\d+'/.test("''"));
// → false
console.log(/'\d*'/.test("'123'"));
// → true
console.log(/'\d*'/.test("''"));
// → true
```

De ster (`*`) doet hetzelfde, alleen zorgt het ervoor dat het ook mogelijk is om 0 keer te matchen.

Een ? maakt een gedeelte van een pattern **optioneel**, Waardoor het 0 of 1 keer kan voorkomen.

```javascript
let neighbor = /neighbou?r/;
console.log(neighbor.test("neighbour"));
// → true
console.log(neighbor.test("neighbor"));
// → true
```

Als je wilt dat een pattern precies een aantal keer voorkomt kun je {} gebruiken. {4} = 4x, {2,4} 2 tot 4 keer.

```javascript
let dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dateTime.test("1-30-2003 8:45"));
// → true
```

Als laatste kan je ook {4,} doen wat betekent: 4 of meer.

### Grouping Subexpressions

Als je een operator op meerdere elementen wilt gebruiken moet je haakjes gebruiken.

```javascript
let cartoonCrying = /boo+(hoo+)+/i;
console.log(cartoonCrying.test("Boohoooohoohooo"));
// → true
```

De `i` aan het einde van de expression maakt het case insensitive.

### Matches and Groups

De `exec` (execute) method zal null returnen als er niks gevonden wordt en returnt een object met informatie van de match als het wel iets vindt.

```javascript
let match = /\d+/.exec("one two 100");
console.log(match);
// → ["100"]
console.log(match.index);
// → 8
```

Dus: Eerste twee zijn geen cijfers, laatste wel dus hij returnt 100.

Een object die gereturnt wordt vanuit `exec` heeft ook een method, index, waarmee wordt aangegeven op welk punt de string begint.

String waardes hebben een `match` method die hetzelfde doet:

```javascript
console.log("one two 100".match(/\d+/));
// → ["100"]
```

Wanneer de regular expression subexpressions bevat (gegroepeerd door haakjes), de text die deze groepen matcht zal ook getoond worden in de array.

```javascript
let quotedText = /'([^']*)'/;
console.log(quotedText.exec("she said 'hello'"));
// → ["'hello'", "hello"]
```

Als een groep niet gematcht wordt, zal de array undefined geven:

```javascript
console.log(/bad(ly)?/.exec("bad"));
// → ["bad", undefined]
console.log(/(\d)+/.exec("123"));
// → ["123", "3"]
```

Ook als de groep meerdere keren gematcht wordt zal alleen de laatste match in de array getoond worden.

Groepen kunnen handig zijn voor het extracten van delen van een string.

### The Date Class

JS heeft een standaard class voor het representeren van datums of "points in time". Het heet `Date`. Als je een date object maakt met `new` krijg je de huidige dag en tijd:

```javascript
console.log(new Date());
// → Mon Nov 13 2017 16:19:11 GMT+0100 (CET)
```

Je kan ook een object maken voor een specifieke tijd:

```javascript
console.log(new Date(2009, 11, 9));
// → Wed Dec 09 2009 00:00:00 GMT+0100 (CET)
console.log(new Date(2009, 11, 9, 12, 59, 59, 999));
// → Wed Dec 09 2009 12:59:59 GMT+0100 (CET)
```

JS gebruikt een convention waarbij maandnummers beginnen met 0 en dagnummers met 1.

De laatste 4 argumenten zijn optioneel.

Timestamps worden opgeslagen als het ummer milliseconden sinds het begin van 1970, in de UTC tijdzone. Je kan negatieve nummers gebruiken voor vóór 1970:

```javascript
console.log(new Date(2013, 11, 19).getTime());
// → 1387407600000
console.log(new Date(1387407600000));
// → Thu Dec 19 2013 00:00:00 GMT+0100 (CET)
```

Als je de `Date` constructor een enkele argument geeft, zal deze argument behandeld worden als een milliseconde. Je kan de huidige millisecond count door een nieuw `Date` object te maken en `getTime` erop te gebruiken of door de `Date.now` function te doen.

Date objects hebben ook methods zoals `getFullYear`, `getMonth`, `getDate`, `getHours`, `getMinutes` en `getSeconds` om hun componenten te extracten.

Door haakjes om de delen van de expression te zetten waar we geïnteresseerd zijn, kunnen we een date object maken van een string.

```javascript
function getDate(string) {
  let [_, month, day, year] =
    /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
  return new Date(year, month - 1, day);
}
console.log(getDate("1-30-2003"));
// → Thu Jan 30 2003 00:00:00 GMT+0100 (CET)
```

De _ (underscore) binding wordt genegeerd en wordt alleen gebruikt om het volledige match element over te slaan in de array die gereturnt wordt door `exec`.

### Word and String Boundaries

Als je wilt dat de match de hele string pakt, kunnen we markers ^ en $ gebruiken. Het dakje matcht de start van de input string en de $ het einde. Dus `/^\d+$/` matcht een string die bestaat uit één of meer getallen.

Als we ervoor willen zorgen dat de datum begint en eindigt met een word boundary, kan de marker `\b` gebruikt worden.

```javascript
console.log(/cat/.test("concatenate"));
// → true
console.log(/\bcat\b/.test("concatenate"));
// → false
```

De boundary marker matcht niet een echte character.

### Choice Patterns

De pipe character (`|`) geeft een keuze aan tussen de pattern links ervan en rechts. Dus: | = of. Haakjes kunnen gebruikt worden om het werkbare deel van de operator aan te geven in de pattern

```javascript
let animalCount = /\b\d+ (pig|cow|chicken)s?\b/;
console.log(animalCount.test("15 pigs"));
// → true
console.log(animalCount.test("15 pigchickens"));
// → false
```

### The Mechanics of Matching

Conceptueel gezien, wanneer `exec` of `test` gebruikt wordt, zal de regular expression engine zoeken voor een match in jouw string, door de expression als eerst te testen vanaf het begin van de string, daarna vanaf de tweede cahracter, totdat het een match vind of het het einde bereikt van de string. Het zal of, de eerste gevonden match returnen, of falen om uberhaupt een match te vinden.

Om het daadwerkelijke matchen te doen, behandeld de engine een regular expression zoals het dat zou doen bij een flow diagram.

De expression matcht als het een pad kan vinden vanaf de linkerzijde van de diagram tot aan de rechterzijde. We houden een huidige positie in de string, en elke keer als we bewegen door een box, wordt er gekeken of dat deel van de string na de huidige positie de box matcht.

Dus als we `"the 3 pigs"` proberen te matchen vanaf position 4, zal onze progress door de flow chart er zo uit zien.

![flow-chart plaatje](re_pigchickens.svg)

* Bij position 4, is een word boundary, dus kunnen we voorbij de eerste box.

* Nog steeds bij positie 4, vinden we een getal, dus kunnen we ook voorbij het tweede blok. En omdat een getal gematcht is kunnen we naar positie 5.

* Er wordt bij positie 5 gekeken of er nog een digit is, of dat er iets anders is. Er is een spatie, dus gaan we door naar position 6.

* Hier staat pig, dus deze branch wordt genomen.

* Bij position 9 staat een S dus we gaan door de s box.

* Bij position 10 wordt een wordboundary gematcht wat hetzelfde is als het einde van een string. Dus ook door deze komen we. Geeft **TRUE**

### Backtracking

Backtracking is als er meerdere opties zijn waarmee gematcht kan worden en als de ene optie niet werkt, er terug wordt gekeken of het matcht bij de andere opties.

De matcher stopt wanneer het een volledige match heeft gemaakt. Dus als het skipt branches als de match volledig is voordat het door alle branches heeft moeten checken.

Backtracking gebeurt ook bij operators zoals `+` en `*`.

### The Replace Method

String waardes hebben een `replace` method dat gebruikt kan worden om een deel van een string te vervangen door een andere string.

```javascript
console.log("papa".replace("p", "m"));
// → mapa
```

Het eerste argument kan ook worden vervangen door een regular expression, waardoor de eerste match van de regular expression wordt vervangen. Als `g` achter de regular expression wordt gezet zullen alle matches vervangen worden.

```javascript
console.log("Borobudur".replace(/[ou]/, "a"));
// → Barobudur
console.log("Borobudur".replace(/[ou]/g, "a"));
// → Barabadar
```

De kracht van regular expressions met `replace` komt van het feit dat er naar gematchte groepen gerefereerd kan worden in de replacement string.

```javascript
console.log(
  "Liskov, Barbara\nMcCarthy, John\nWadler, Philip"
    .replace(/(\w+), (\w+)/g, "$2 $1"));
// → Barbara Liskov
//   John McCarthy
//   Philip Wadler
```

Hierin betekenen de `$2` en `$1` de eerste en tweede match haakjes (`(\w+)`). De tweede worden als eerste gematcht, daarna de eerste dus de output is omgedraaid.

Het is ook mogelijk om een function mee te geven als het tweede argument van `replace`.

Bijvoorbeeld zo:

```javascript
let s = "the cia and fbi";
console.log(s.replace(/\b(fbi|cia)\b/g,
            str => str.toUpperCase()));
// → the CIA and FBI
```

### Greed

Je kan ook `replace` gebruiken om alle comments te verwijderen in een stukje code.

```javascript
function stripComments(code) {
  return code.replace(/\/\/.*|\/\*[^]*\*\//g, "");
}
console.log(stripComments("1 + /* 2 */3"));
// → 1 + 3
console.log(stripComments("x = 10;// ten!"));
// → x = 10;
console.log(stripComments("1 /* a */+/* b */ 1"));
// → 1  1
```

Voor de **or** operator staan twee forward slashes die door de backward slashes als speciaal teken worden toegestaan. Deze forward slashes representeren de slashes die gebruikt worden bij comments.

Repetition operators worden ook wel greedy genoemd omdat ze zoveel mogelijk matchen en van daar uit backtracken. Als een question mark ? achter een operator wordt gezet wordt hij nongreedy. Nongreedy betekent dat de operator begint met zo min mogelijk matchen.

Nongreedy eerst gebruiken is best practice.

### Dynamically Creating RegExp Objects

Wanneer je niet weet wat het juiste patroon is om te gebruiken omdat je bepaalde data mist, kun je een string opbouwen met de RegExp constructor.

Bijvoorbeeld zo:

```javascript
let name = "harry";
let text = "Harry is a suspicious character.";
let regexp = new RegExp("\\b(" + name + ")\\b", "gi");
console.log(text.replace(regexp, "_$1_"));
// → _Harry_ is a suspicious character.
```

gi staat voor global en case insensitive.

Je kan ook als er speciale tekens in de naam gebruikt worden ervoor zorgen dat deze geaccepteerd worden:

```javascript
let name = "dea+hl[]rd";
let text = "This dea+hl[]rd guy is super annoying.";
let escaped = name.replace(/[\\[.+*?(){|^$]/g, "\\$&");
let regexp = new RegExp("\\b" + escaped + "\\b", "gi");
console.log(text.replace(regexp, "_$&_"));
// → This _dea+hl[]rd_ guy is super annoying.
```

### The Search Method

De indexOf method kan op strings met een regular expression niet worden toegepast. Hiervoor kan de `search` method gebruikt worden. Bijvoorbeeld zo:

```javascript
console.log("  word".search(/\S/));
// → 2
console.log("    ".search(/\S/));
// → -1
```

### The lastIndex Property

Regular expression objects hebben properties zoals `source` (bevat de string waarvan de expression gemaakt was) en `lastIndex` (bepaald waar de volgende match begint).

In deze gevallen moeten de global (`g`) en sticky (`y`) opties aan hebben staan en de match moet gebeuren door middel van de `exec` method. Bijvoorbeeld:

```javascript
let pattern = /y/g;
pattern.lastIndex = 3;
let match = pattern.exec("xyzzy");
console.log(match.index);
// → 4
console.log(pattern.lastIndex);
// → 5
```

Als de match succesvol is, zal de call naar `exec` automatisch de `lastIndex` property updaten om te wijzen naar na de match.

Het verschil tussen global en sticky is dat met sticky, de match alleen zal slagen als het direct start bij `lastIndex` terwijl bij global, het zal zoeken naar een position waar een match kan beginnen.

Global regular expressions moeten alleen gebruikt worden bij `replace` en specifieke plekken waar je `lastIndex` wilt gebruiken.

### Looping Over Matches

Wat vaak gedaan wordt is om te scannen door alle gevallen van een pattern in een string, op een manier die toegang geeft naar het match object in de loop body. Dit kan gedaan worden door `lastIndex` en `exec` te gebruiken:

```javascript
let input = "A string with 3 numbers in it... 42 and 88.";
let number = /\b\d+\b/g;
let match;
while (match = number.exec(input)) {
  console.log("Found", match[0], "at", match.index);
}
// → Found 3 at 14
//   Found 42 at 33
//   Found 88 at 40
```

### Parsing an INI File

De regels voor een INI file zijn:

* Lege regels en regels die beginnen met semicolons (;) worden genegeerd
* Regels wrapped in [] beginnen een nieuwe section
* Regels die een alphanumeric identifier bevatten gevolgd door een = character voegen een setting toe aan de huidige section
* De rest maakt niks uit

### International Characters

Letters die niet in het normale alphabet zitten kunnen gematcht worden met `\W` (nonword category).

### Summary

Regular expressions zijn objects die patterns in strings representeren. Ze hebben hun eigen taal om deze patterns te expressen.

| Patterns | Wat ze doen |
| -------- | ----------- |
| `/abc/` |	A sequence of characters |
| `/[abc]/`	|  Any character from a set of characters |
| `/[^abc]/` |  Any character not in a set of characters |
| `/[0-9]/`	|  Any character in a range of characters |
| `/x+/`	|  One or more occurrences of the pattern x |
| `/x+?/`	|  One or more occurrences, nongreedy |
| `/x*/`	|  Zero or more occurrences |
| `/x?/`	|  Zero or one occurrence |
| `/x{2,4}/`	|  Two to four occurrences |
| `/(abc)/`	|  A group |
| <code>/a&#124;b&#124;c/</code>|  Any one of several patterns |
| `/\d/`	|  Any digit character |
| `/\w/`	|  An alphanumeric character (“word character”) |
| `/\s/`	|  Any whitespace character |
| `/./`	|  Any character except newlines |
| `/\b/`	|  A word boundary |
| `/^/`	|  Start of input |
| `/$/`	|  End of input |

## H10: Modules

Het begrijpen van een groot script waarin alles met elkaar verbonden is, is lastig en als een deel van de functionaliteit van dit script elders gebruikt moet worden is het bijna handiger om het opnieuw te schrijven.

### Modules

Hiervoor zijn modules bedacht. Modules zijn stukjes van een geheel die specificeren op welke andere modules het afhankelijk is en welke functionaliteiten het geeft voor andere modules om te gebruiken.

De relaties tussen modules heten **dependencies**.

### Packages

Packages zijn stukjes code die 1 of meer modules bevatten.

Een wereldwijde package opslagplaats is NPM. NPM is een online service waar men packages kan downloaden (en uploaden) en een programma dat helpt met het installeren en managen van deze packages.

Packages zijn handig omdat code die al een keer geschreven is door een ander, niet meer geschreven hoeft te worden door jezelf.

Wanneer je iemand anders z'n js code gebruikt van NPM, let dan op de license die erbij hoort.

### Improvised Modules

Eerst werden modules zo gemaakt:

```javascript
const weekDay = function() {
  const names = ["Sunday", "Monday", "Tuesday", "Wednesday",
                 "Thursday", "Friday", "Saturday"];
  return {
    name(number) { return names[number]; },
    number(name) { return names.indexOf(name); }
  };
}();

console.log(weekDay.name(weekDay.number("Sunday")));
// → Sunday
```

Deze stijl van modules geeft isolatie, maar declareert geen dependencies. In plaats hiervan stopt het de interface in de global scope en verwacht het de dependencies.

Als dependency relaties deel uit moeten maken van de code, moet er controle zijn over het laden van dependencies. Hiervoor moet het mogelijk zijn om strings uit te voeren als code en dit kan met JavaScript.

### Evaluating Data As Code

Er zijn verschillende manieren om data (een string code) te pakken en te runnen als onderdeel van het huidige script.

De meest overduidelijke manier is de speciale `eval` operator, wat een string zal uitvoeren in de huidige scope. Maar dit zorgt vaak voor verwarring.

Een handigere manier om dit te doen is om de `Function` constructor te gebruiken. Het neemt twee arguments: een string die een door komma gescheiden lijst van arguments bevat en een string die de function body bevat. Het wrapt de code in een function value zodat het zijn eigen scope krijgt en geen rare dingen doet met andere scopes.

```javascript
let plusOne = Function("n", "return n + 1;");
console.log(plusOne(4));
// → 5
```

We kunnen de code van de module in een function wrappen en function scope gebruiken als de scope van de module.

### CommonJS

De meest gebruikte benadering naar JS modules heet **CommonJS modules**. Dit wordt gebruikt door Node.js en de meeste packages op NPM.

CommonJS werkt door middel van een function die `require` heet. Wanneer dit aangeroepen wordt met een module naam van een dependency, zorgt het ervoor dat de module wordt gelat en de interface gereturned.

De loader wrapt de module in een function en krijgen hierdoor hun eigen local scope. Het enige wat ze hoeven te doen is `require` aan te roepen en hun interfaces te stoppen in het object die gebonden is aan `exports`.

Een voorbeeld van een `require`:

```javascript
const ordinal = require("ordinal");
const {days, months} = require("date-names");

exports.formatDate = function(date, format) {
  return format.replace(/YYYY|M(MMM)?|Do?|dddd/g, tag => {
    if (tag == "YYYY") return date.getFullYear();
    if (tag == "M") return date.getMonth();
    if (tag == "MMMM") return months[date.getMonth()];
    if (tag == "D") return date.getDate();
    if (tag == "Do") return ordinal(date.getDate());
    if (tag == "dddd") return days[date.getDay()];
  });
};
```

De module kan op deze manier gebruikt worden:

```javascript
const {formatDate} = require("./format-date");

console.log(formatDate(new Date(2017, 9, 13),
                       "dddd the Do"));
// → Friday the 13th
```

Require kan gedefinieerd worden in een minimalistische vorm op deze manier:

```javascript
require.cache = Object.create(null);

function require(name) {
  if (!(name in require.cache)) {
    let code = readFile(name);
    let module = {exports: {}};
    require.cache[name] = module;
    let wrapper = Function("require, exports, module", code);
    wrapper(require, module.exports, module);
  }
  return require.cache[name].exports;
}
```

`require` houdt bij welke modules al ingeladen zijn.

`module.exports` kan overschreven worden. Vaak wordt dit gedaan om 1 waarde mee te geven in plaats van een interface object.

Door `require`, `exports`, en `module` als parameters te gebruiken voor de gegenereerde wrapper function, zal de lader ervoor zorgen dat deze bindings beschikbaar zijn in de scope van de module.

Een `require` die naar een daadwerkelijk bestand gaat wordt vaak zo geschreven: `./format-date` omdat de file relatief van het huidige module staat.

### EcmaScript Modules

De JavaScript standard van 2015 heeft een eigen, andere module system gekregen. Deze heten ES (ECMAScript) modules.

In dit module systeem is de notatie geïntegreerd in de taal en ziet het er zo uit:

```javascript
import ordinal from "ordinal";
import {days, months} from "date-names";

export function formatDate(date, format) { /* ... */ }
```

Om een default export te maken, schrijf je `export default` voor een expression, een functie declaratie, of een class declaratie.

```javascript
export default ["Winter", "Spring", "Summer", "Autumn"];
```

Het is ook mogelijk om de geïmporteerde bindings te hernoemen door middel van `as`:

```javascript
import {days as dayNames} from "date-names";

console.log(dayNames.length);
// → 7
```

Ook een belangrijk verschil is dat ES module imports beginnen voordat het script van een module begint met draaien. Dit betekent dat `import` declaraties niet mogen voorkomen in functions of blocks en de namen van dependencies moeten quoted strings zijn, niet arbitrary expressions.

### Building and Bundling

**Bundlers** zijn tools die ervoor zorgen dat een hele hoop modules bij elkaar worden gestopt in een groot bestand.

### Module Design

Het handigste om te doen met het designen van een module is om de bestaande conventions te gebruiken. Wat ook handig is van module design is het gemak waarmee iets gemaakt kan worden met andere code.

Houd de code simpel.

Probeer de compositie van de code gelijk te houden. Probeer zoveel mogelijk overeenkomende datastructuren te gebruiken.

## H11: Asynchronous Programming
