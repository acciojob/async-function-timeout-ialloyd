//your JS code here. If required.
let inputs=document.getElementsByTagName('input');
let submitButton=document.getElementById('btn');
let output=document.getElementById('output');

submitButton.addEventListener('click',(event)=>{event.preventDefault();
setTimeout(()=>{
			output.innerHTML=inputs[0].value;
			
		},inputs[1].value)
		
										
});



