function finalcolor()
{
    const r=Math.floor(Math.random()*255+1);
    const g=Math.floor(Math.random()*255+1);
    const b=Math.floor(Math.random()*255+1);
    return `rgb(${r},${g},${b})`;
}

const changecolor= (finalcolor,delay)=>
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
                document.body.style.backgroundColor=finalcolor;
                resolve();
        },delay);
    })
}

changecolor(finalcolor,3000)
    .then(()=>
    {
        changecolor(finalcolor,3000);
    })
    
