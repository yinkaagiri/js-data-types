// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( 15 );
// "number"

// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( "hello" );
// "string"

// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( [ "dog", "cat", "horse" ] );
// "object"

// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( NaN );
// "number"

// What is the return value of the below code sample? Provide a sentence or two of explanation.
"hamburger" + "s";
// "hamburgers"

// What is the return value of the below code sample? Provide a sentence or two of explanation.
"hamburgers" - "s";
// NaN

// What is the return value of the below code sample? Provide a sentence or two of explanation.
"johnny" + 5;
// "johnny5"

// What is the return value of the below code sample? Provide a sentence or two of explanation.
99 * "luftbaloons";
// NaN

// What will the contents of the below array be after the below code sample is executed.
var numbers = [ 2, 4, 6, 8 ];
numbers.pop();
numbers.push( 10 );
numbers.unshift( 3 );
// [3,2,4,6,10]

// What is the return value of the below code sample?
var morse = [ "dot", "pause", "dot" ];
var moreMorse = morse.join( " dash " );
moreMorse.split( " " );
// [ "dot", "dash", pause", "dash", "dot" ];

// What will the contents of the below array be after the below code sample is executed.
var bands = [];
var beatles = [ "Paul", "John", "George", "Pete" ];
var stones = [ "Brian", "Mick", "Keith", "Ronnie", "Charlie" ];
bands.push( beatles );
bands.unshift( stones );
bands[ bands.length - 1 ].pop();
bands[0].shift();
bands[1][3] = "Ringo";
// [ ["Mick", "Keith", "Ronnie", "Charlie"], ["Paul", "John", "George", "Ringo"] ];
