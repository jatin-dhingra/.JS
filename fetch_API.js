fetch('https://api.cryptonator.com/api/full/btc-usd')
    .then((res)=>
    {
        console.log('done',res)
        return res.json()

    })
    .then((data)=>
    {
        console.log('new data is here',data);
    })
    .catch((e)=>
    {
        console.log("errorrr",e)
        return e.json()
    })
