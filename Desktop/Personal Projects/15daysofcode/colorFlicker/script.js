 	let array=["red","green","blue","yellow","pink","orange","cyan","voilet","purple","grey","indigo","burgundy","white"]
	let textNode=document.getElementById('infoPanel');
 	let btn=document.getElementById('button');	
 	let container=document.getElementById('container')
 function change(){

 	// Erasing existing value
 	let i = Math.floor(Math.random()*array.length);
 	let node=document.createTextNode(" ");
 	document.getElementsByTagName('h1')[0].appendChild(node);
 	
 	container.style.backgroundColor=array[i];
	node=document.createTextNode(" "+array[i]);
 	document.getElementsByTagName('h1')[0].appendChild(node);
 	// console.log(container.backgroundColor);
 }
