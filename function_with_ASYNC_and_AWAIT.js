async function hello()
{
    throw "fucked happedn"
    return 'jatin here';
    
}

hello().catch((err)=>{
    console.log('sht');
})


const login=async(username,password)=>{
    if(!username|| !password)
    {
        throw "missing data";
    }
    if(password==='jatin')
    {
        return "welcome "
    }

}

login('jatin','jatin')
    .then((data)=>
    {
        console.log("welcome",data);
    })
    .catch((err)=>
    {
        console.log("sorry",err);
    })
//------------------------------------------------------------------------------  
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

async function changeit(){
    await changecolor('red',1000);
    console.log("hey there");
    await changecolor('green',1000);
    await changecolor('blue',1000);
    await changecolor('purple',1000);
}
