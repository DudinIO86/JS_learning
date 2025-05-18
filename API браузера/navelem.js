console.log(document.documentElement);
console.log(document.body);
console.log(document.head);

console.log(document.body.firstChild);
console.log(document.body.lastChild);
console.log(document.body.childNodes);
console.log(document.body.children);

for(let value of document.body.children){
    console.log(value.localName==='div'?"Это DIV":"Это не DIV");
}

for (let value of document.body.childNodes){
    console.dir(value.nodeType);
}

for (let value of document.body.childNodes){
    console.dir(value.nodeValue);
}