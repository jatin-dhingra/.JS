const fakepromise= (url)=>
{
    return new Promise((resolve,reject)=>
    {
        const rand= Math.random();
        setTimeout(() => {
            if(rand>0.5)
            {
                resolve("our request is being resolved");
            }
            else
            {
                reject("the request is beign rejected");
            }
        },2000);
    })
}

fakepromise('jatin.com/page1')
    .then((data)=>
    {
        console.log("it been resolved");
        console.log(data);

    })
    .catch((err)=>
    {
        console.log("something happened throwing catch");
        console.log(err);
    })
