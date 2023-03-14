const cardWrapper = document.querySelector(".card-wrapper");
let key = "1e31a6fe70964dccbb73ff1df7541bb0";
let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${key}`;

fetch(url).then((response) => response.json()).then((data) => {
	const articles = data.articles
	const filteredArticles = articles.filter((element) => {
		return element.urlToImage && element.urlToImage !== null
	})
	const render = filteredArticles.map((element) => {
		return `
		 <div class="myCard d-md-flex gap-5">
					<img src="${element.urlToImage}" alt="${element.author}" class="width: 10%">
					<div class="right">
						<h5>Business</h5>
						<h2 class="fw-bolder">${element.author}</h2>
						<p>${element.description}</p>
					</div>
				</div>
		`
  })
	cardWrapper.innerHTML = render.join("")
})