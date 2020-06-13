 	let textNode=document.getElementById('infoPanel');
 	let btn=document.getElementById('button');	
 	let container=document.getElementById('container');
 	let nameButton=document.getElementById('name');
	let hexButton=document.getElementById('hex');
	nameButton.style.backgroundColor="#e0dede";	// Default mode.
	let mode=0; // Default value
 
 function selectName(){
 	nameButton.style.backgroundColor="#e0dede";
 	hexButton.style.backgroundColor="#fff";
 	mode=0;
 
 	
 }
 function selecthex(){
 	nameButton.style.backgroundColor="#fff";
 	hexButton.style.backgroundColor="#e0dede";
 	mode=1;
 
 	
 }
function change(){
	if(mode===0){
		let array=["red","green","blue","yellow","pink","orange","cyan","purple","grey","indigo","white"]	
	 	// Erasing existing value
	 	let i = Math.floor(Math.random()*array.length);
	 	container.style.backgroundColor=array[i];
		let node=document.createTextNode(" "+array[i]);
		document.getElementById('color-description').innerText="Backgound Color :"+" "+array[i];

	// document.getElementById('color-description').style.color=array[i];	// color the names.
	}
 	if(mode===1){
		let array=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
		let a= Math.floor(Math.random()*array.length);
		let _a=array[a];
		let b= Math.floor(Math.random()*array.length);
		let _b=array[b];
		let c= Math.floor(Math.random()*array.length);
		let _c=array[c];
		let d= Math.floor(Math.random()*array.length);
		let _d=array[d];
		let e= Math.floor(Math.random()*array.length);
		let _e=array[e];
		let f= Math.floor(Math.random()*array.length);
		let _f=array[f];
		let color=`#${_a}${_b}${_c}${_d}${_e}${_f}`;
	 	container.style.backgroundColor=color;
		document.getElementById('color-description').innerText="Backgound Color :"+" "+color;
	}
}