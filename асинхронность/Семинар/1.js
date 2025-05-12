function delayedMessage(message,delay){
    setTimeout(()=>{console.log(message)},delay);
}

delayedMessage("Сообщение 1",2000);
delayedMessage("Сообщение 2",1000);
delayedMessage("Сообщение 3",3000);

console.log("Finish");