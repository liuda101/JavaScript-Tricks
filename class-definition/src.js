function SomeClass(name){
	if(!(this instanceof arguments.callee)){
		return new SomeClass(name);
	}
	this.name = name;
}