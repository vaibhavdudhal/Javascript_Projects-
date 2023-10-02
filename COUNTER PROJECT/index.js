const countValue=document.getElementById('counter');

function increment () {
    //get the value 
    let value=parseInt(countValue.innerText);
    // update the value
    value=value+1;
    // set the value
    countValue.innerText=value


};

const decrement= () => {
    let value=parseInt(countValue.innerText);
    value=value-1;
    countValue.innerText=value

};



