function loadData(url){
    const xhr =new XMLHttpRequest();

    xhr.onreadystatechange=function(){
        if(xhr.readyState===4&xhr.status===200){
            console.log(xhr.responseText);
        }
    }

    xhr.open('GET',url,true);
    xhr.send();
}

loadData("https://github.com/DudinIO86/Zoopark_project");