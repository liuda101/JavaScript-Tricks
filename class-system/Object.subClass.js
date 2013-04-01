// reference: P148-Listing 6.21 Secrets of the JavaScript Ninja

(function(){
	var initializing = false,
		fnTest = /xyz/.test(function(){xyz;}) ? /\b_super\b/ : /.*/;

	Object.subClass = function(prop){
		var _super = this.prototype;

		initializing = true;
		var proto = new this();
		initializing = false;

		for(var name in prop){
			proto[name] = typeof prop[name] == 'function' && typeof _super[name] == 'function' && fnTest.test(prop[name]) ?
				(function(name,fn){
					return function(){
						var tmp = this._super;

						this._super = _super[name];

						var ret = fn.apply(this,arguments);
						this._super = tmp;

						return ret;
					};
				})(name,prop[name]) : prop[name];
		}

		function Class(){
			if(!initializing && this.init){
				this.init.apply(this,arguments);
			}
		}

		Class.prototype = proto;
		Class.constructor = Class;
		Class.subClass = arguments.callee;
		return class;
	};
})();