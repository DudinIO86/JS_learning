const createCounter=()=>{
    let counter=0;
    return ()=>{
        return ++counter;
    }
}


const counter1=createCounter();
counter1();
counter1();

const counter2=createCounter();
counter2();
counter2();