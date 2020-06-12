
 function change(){
 	 let array=["red","green","blue","yellow","pink","orange","cyan","voilet","purple","grey","indigo","burgundy","white"]
	 let textNode=document.getElementById('infoPanel');
 	let btn=document.getElementById('button');	
 	let container=document.getElementById('container')
 	let i = Math.floor(Math.random()*array.length);
 	container.backgroundColor=array[i];
 	console.log(container.backgroundColor);
 }
