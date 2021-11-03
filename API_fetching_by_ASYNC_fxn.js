const apidata= async ()=>
{
    try{
        const maindata= await axios.get('https://api.cryptonator.com/api/full/btc-usd')
    console.log(maindata.data.ticker.price)
    }
    catch(e)
    {
        console.log("error here",e)
    }
}
