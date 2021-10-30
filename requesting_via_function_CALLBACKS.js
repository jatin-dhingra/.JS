const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}


fakeRequestCallback('jatin.com',(res)=>
{
    console.log("hey worked");
    console.log(res);
    fakeRequestCallback('book.com/page2',(res)=>
    {
        console.log("page 2 success");
        console.log(res);
        fakeRequestCallback('books.com/page3',(res)=>
        {
            console.log("on page3 ");

        },(err)=>
        {
            console.log("page 3 gives error"); 
            console.log(err);
        })
    },(err)=>
    {
        console.log("on page 2");
        console.log(err);
    })
},(err)=>{
    console.log("not worked");
    console.log(err);
    
})
