$(document).ready(function() {
	var $Chart = $('#Chart');
	var isOpen = true;
	var date = new Date();

	var $Capstone1 = $('#Capstone1');
	var $SystemSkills1 = $('#SystemSkills1');
	var $SystemSkills2 = $('#SystemSkills2');
	var $SystemSkills3 = $('#SystemSkills3');
	var $SystemSkills4 = $('#SystemSkills4');
	var $SystemSkills5 = $('#SystemSkills5');
	var $SystemSkills6 = $('#SystemSkills6');
	var $InterpersonalSkills1 = $('#InterpersonalSkills1');
	var $InterpersonalSkills2 = $('#InterpersonalSkills2');
	var $InterpersonalSkills3 = $('#InterpersonalSkills3');
	var $InterpersonalSkills4 = $('#InterpersonalSkills4');
	var $InterpersonalSkills5 = $('#InterpersonalSkills5');
	var $Attitudes_Values1 = $('#Attitudes_Values1');
	var $Attitudes_Values2 = $('#Attitudes_Values2');
	var $Attitudes_Values3 = $('#Attitudes_Values3');
	var $LeadershipBase1 = $('#LeadershipBase1');
	var $LeadershipBase2 = $('#LeadershipBase2');
	var $LeadershipBase3 = $('#LeadershipBase3');
	var $GlobalKnowledgeBase1 = $('#GlobalKnowledgeBase1');
	var $GlobalKnowledgeBase2 = $('#GlobalKnowledgeBase2');

	var expansions = [$Capstone1, $SystemSkills1, $SystemSkills2,
	$SystemSkills3, $SystemSkills4, $SystemSkills5, $SystemSkills6,
	$InterpersonalSkills1, $InterpersonalSkills2, $InterpersonalSkills3,
	$InterpersonalSkills4, $InterpersonalSkills5, $Attitudes_Values1,
	$Attitudes_Values2, $Attitudes_Values3, $LeadershipBase1,
	$LeadershipBase2, $LeadershipBase3, $GlobalKnowledgeBase1,
	$GlobalKnowledgeBase2];

	/* 
	 returns true if this block is visible
	*/
	$.fn.isVisible = function() {
		if (this.css('display') != 'none') {
			return true;
		} else {
			return false;
		};
	};

	/*
	 returns true if any block is visible
	*/
	isAnyVisible = function() {
		for (var i = 0; i < expansions.length; i = i + 1) {
			if (expansions[i].isVisible()) {
				return true;
			}
		}
		return false;
	};

	/*
	 Set this display to none
	*/
	$.fn.makeInvisible = function() {
		this.slideUp('slow');
	};

	/*
	 * makes this element visible
	 */
	$.fn.makeVisible = function() {
		this.slideDown('slow');
	}

	/*
	 * Finds the open div and sets it to invisible
	 */
	searchAndDestroy = function() {
		for (var i = 0; i < expansions.length; i = i + 1) {
			if (expansions[i].isVisible()) {
				expansions[i].makeInvisible();
			}
		}
	}
	
	/*
	 * returns the corresponding jQuery object from the array
	 */
	correspondingObject = function(string) {
	 	var returnid = parseInt(string);
	 	return expansions[returnid];
	 };
	/*
	 * main on click functions
	 */
	function clickRun(event) {
	 	var $objectVersion = correspondingObject(event.target.id);
		if (isAnyVisible() == false) { // none open
			$objectVersion.makeVisible();
		} else if (isAnyVisible() && $objectVersion.isVisible()) { //click already open div
			$objectVersion.makeInvisible();
		} else if (isAnyVisible() && $objectVersion.isVisible()==false) { //different div open
			searchAndDestroy();
			$objectVersion.delay(600).makeVisible();
		};
	 };

	 /*
	  * on click
	  */
	$('.ChartLink').click(function(event) {
		var lastclick = date.getSeconds();
		var clicktime = new Date().getSeconds();
		if ( Math.abs(clicktime - lastclick) >= 1) {
			clickRun(event);
		}
		date = new Date();
	});
});