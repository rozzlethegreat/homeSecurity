$(document).ready(function() {
	var switches = [];
	
	//check to see what is already in the local storage and put those values in an array
	if(localStorage.getItem("switches") !== null){
		var Storage = JSON.parse(localStorage.getItem("switches"));
		for (var i = 0; i < Storage.length; i++) {
			switches.push(Storage[i]);
		};
	}

	//When the switch is activated
	$(".toggleSwitch").click(function(){
		//Get the ID of the switch
		var switchName = $(this).attr('id');
		var switchFor = $(this).attr('for');

		var inputs = $('input[for="'+ switchFor +'"]');
	

		// Check to see if the switch is being checked or not

		if ($(this).prop('checked')) {
			//Switch is being checked
			switches.push({
				"switch" : switchFor,
				"active" : 'true'
			});
			inputs.each(function(){
				this.checked = true;
			});
			//put the switch into localstorage
			localStorage.setItem("switches", JSON.stringify(switches));
		} else {
			//if it is being turned off remove it from local storage
			for (var i = 0; i < switches.length; i++) {
				if(switches[i]['switch'] === switchFor){
					switches.splice(i, 1);
				}
			};
			inputs.each(function(){
				this.checked = false;
			});
			localStorage.setItem("switches", JSON.stringify(switches));

		}
	});









	//Turn all of the switches off
	$('.AllOff').click(function(){

		//find all of the on page switch ID's and put them into an array
		var OnPageSwitches = $('.toggleSwitch');
		var OnPageSwitchesArray = [];
		for (var i = 0; i < OnPageSwitches.length; i++) {
			OnPageSwitchesArray.push(OnPageSwitches[i].id);
		}

		//Loop through the local storage to see what switches are currently on and put them in another array
		var OnSwitches = [];
		for (var i = 0; i < switches.length; i++) {
			OnSwitches.push(switches[i]['switch']);
		};

		//Loop through both arrays to see if there is a match.
		//If there is remove those values and leave only the switches which are on from other pages
		noMatch = [];
		for (var j = 0; j < OnSwitches.length; j++) {
			var CurrentSwitchOnID = OnSwitches[j];
			if($.inArray(CurrentSwitchOnID, OnPageSwitchesArray) == -1) {
				noMatch.push({
					"switch" : CurrentSwitchOnID,
					"active" : 'true'
				});
			}
		};
		//Put all those non matching values into the localstorage
		localStorage.setItem("switches", JSON.stringify(noMatch));

		//Turn all of the checkboxes off
		$('input[type=checkbox]').each(function(){
			this.checked = false
		});
	})


	//Turn all of the switches on the page pn 
	$('.AllOn').click(function(){
		//Find the switches which are currently on the page
		var CurrentSwitches = $('.toggleSwitch');

		//find all of the switches which are currently on and put them into an array
		var CurrentOnArray = [];
		for (var i = 0; i < switches.length; i++) {
			CurrentOnArray.push(switches[i]['switch']);
		}
		//Check to see if any of the switches are already on/in the array
		//If they already are then dont re add them
		//But if they are off them add them to the swtiches array
		for (var j = 0; j < CurrentSwitches.length; j++) {
			var CurrentSwitchID = CurrentSwitches[j].id;
			if($.inArray(CurrentSwitchID, CurrentOnArray) == -1) {
				switches.push({
					"switch" : CurrentSwitchID,
					"active" : 'true'
				});				
			} 
		};
		//Put the new switches array into localstorage
		localStorage.setItem("switches", JSON.stringify(switches));

		//Turn all of the checkboxes on the page on
		$('input[type=checkbox]').each(function(){
			this.checked = true
		});
	})

});