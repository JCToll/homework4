
// intialize vars that are used	 
		var moveInput
		var move
		var startOver= true;
		var maxSize=5; 
		var EW, NS, kEW, kNS;
	  var userRepeat= true;
		
				
		confirm(" Let's play a treasure hunting adventure!!! \n You need to find a hidden treasure.The treasure is hidden in an unknown location. \n You will start in the center of a the kingdom - and you can only move one space at a time, moving either, North, South, East, or West, within a 10x10 grid. \n \n BEWARE -  there is a hidden trap that if you enter this location, you will die.");
		
// Can turn on test mode (true) which gives the user the treasure location upfront - great for testing!!
		var isTest= true;

				isTest= prompt("Do you want to run this in test mode (y/n)?");
					  isTest=isTest.toLocaleUpperCase(); 
						if (isTest= "Y"){
								isTest=true;
						} else  {
								isTest=false;
						}

	 
	 while (startOver){


// use random # generator to set treasure location
// because we want the grid to go + and - maxSize, need random to generate number based on 2*maxSize 
// and then subtract maxSize from result
// Example: if maxSize=5, then do random from 0 to 10; say the result is 3; then subtract 5= -2
			var treasureX=parseInt(Math.random()*(maxSize*2+1) -maxSize); 
			console.log("treasure X= ",treasureX);

			var treasureY=parseInt(Math.random()*(maxSize*2+1) -maxSize);
			console.log("treasure Y= ",treasureY);
		 
// Auto-generate a location that kills the adventurer
			var killX=parseInt(Math.random()*(maxSize*2+1) -maxSize); 
			console.log("kill location X= ",killX);

			var killY=parseInt(Math.random()*(maxSize*2+1) -maxSize);
			console.log("kill location Y= ",killY);		 
		 
//if test mode flag isTest= true, then disply the secret treasure location - helps to test code so user can converge on treasure 
		  if (isTest) {
		 			//Extract N-S-E-W labelso it can be added to the location #  - make it easier 		 
					if (treasureX >= 0){EW="E"} else {EW="W"};
		 			if (treasureY >= 0){NS="N"} else {NS="S"}; 
					if (killX >= 0){kEW="E"} else {kEW="W"};
		 			if (killY >= 0){kNS="N"} else {kNS="S"}; 				
				
					alert("For testing purpose only... The treasure is hidden at: X= " + String(Math.abs(treasureX)) + EW + " &  Y= " + String(Math.abs(treasureY)) + NS + "\n Kill location is at X= " + String(Math.abs(killX)) + kEW + " &  Y= " + String(Math.abs(killY)) + kNS );
			}

			var x=0;
			var y=0; 
			var treasureFound= false;

		
			while (!treasureFound) {
				
				if (x >= 0){EW="E"} else {EW="W"};
				if (y >= 0){NS="N"} else {NS="S"}; 
				msgLocation= ("Your current location is: X= " + String(Math.abs(x)) + EW + " &  Y= " + String(Math.abs(y)) + NS );
// if user is on the edge of the grid - tell user;  add this to the msg 
				if (Math.abs(x) == 5 || Math.abs(y) == 5) {
						msgLimit=("\n You are on the edge of the grid which is set at: " + String(maxSize) + ". You can not move beyond this limit!");
				} else { 
						msgLimit=" ";
				}

		    moveInput =  prompt(msgLocation + msgLimit + "\n Enter your next move; input direction: n,s,e, or w ");
// make  inputs uppercase - less logic checks needed
				move= moveInput.toUpperCase()
				console.log("move= ", move);
// move user one grid based on value defined by move;  need to stop user from going beyond the edge
// if user is on the edge of the grid (maxSize) and tries to move beyond, use min/max function to stop this
				if ( move == 'N' ) {
						y= Math.min(maxSize,y+1);			
				} else if ( move == 'S' ){ 
						y= Math.max(-maxSize,y-1) ;	
    		} else if (move == 'E') { 
						x= Math.min(maxSize,x+1);	
				} else { 
						x= Math.max(-maxSize,x-1);
				}
				
				console.log("X= ",x, "Y= ",y)
			
				if (x == treasureX && y == treasureY) {
						treasureFound=true;
						console.log("YES you found the treasure");
						userRepeat= prompt("YES - you found the treasure. Do you want to start over (y/n)?");
					  userRepeat=userRepeat.toLocaleUpperCase(); 
						if (userRepeat == "Y"){
								startOver=true;
						} else  {
								startOver=false;
						}
				}

						 //	Check if user has fallen  into kill location			
				if (x == killX && y == killY) {
						console.log("YIKES! You walked into the kill zone - and you are dead. GAME OVER!");
						userRepeat= prompt("YOU LOSE! You walked into the kill zone - and you are dead. GAME OVER! \n Do you want to start over (y/n)?");
					  userRepeat=userRepeat.toLocaleUpperCase(); 
						if (userRepeat == "Y"){
								startOver=true;
							  treasureFound= false;
						} else  {
								startOver=false;
						}
				}
	    }
		 	 

	}		
			
  
