const cardWrapper = document.querySelector(".card-wrapper");
let myKey = "1e31a6fe70964dccbb73ff1df7541bb0";
const data = "2023-03-12";
const keyword = "apple";
let url = `https://newsapi.org/v2/everything?q=${keyword}&from=${data}&to=${data}&sortBy=publishedAt&apiKey=${myKey}`;

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const articles = data.articles.filter(
      (element) =>
        element.title.toLowerCase().includes(keyword.toLowerCase())
    ).slice(-3);
    const render = articles.map((element) => {
      return `
			<div class="card" style="width: 25rem;">
				<img src="${element.urlToImage}" class="card-img-top" alt="${element.title}">
 					<div class="card-body">
 						<p>By ${element.author} l ${element.publishedAt}</p>
 						<h5 class="card-title fw-bolder">${element.title}</h5>
 						<p class="card-text">${element.description}
 						</p>
 					</div>
			</div>
`;
    });
    cardWrapper.innerHTML = render.join("");
  });