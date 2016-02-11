// PRIMITIVE DATA TYPES

// What is the return value of each of the below code samples? Please come up with an answer before testing any of the below in the console.

typeof( 15 );
typeof( "hello" );
typeof( [ "dog", "cat", "horse" ] );
typeof( NaN );
"hamburger" + "s";
"hamburgers" - "s";
"johnny" + 5;
99 * "luftbaloons";

// DATA COLLECTIONS

// What will the contents of the below array be after the below code sample is executed.
var numbers = [ 2, 4, 6, 8 ];
numbers.pop();
numbers.push( 10 );
numbers.unshift( 3 );

// What is the return value of the below code sample?
var morse = [ "dot", "pause", "dot" ];
var moreMorse = morse.join( " dash " );
moreMorse.split( " " );

// What will the contents of the below array be after the below code sample is executed.
var bands = [];
var beatles = [ "Paul", "John", "George", "Pete" ];
var stones = [ "Brian", "Mick", "Keith", "Ronnie", "Charlie" ];
bands.push( beatles );
bands.unshift( stones );
bands[ bands.length - 1 ].pop();
bands[0].shift();
bands[1][3] = "Ringo";
