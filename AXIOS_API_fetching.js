axios.get('https://api.cryptonator.com/api/full/btc-usd')
    .then((res)=>
    {
        console.log(res.data.ticker.price);
    })
    .catch((e)=>
    {
        console.log('undefined data input',e)
    })
