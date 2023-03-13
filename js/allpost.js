let key = "1e31a6fe70964dccbb73ff1df7541bb0";
let url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${key}`;

const cardWrapper = document.querySelector(".card-wrapper");

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const articles = data.articles;
    console.log(articles);
    const render = articles.map((element) => {
      console.log(element.title);
      console.log(element.title);
      console.log(element.title);
      return `
		 <div class="myCard d-flex gap-5">
					<img src="${element.urlToImage}" alt="${element.author}">
					<div class="right">
						<h5>Business</h5>
						<h2 class="fw-bolder">${element.author}</h2>
						<p>${element.description}</p>
					</div>
				</div>
		`;
    });
    cardWrapper.innerHTML = render.join("");
  });