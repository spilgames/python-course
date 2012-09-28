author: Jasper Capel
title: Python for beginners

Introduction
============
This presentation/course is based on the freely available book "Learning to Program Using Python" by "Cody Jackson". For more information, see: python-ebook.blogspot.nl/2012/05/updated-html-version-available.html

!SLIDE slide x=-500 y=100 scale=0.2

About the author
----------------
* Started writing Python about 5 years ago, developing Cobbler
* Python was my language of choice ever since, as it seems to balance power with simplicity
* By no means an expert, but very much an enthousiast, please correct me if I'm wrong!

!SLIDE slide x=-300 y=100 scale=0.2

Preparation
-----------
Clone the repository that includes the exercises and presentation:

    git clone git://github.com/spilgames/python-course.git

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
* Operators, like `*`, `>>`, `+` , `<`.
* Functions, like `abs()`, `pow()`.
* Utilities, like `rand` and `math`
* If you need more, see the NumPy extension

!SLIDE

Strings
-------

* Assign: `s1 = "foo"` and `s2 = 'bar'`
* Concatenate: `s1 + s2`
* Multiply: `s2 * 3`
* Index: `s2[n]`
* Slice: `s2[from:to]`
* Length: `len(s1)`
* Format: `"a {0} parrot".format("dead")`
* Iteration: `for x in s2`
* Check for presence: `"o" in s2`

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

Typecasting
-----------
You can convert basic types from one type to the other. This is called typecasting.

For example, the following code will not work. How can we fix this?
<textarea>
calculation = 5 * 23
my_string = "This is my string" + calculation
</textarea>

!SLIDE

Typecasting (cont.)
-------------------
* To string: `str()`
* To integer: `int()`
* To float: `float()`
* To octal: `oct()`
* To hexadecimal: `hex()`

!SLIDE

Exercises
---------
Some exercises, courtesy of Google. You'll find them in the `beginners-exercises` directory.

Complete the exercises in `string1.py`. To test your code, simply execute it and it'll tell you if your answers are correct.

If you want to advance, you can take on the exercises in `string2.py`.

!SLIDE

Lists
-----
* Empty list: `L1 = []`
* List with four items: `L2 = [0, 1, 2, 3]`
* Nested list: `L3 = ['abc', ['def', 'ghi']]`
* Index: `L2[n]`, `L3[n][j]`
* Slice:  `L2[n:j]`
* Length: `len(L2)`
* Concatenate: `L1 + L2`, Repeat: `L2 * 3`
* Iteration: `for x in L2`
* Membership: `3 in L2`

!SLIDE
Lists (cont.)
-------------
* Grow: `L2.append(4)`, `L2.extend(L1)`
* Sort: `L2.sort()`, Search: `L2.index(1)`, Reverse: `L2.reverse()`
* Shrink: `del L2[k]`, `L2[n:j] = []`
* Index assignment: `L2[n] = 1`, Slice assignment: `L2[n:j] = [4,5,6]`
* Create a list/tuple of integers: `range(4)`, `xrange(0, 4)`

Variations: tuples and sets.

Caveat: if you pass a list to a function, a reference is passed. It is not copied.

!SLIDE

Loops
-----
* Iterate a finite amount of times using `for element in collection:`
* Iterate while condition is met: `while condition:`
* Flow control:
    * `break`: Break out of the smallest enclosing for/while loop.
    * `continue`: Continue with the next iteration of the loop.
    * `pass`: Does nothing, but can be used if it's syntactically required, for instance for creating an empty loop or function.

Examples:

<textarea>
L1 = ["aap", "beer", "tijger", "olifant"]
for el in L1:
    print el.upper()
</textarea>

<textarea>
L1 = ["aap", "beer", "tijger", "olifant"]
while len(L1):
    print L1.pop().upper()
</textarea>
!SLIDE

Exercises
---------
Please form pairs.

With this information, you should be able to solve the exercises in `list1.py`. If you're done, proceed with the exercises in `list2.py`, or ponder over the following question:

_Given list L with an undefined amount of integers, what is the most elegant way of multiplying all the elements with 3?_

Some additional resources to help you out:

* http://docs.python.org/tutorial/datastructures.html
* http://docs.python.org/library/stdtypes.html

!SLIDE

Dictionaries
------------
Dictionaries are Python's key-value stores. They look like this: `{ 'key1': 'value1', 'key2': 'value2'}`. Dictionaries (unlike lists) are not ordered sequences.

* Empty dictionary: `D1 = {}`
* Dictionary with two items: `D2 = {"show": "Monty Python", "sketch": "Parrot"}`
* A nested dictionary: `{"foo": "bar", "this": {"foo": "bar", "that": True}}`
* Index: `D2["show"]`
* Concatenate: `D1.update(D2)` (for conflicting keys, D2 wins). Alternative: `D3 = dict(D1, **D2)`
* Iteration: `for key in D1.keys():`, or `for key,value in D1.iteritems():`
* Membership: `"show" in D1.keys()`, or `D1.has_key("show")`
* Grow: `D2["newitem"] = "value"`
* Shrink: `del(D2["newitem"])`

!SLIDE

Working with files
------------------

* Open your file with `open()`. It defaults to read, but supports a variety of modes (see documentation). For instance, `open("file.txt", "w")` open file.txt for writing. It will create the file if it does not exist and will truncate the file if it does exist.

The following example reads a file:

<textarea>
f = open("file.txt")
data = f.read()
f.close()
</textarea>

!SLIDE

Handling exceptions
-------------------

If the file `file.txt` does not exist, our program would crash. We can avoid that by handling exceptions. We use the `try` / `except` keywords for this. For example, the following code would allow the program to continue running even if the file did not exist:

<textarea>
try:
    f = open("file.txt")
    data = f.read()
    f.close()
except:
    print "File does not exist"
</textarea>

We can make this even nicer!

<textarea>
try:
    with open("file.txt") as f:
        data = f.read()
except IOError:
    print "File does not exist"
</textarea>

!SLIDE

Tips and tricks
---------------
We're extracting the first word of a line, because that contains the title. How can we make this better (hint: it works just like in Erlang)?
<textarea>
my_str = "sketch1 A sketch about dead parrots"
bits = my_str.partition(" ")
title = bits[0]
description = bits[2]
print "%s -- %s" % (title, description)
</textarea>

There's a cheat sheet in the git repository.

Exercises
---------
Complete the `wordcount.py` exercise. If you have time left, you can move on to `mimic.py`.
