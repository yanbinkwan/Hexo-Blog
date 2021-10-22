var type = function(data) {
      var toString = Object.prototype.toString;
      var dataType = toString
              .call(data)
              .replace(/\[object\s(.+)\]/, "$1")
              .toLowerCase()
      return dataType
};

let urlStr = 'http://www.inode.club?name=koala&study=js&study=node';

function urlToObject(url) {
	const block = url.split('?')[1].split('&');
	const obj = {};
	for(let b of block){
		const quo = b.split('=');
		if(obj.hasOwnProperty(quo[0])){
			if(Array.isArray(obj[quo])){
				obj[quo[0]].push(quo[1]);
			}else{
				obj[quo[0]] = [obj[quo[0]],quo[1]]
			}
		}else{
			obj[quo[0]] = quo[1];			
		}
	}

	return obj;
}

console.log(urlToObject(urlStr));