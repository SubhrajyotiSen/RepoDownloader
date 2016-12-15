function clickHandler(){
	var urlField = document.getElementById('url');
	var url = null;
	if(urlField!=null){
		 url = urlField.value;
	}
	console.log("url :"+url);
  var repoExp = new RegExp("https://github.com/[^/]+/[^/]+/(tree|blob)/.+");
  if (!repoExp.test(url)) {
    console.log("incorrect",url);
    alert("Not a GitHub sub-repository");
  }
  else
    GitZip.zipRepo(url);   
}

function clearText(){
  var urlField = document.getElementById('url');
  urlField.value="";
}
  	
document.addEventListener('click',function () {
	var button = document.getElementById('submit');
  var clear = document.getElementById('clear');
	if(button && clear){
  		button.addEventListener('click', clickHandler);
      clear.addEventListener('click',clearText);
  	}else{
  		console.log("button is null");
  	}
  })


