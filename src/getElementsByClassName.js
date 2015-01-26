// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var found = [];
  function search(eList, className) {
  	for(var i = 0; i < eList.length; i++) {
  		if(eList[i].classList) {
	  		for(var j = 0; j < eList[i].classList.length; j++) {
		  		if(eList[i].classList[j] === className) {
		  			found.push(eList[i]);
		  		}
	  		}
  		} 
  		if(eList[i].childNodes.length > 0){
			search(eList[i].childNodes, className);
  		}
  	}
  }
  search(document.childNodes, className);
  return found;
};
