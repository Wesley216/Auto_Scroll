let isRunning = false

function iniciar(speed){

	isRunning = !isRunning
	if (isRunning)
		move(speed)

}

function move(speed){
	requestAnimationFrame(()=>{
		window.scrollBy(0, speed)
		if (isRunning)
			move(speed)
	})
}
chrome.runtime.onMessage.addListener((request, sender, senResponse)=>{
	iniciar(request.speed)
})
