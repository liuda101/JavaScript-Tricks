function bind(fn,context){
	return fn.bind ? fn.bind(context) : function(){
		fn.apply(context,arguments);
	};
}