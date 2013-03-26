/*

使用了function属性

*/


var function_store = {
	nextId : 0,
	cache : {},
	add : function(fn){
		if(!fn.id){
			fn.id = function_store.nextId ++;
			return !!(function_store.cache[fn.id] = fn);
		}
	}
};