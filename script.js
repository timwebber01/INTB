$(document).ready(function() {
	var $Chart = $('#Chart');
	var $TopBlock = $('#TopBlock');
	var $MiddleBlock = $('#MiddleBlock');
	var $BottomBlock = $('#BottomBlock');
	//OPACITY CHANGE
	/*$Chart.hover(function() {
		//Top Block
		$TopBlock.hover(function() {
			$(this).fadeTo('fast', 1);
			$MiddleBlock.fadeTo('fast', .5);
			$BottomBlock.fadeTo('fast', .5);
		});
		
		//Middle Block
		$MiddleBlock.hover(function() {
			$(this).fadeTo('fast', 1);
			$TopBlock.fadeTo('fast', .5);
			$BottomBlock.fadeTo('fast', .5);
		});

		//Bottom Block
		$BottomBlock.hover(function() {
			$(this).fadeTo('fast', 1);
			$TopBlock.fadeTo('fast', .5);
			$MiddleBlock.fadeTo('fast', .5);
		});
	});*/

	$TopBlock.click(function() {
		//alert("click handler called");
		$('#CapstoneExpand').css({
			"height": "400",
			"width": "650",
			"background-color": "black"});
		//$('#CapstoneExpand').width(650px);
		//$('#CapstoneExpand').float(left);
	});
});