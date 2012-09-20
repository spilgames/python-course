!SLIDE x=0 y=0

Introduction
============
This presentation/course is based on the freely available book "Learning to Program Using Python" by "Cody Jackson". For more information, see: python-ebook.blogspot.nl/2012/05/updated-html-version-available.html

!SLIDE slide x=-500 y=100 scale=0.2

About the author
----------------
* Started writing Python about 5 years ago
* By no means an expert, but very much an enthousiast test test test test

!SLIDE slide x=-300 y=100 scale=0.2

Preparation
-----------
Clone the repository that includes the exercises and presentation:

    git clone blah

Python cares about whitespace, we have to configure our editors to play nice.

!SLIDE

VIM
---

As with everything vim, there are many ways to do this. For this course, just add the following lines to your vimrc:

    set expandtab
    set tabstop=4
    set shiftwidth=4

For a more comprehensive guide, see: http://wiki.python.org/moin/Vim or just google for `Python vim` and click one of the 15 million-or-so results.

!SLIDE

Sublime Text 2
--------------

In Sublime Text 2, add the following settings to your configuration:

	"indent_to_bracket": true,
	"translate_tabs_to_spaces": true,
	"trimTrailingWhiteSpaceOnSave": true,
	"trim_automatic_white_space": true

You should also install `SublimeLinter`, which checks your code to see if it conforms to PEP8.


!SLIDE

What is python?
---------------
* Dynamically typed
* Interpreted (but compiles to byte-code)
* Both procedural and OO, you choose.


###Python compared

Next up: 99 bottles of beer, implemented in various languages (see also: http://99-bottles-of-beer.net)

!SLIDE

C
-

    #define MAXBEER (99) 
    void chug(int beers); 
 
	main() 
	{ 
		register beers; 
		for(beers = MAXBEER; beers; chug(beers--)) 
		    puts(""); 
		puts("\nTime to buy more beer!\n"); 
		exit(0); 
	} 
	 
	void chug(register beers) 
	{ 
		char howmany[8], *s; 
		s = beers != 1 ? "s" : ""; 
		printf("%d bottle%s of beer on the wall,\n", beers, s); 
		printf("%d bottle%s of beeeeer . . . ,\n", beers, s); 
		printf("Take one down, pass it around,\n"); 
		 
		if(--beers) sprintf(howmany, "%d", beers); else strcpy(howmany, "No more"); 
		s = beers != 1 ? "s" : ""; 
		printf("%s bottle%s of beer on the wall.\n", howmany, s); 
	}

!SLIDE
C++
---

	#include <fstream.h> 
 
	enum Bottle { BeerBottle }; 
	 
	class Shelf { 
	    unsigned BottlesLeft; 
	public: 
	    Shelf( unsigned bottlesbought ) 
	        : BottlesLeft( bottlesbought ) 
	        {} 
	    void TakeOneDown() 
	        { 
	        if (!BottlesLeft) 
	            throw BeerBottle; 
	        BottlesLeft--; 
	        } 
	    operator int () { return BottlesLeft; } 
	    }; 

!SLIDE	 
C++ (cont)
----------
	int main( int, char ** ) 
	    { 
	    Shelf Beer(99); 
	    try { 
	        for (;;) { 
	            char *plural = (int)Beer !=1 ? "s" : ""; 
	            cout << (int)Beer << " bottle" << plural 
	                << " of beer on the wall," << endl; 
	            cout << (int)Beer << " bottle" << plural 
	                << " of beer," << endl; 
	            Beer.TakeOneDown(); 
	            cout << "Take one down, pass it around," << endl; 
	            plural = (int)Beer !=1 ? "s":""; 
	            cout << (int)Beer << " bottle" << plural 
	                << " of beer on the wall." << endl; 
	            } 
	        } 
	    catch ( Bottle ) { 
	        cout << "Go to the store and buy some more," << endl; 
	        cout << "99 bottles of beer on the wall." << endl; 
	        } 
	    return 0; 
	    }

!SLIDE
PHP
---
    /* CREATE LYRICS */
    for($i = $bottleNumber; $i >= 0; $i--) {
    
        /* SET DEFAULTS */
        $bottleCount = $i;
        $bottle = 'bottles';
        $action = 'Take one down and pass it around';
        $remainingBottles = $i-1;
        
        /* HANDLE EXCEPTIONS */
        if($i == 0) {
        	$bottleCount = 'no more';
        	$action = 'Go to the store and buy some more';
        	$remainingBottles = $bottleNumber;
        }
        if($i == 1) {
        	$bottle = 'bottle';
        	$action = 'Take it down and pass it around';
        	$remainingBottles = 'no more';
        }
    
        /* BUILD LYRICS */
        $lyrics .= ucfirst($bottleCount).' '.$bottle.' of '.$fluid.' on the '.
        $location.', '.$bottleCount.' '.$bottle.' of '.$fluid.'.<br>'."\n";
        $lyrics .= $action.', '.$remainingBottles.' bottles of '.$fluid.' on the '
        . $location.'.<p\>'."\n\n";
    }
    
    /* OUTPUT TO PAGE */
    echo $lyrics;
    

!SLIDE
Perl
----

	    ''=~(        '(?{'        .('`'        |'%')        .('['        ^'-')
	    .('`'        |'!')        .('`'        |',')        .'"'.        '\\$'
	    .'=='        .('['        ^'+')        .('`'        |'/')        .('['
	    ^'+')        .'||'        .(';'        &'=')        .(';'        &'=')
	    .';-'        .'-'.        '\\$'        .'=;'        .('['        ^'(')
	    .('['        ^'.')        .('`'        |'"')        .('!'        ^'+')
	   .'_\\{'      .'(\\$'      .';=('.      '\\$=|'      ."\|".(      '`'^'.'
	  ).(('`')|    '/').').'    .'\\"'.+(    '{'^'[').    ('`'|'"')    .('`'|'/'
	 ).('['^'/')  .('['^'/').  ('`'|',').(  '`'|('%')).  '\\".\\"'.(  '['^('(')).
	 '\\"'.('['^  '#').'!!--'  .'\\$=.\\"'  .('{'^'[').  ('`'|'/').(  '`'|"\&").(
	 '{'^"\[").(  '`'|"\"").(  '`'|"\%").(  '`'|"\%").(  '['^(')')).  '\\").\\"'.
	 ('{'^'[').(  '`'|"\/").(  '`'|"\.").(  '{'^"\[").(  '['^"\/").(  '`'|"\(").(
	 '`'|"\%").(  '{'^"\[").(  '['^"\,").(  '`'|"\!").(  '`'|"\,").(  '`'|(',')).
	 '\\"\\}'.+(  '['^"\+").(  '['^"\)").(  '`'|"\)").(  '`'|"\.").(  '['^('/')).
	 '+_,\\",'.(  '{'^('[')).  ('\\$;!').(  '!'^"\+").(  '{'^"\/").(  '`'|"\!").(
	 '`'|"\+").(  '`'|"\%").(  '{'^"\[").(  '`'|"\/").(  '`'|"\.").(  '`'|"\%").(
	 '{'^"\[").(  '`'|"\$").(  '`'|"\/").(  '['^"\,").(  '`'|('.')).  ','.(('{')^
	 '[').("\["^  '+').("\`"|  '!').("\["^  '(').("\["^  '(').("\{"^  '[').("\`"|
	 ')').("\["^  '/').("\{"^  '[').("\`"|  '!').("\["^  ')').("\`"|  '/').("\["^
	 '.').("\`"|  '.').("\`"|  '$')."\,".(  '!'^('+')).  '\\",_,\\"'  .'!'.("\!"^
	 '+').("\!"^  '+').'\\"'.  ('['^',').(  '`'|"\(").(  '`'|"\)").(  '`'|"\,").(
	 '`'|('%')).  '++\\$="})'  );$:=('.')^  '~';$~='@'|  '(';$^=')'^  '[';$/='`';

Moving on…

!SLIDE
…and Python
-----------
<textarea>
for quant in range(99, 0, -1):
    if quant > 1:
        print quant, "bottles of beer on the wall,", \
        	quant, "bottles of beer." 
        if quant > 2:
            suffix = str(quant - 1) + " bottles of beer on the wall." 
        else:
            suffix = "1 bottle of beer on the wall." 
    elif quant == 1:
        print "1 bottle of beer on the wall, 1 bottle of beer." 
        suffix = "no more beer on the wall!" 
    print "Take one down, pass it around,", suffix 
    print "--"
</textarea>


The basics
==========
!SLIDE
Syntax
------

* Indentation matters! Always indent using four spaces per level. Don't use TABs!
* Commenting is done with # and can be done like `print 1 + 3 # Comment`
* Strings, as usual, enclosed by `"` or `'`. Multi-line strings with `"""`.
* Assignment: `a = 'foo'`, `b = 42`.
* And functions can be documented using docstrings (the js-interpreter doesn't understand this, so we'll get back to this):

<textarea>
def my_method(foo):
   """My very own method that does stuff. Or not."""
   return foo
print my_method.__doc__
</textarea>

!SLIDE

Numbers
-------

* integer: `12345`, `-32`
* Python integer: `999999999L` (In Python 3.x, all integers are Python integers)
* float: `1.23`, `4e5`, `3e-4`
* octal: `012`, `0456`
* hex: `0xf34`, `0X12FA`
* complex: `3+4j`, `2J`, `5.0+2.5j`
* Operators, like `*`, `>>` `+` , `<`.
* Functions, like `abs()`, `pow()`.
* Utilities, like `rand` and `math`
* Typecasting using int(), float(), oct(), hex().
* If you need more, see the NumPy extension

!SLIDE

Strings
-------

* Assign: `s1 = foo` and `s2 = bar`
* Concatenate: `s1 + s2`
* Multiply: `s2 * 3`
* Index: `s2[n]`
* Length: `len(s1)`
* Format: `"a {0} parrot".format("dead")`
* Iteration: `for x in s2`
* Check for presence: `"o" in s2`
* Typecasting using `str()`

!SLIDE


Functions
---------

Functions are defined using the keyword `def`, followed by your function name and the expected parameters:

<textarea>
def multiply(x,y):
    return x * y

print multiply(3,4)
</textarea>

!SLIDE

IF-statements
-------------
<textarea>
def greater_than(x,y):
     # Returns True if x > y, False if not.
     if x > y:
         return True
     else:
         return False
print greater_than(5,5)
print greater_than(3,2)
</textarea>

How can we make this better?

!SLIDE


Exercises
---------
Some exercises, courtesy of Google.

Complete the exercises in `beginners-exercises/string1.py`. To test your code, simply execute it and it'll tell you if your answers are correct.

If you want to advance, you can take on the exercises in `beginners-exercises/string2.py`.
