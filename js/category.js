let key = "1e31a6fe70964dccbb73ff1df7541bb0";
let url = `https://newsapi.org/v2/top-headlines/sources?category=businessapiKey=${key}`;

fetch(url).then((response) => response.json()).then((data) => {console.log(data)})