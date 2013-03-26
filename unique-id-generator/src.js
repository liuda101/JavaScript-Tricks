// 如果传入prefix，则需要是一个string
function uniqueID(prefix){
	var id = ++ uniqueID._id + '';
	return prefix ? prefix + id : id;
}

uniqueID._id = 0;