const formData=new FormData();

formData.append("name","Slava");
formData.append("surname","Belkin");

const xhr=new XMLHttpRequest();

xhr.open('POST','https://httpbin.org/post');

xhr.send(formData);

xhr.onload=function(){
    if(xhr.status!=200){
        console.log(`Error ${xhr.status}: ${xhr.statusText}`);
    } else{
        console.log(`user: ${xhr.response}`);
    }
}

xhr.onprogress=function(){
    console.log(`Get from server: ${event.loaded} bytes`);
}

xhr.onerror=function(){
    console.log('Error');
}