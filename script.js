//your JS code here. If required.
let inputs=document.getElementsByTagName('input');
let submitButton=document.getElementById('btn');
let output=document.getElementById('output');

submitButton.addEventListener('click',(event)=>{
	
	event.preventDefault();
	func();										
});


async function func(){

	await new Promise((resolve,reject)=>{
		
		setTimeout(resolve,inputs[1].value)
		
	})

	output.innerHTML=inputs[0].value;
}



