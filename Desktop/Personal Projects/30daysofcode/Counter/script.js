let count=0;
let node=document.getElementById('display')
function increase(){
	count+=1;
	node.innerHTML=count;
	if(count>0)
	node.style.color='green';
	if(count<0)
	node.style.color='red';
	if(count===0)
		node.style.color="black";	
}
function reset(){
	count=0;
	node.innerHTML=count;
	if(count===0)
		node.style.color="black";
}
function decrease(){
	count-=1;
	node.innerHTML=count;
	if(count>0)
	node.style.color='green';
	if(count<0)
	node.style.color='red';
	if(count===0)
		node.style.color="black";
}
if(count>0)
	node.style.color='green';
if(count<0)
	node.style.color='red';