// const contentEl=document.querySelector('.content');
//
// const h1El=document.createElement('h1');
// h1El.classList.add('title');
// h1El.textContent = 'Text';
// contentEl.appendChild(h1El);

const contentEl=document.querySelector('.content');
const btnAdd=document.querySelector('.add');
const btnDel=document.querySelector('.del');
const btnClone=document.querySelector('.clone');

btnAdd.addEventListener('click',()=>{
    const newDivEl=document.createElement('div');
    newDivEl.classList.add('block');
    const numbeDiv=contentEl.children.length+1;
    newDivEl.textContent=numbeDiv;
    contentEl.appendChild(newDivEl);
});

btnDel.addEventListener('click',()=>{
    const lastBox=contentEl.lastChild;
    contentEl.removeChild(lastBox);
});

btnClone.addEventListener('click',()=>{
    const lastBox=contentEl.lastChild;
    const clone=lastBox.cloneNode(true);
    contentEl.appendChild(clone);
})