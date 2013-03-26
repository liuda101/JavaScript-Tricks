/*

	The technique of filling in the first few arguments of a function 
	and returning a new function is typically called currying.

*/

/**
 * filling the beginning of argument list
 */
Function.prototype.curry = function(){
	var fn = this, args = Array.prototype.slice.call(arguments);

	return function(){
		return fn.apply(this,args.contact(Array.prototype.slice.call(arguments)));
	};
};


/**
 * filling any argument at any position : use 'undefined' for missing arguments
 */
Function.prototype.partial = function(){
	var fn = this, args = Array.prototype.slice.call(arguments);

	return function(){
		var arg = 0;
		for(var i = 0; i < args.length && arg < arguments.length; i ++){
			if(args[i] === undefined){
				args[i] = arguments[arg ++];
			}
		}

		return fn.apply(this,args);
	};
};