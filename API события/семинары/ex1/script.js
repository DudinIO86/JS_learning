document.querySelector('ul').addEventListener('mouseover', (e) => {
    if(e.target.tagName==='A'){
        e.target.style.backgroundColor="#f0f0f0";
    }
});

document.querySelector('ul').addEventListener('mouseout', (e) => {
    if(e.target.tagName==='A'){
        e.target.style.backgroundColor="#ffffff";
    }
});

document.querySelector('ul').addEventListener('click', (e) => {
    e.preventDefault();
    const activeEl=document.querySelector('.active');
    if(activeEl){
        activeEl.classList.remove('active');
    }
    if(e.target.tagName==='A'){
        e.target.classList.add('active');
    }
});