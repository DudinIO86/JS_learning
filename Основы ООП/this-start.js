const checkThis=function(){
    console.log(this);
}

checkThis();

const checkThisInObject={
    testProperty:true,
    checkThis:function(){
        console.log(this);
    },
};

checkThisInObject.checkThis();