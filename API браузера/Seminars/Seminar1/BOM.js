window.onresize = function(){
    console.log(`Width=${window.innerWidth}px\nHeight=${window.innerHeight}px`);
};

// window.onbeforeunload = (evt)=>{
// evt.preventDefault();
// }

document.querySelector('.back-button').onclick = ()=>{
    history.back();
}

document.querySelector('.next-button').onclick = ()=>{
    history.forward();
}