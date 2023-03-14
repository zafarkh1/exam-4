let key = "1e31a6fe70964dccbb73ff1df7541bb0";
let url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${key}`;

const cardWrapper = document.querySelector(".card-wrapper");

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const articles = data.articles;
    const filteredArticles = articles.filter((element) => {
      return element.author && element.author.length <= 13 && element.urlToImage && (element.urlToImage.endsWith(".jpg") || element.urlToImage.endsWith(".png"));
    });
    const render = filteredArticles.map((element) => {
			console.log(element.urlToImage);
      return `
		 <div class="myCard d-lg-flex flex-lg-row gap-5">
					<img src="${element.urlToImage}" alt="${element.author}">
					<div class="right">
						<h5>Business</h5>
						<h2>${element.author}</h2>
						<p>${element.description}</p>
					</div>
				</div>
		`;
    });
    cardWrapper.innerHTML = render.join("");
  })
  .catch((error) => {
    throw error;
  });
