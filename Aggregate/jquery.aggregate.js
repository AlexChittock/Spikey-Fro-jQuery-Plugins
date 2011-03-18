/**
*	Allows functions to be aggregated across a set of elements.
*	e.g. For summations of a particular property
*
*	Usage:
*	$("div.something").aggregate(func)
*	where func is a function that accepts 2 parameters: 1) The current result, 2) The current item.
*/
(function($){

	$.fn.aggregate = function(agg, transform){
		var curr;
		
		if(transform == undefined){
			transform = function(item){
				return item;
			}
		}
		
		for(var i = 1; i < this.length; i++){
			
			if(i == 1){
				curr = agg(transform(this[0]), transform(this[1]));
			} else {
				curr = agg(curr, transform(this[i]));
			}
			
		}
		return curr;
	};
	
})(jQuery);