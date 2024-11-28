let element = 1;

function callback(){
    document.querySelectorAll("h4")[1].innerHTML = element++;
}

setInterval(callback,1000);