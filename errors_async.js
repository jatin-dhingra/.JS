const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}


async function newrequest()
{
    try{
        let var1= await fakeRequestPromise('jatin.com/1');
        let var2= await fakeRequestPromise('jatin.com/2');
        console.log(var1)
    }
    catch(e){
        console.log("sorryyyy");
        console.log(e);
    }

}
