const cardWrapper = document.querySelector(".card-wrapper");
let myKey = "f31f67c6bb5f45598fcb527a93b05bff";
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
			<div class="card" style="width: 95%;">
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