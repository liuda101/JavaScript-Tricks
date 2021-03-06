function addMethod(obj,name,fn){
	var oldFn = obj[name];
	obj[name] = function(){
		if(fn.length === arguments.length){
			return fn.apply(this,arguments);
		} else if(typeof oldFn == 'function'){
			return oldFn.apply(this,arguments);
		}
	}
}