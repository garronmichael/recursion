// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  function whatIsIt(obj) {
  	var string = "";
  	if(obj === undefined || obj === "function") {
  		string = undefined;
  	}
  	if(obj === null || typeof obj === "number" || typeof obj === "boolean") {
  		string += "" + obj + "";
  	}
  	if(typeof obj === "string") {
  		string += "\"" + obj + "\"";
  	}
  	if(typeof obj === "object" && obj !== null) {
  		if(Array.isArray(obj)) {
  			string 
  			if(obj.length > 0) {
  				string += "["
  				for(var i = 0; i < obj.length; i++) {
  					string += whatIsIt(obj[i]) + ",";
  				}
  				string += "]";
  			} else {
  				string = "[]";
  			} 
  		}
  		if(!Array.isArray(obj)) {
  			string += "{";
  			for(var j in obj) {
  				if(whatIsIt(obj[j])) {
	  				string += "\"" + j + "\":" + whatIsIt(obj[j]) + ",";
  				}
  			}
  			string += "}"
  		}
  	}
  	if(string) {
	  	string = string.replace(/,\}/g, "}");
	  	string = string.replace(/,\]/g, "]");
  	}
  	return string;
  }
  return whatIsIt(obj);
};
