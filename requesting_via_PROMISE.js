

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

fakeRequestPromise('ajtin.com/new/dress')
    .then(()=>
    {
        console.log("heyy worked");
        fakeRequestPromise('ajtin.com/new/dress/undies')
        .then(()=>
        {
            console.log("worked for the undies");
        })
        .catch(()=>
        {
            console.log("catching the undies part")
        })
    }).catch(()=>
    {
        console.log("here throws error");
    })

fakeRequestPromise('ajtin.com/new/dress')
    .then((data)=>
    {
        console.log("it worked");
        console.log(data);
        return fakeRequestPromise('ajtin/part2');
    })
    .then((data)=>
    {
        console.log("workded for the 2nd one");
        console.log(data);
        return fakeRequestPromise('ajtin/part3');
    })
    .then((data)=>
    {
        console.log("workded for the 3nd one");
        console.log(data);
        return fakeRequestPromise('ajtin/part4');
    })
    .catch((err)=>
    {
        console.log(" failed")
        console.log(err);
    })
