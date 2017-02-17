var handleupload = function(event){
	event.preventDefault();
	event.stopPropagation();
	
	var fileInput = document.getElementById('prakhar');
	var data = new FormData();
	data.append('ajax',true);
	for(i=0;i<fileInput.files.length;++i){
		data.append('file[]',fileInput.files[i]);
	}

	var request = new XMLHttpRequest();
	request.upload.addEventListener('progress',function(event){
		document.getElementById('my_bar').style.display = 'block';
		document.getElementById('upload_bar').style.display='block';
		if(event.lengthComputable){
			var percent = event.loaded / event.total;
			var progress = document.getElementById('upload_progress');
			while(progress.hasChildNodes()){
				progress.removeChild(progress.firstChild);
			}
			
			progress.appendChild(document.createTextNode(Math.round(percent*100)+'%'));
			document.getElementById('my_bar').style.width = Math.round(percent*100)+'%';
		}
		  
	});
	request.upload.addEventListener('load',function(event){
		document.getElementById('upload_progress').style.display = 'none';
		document.getElementById('my_bar').style.display = 'none';
		document.getElementById('upload_bar').style.display='none';
	});
	request.upload.addEventListener('error',function(event){
		alert('Upload failed');
	});
 	request.addEventListener('readystatechange',function(event){
		if(this.readyState == 4){
			if(this.status == 200){
				var links = document.getElementById('uploaded');
				var uploaded = eval(this.response);
				var div,a;
				for(var i = 0; i < uploaded.length ; ++i){
					div = document.createElement('div');
					a = document.createElement('a');
					a.setAttribute('href','upload/' + uploaded[i]);
					a.appendChild(document.createTextNode(uploaded[i]));
					div.appendChild(a);
					links.appendChild(div);
				}

			}else{
				console.log('server replied with http status '+this.status);
			}
		}
	});
	request.open('POST','uploads.php');
	request.setRequestHeader('Cache-Control','no-cache'); 
	document.getElementById('upload_progress').style.display = 'block';
	request.send(data);

}
window.addEventListener('load',function(event){
	var submit = document.getElementById('submit');
	submit.addEventListener('click',handleupload);
});