const start = document.getElementById("start")

const iniciar = document.getElementById("iniciar")

let speed = Number.parseInt(localStorage.getItem("speed")) || 10;

iniciar.value = speed

start.addEventListener("change",(event) =>{
	speed = Number.parseInt (event.target.value)
	localStorage.setItem("speed", speed)
})

iniciar.addEventListener("click",()=>{
	sendMessage({speed})
})

function sendMessage(message){
	chrome.tabs.query({active:true, currentWindow:true}, (tabs) =>{
		chrome.tabs.sendMessage(tabs[0].id,message, (response) =>{

		})
	})
}
