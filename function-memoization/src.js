Function.prototype.memozied = function(key){
	this._values = this._values || {};
	return this._values[key] !== undefined ? 
		this._values[key] : 
		this._values[key] = this.apply(this,arguments);
};

Function.prototype.memoize = function(){
	var fn = this;
	return function(){
		return fn.memozied.apply(fn,arguments);
	};
};


// example 1
function isEven(num){
	return num % 2 == 0;
}

// after memoized is called, the function 'isEven' has a property named '_values'
isEven.memoized(3);


// example 2
var isEven = (function(num){
	return num % 2 == 0;
}).memoize();

// function isEven is a new function which doesn't have the '_values' property
isEven(3);


/*
	过度封装了么？
 */
