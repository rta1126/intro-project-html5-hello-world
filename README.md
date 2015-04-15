Front-End Web Developer Nanodegree

Project 3 - Classic Arcade Game Clone (Frogger)

Version 1.3

Author: Terry Anderson
	Contact information: rta-1@pacbell.net

Copyright and Licensing
	This game is provide free of any and all copyright restrictions and requires absolutely no licensing.  I only
	ask that you enjoy it.

Compatibility
	This game seems to run issue free on most browsers:
		Firefox - Version 37.0.1 and earlier
		Chrome - Version 41.0.2272.118 m and earlier
		Internet Explorer - Version 9 - 11 (none others tested)

Operating Instructions:
	This game is a run at the ancient Frogger/2D game from long ago.  The objective is simple - move a sprite up,
	down, right or left, avoiding the never ending bugs.  There are five cute sprites to choose from depending your
	disposition; a boy, cat girl, horn girl (my favorite), pink girl and princess girl.

	This version is played on a field of seven rows and six columns forming a grid.  Each square on the grid represents
	one move. The sprite is moved from square to square by using the keyboard directional arrows: up, down, right,
	left. The second to the top row and the bottom row are safe zones (grass areas) where your sprite can rest from the
	arduous journeys across the playing field. The dangerous areas are the stone pathways where the evil bugs live - ok
	so maybe they are not evil just relentless anyway it is imperative that you carefully decide where to place your
	sprite to move up and down the field in order to avoid those never ending bugs.  One special feature that has been
	included in the field is at the very top where your sprite can enjoy it's rest time there looking at the pretty
	water.

	The game session begins by using a mouse to select (click on) the sprite you would like to use.  The selected 
	sprite is moved to the lower left hand corner of the field and from there the directional arrows only are used to 
	navigate across the field to safety.  Located above the field is a life counter that displays the number of lives 
	remaining until the game session is over.  For each game session you are given nine lives and each time a sprite/bug 
	collision occurs you lose one. After the nine lives are used up the game is over with the option of starting a new 
	session and banging into more bugs.

Configuration Instructions
	The game is comprised of one html files, three javaScript files, one CSS file and nine image files.  These are
	organized in four directories; the primary dir, js dir, css dir and the images dir. With the various files arranged
	in their respective directories the game will function without issue.

    File Manifest:
		* index.html (primary dir) Main html file that contains the coding to start and display the game
		* app.js (js dir) Coding for the main actions, functions, objects, etc. that build and control the game
		* engine.js (js dir) provides background support coding that facilitates the loading and running of the game
		* resources.js (js dir) acts as an image loading utility
		* style, css (css dir) contains most of the style coding
		* The image files (images dir) All of the sprite images and the playing field images

Known Bugs
	There is a slight bug that I sort of believe is more of a feature, that while not intended is kind of cool; any
	time during the play you can switch sprites without interrupting the score.  Why would you want to do that?  I
	don't know but you can.  If you do switch sprites the new selection is immediately moved to the starting position.

	I might consider fixing that in a future release or I might just add it to the Instructions as an option - we
	will see.

Credits and Acknowledgements
	As the template for this game was provided as a base for this particular project much of the initial code already
	existed.  The course provided several excellent training sessions from which I gathered much of the fundamental
	programing details.  I have reviewed the code of several examples and comments on the various forums such as
	stack overflow and have, as a result gained a new insight to object oriented javaScript.

