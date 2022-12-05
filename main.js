fetch("https://restcountries.com/v3.1/").then((promise)=>
    console.log(promise.json())
    )