fetch("https://github.com/DudinIO86/Zoopark_project")
.then((result) => {
    if(result.ok){
        return result.text();
    }
    throw new Error('Ошибка не все ок');
})
.then(data=>{
    console.log(data);
})
.catch((err)=>{
console.error('Ошибка');
})