const container = document.querySelector(".container.text");
const form = document.getElementById("form");
const name = document.getElementById("name");
const heading = document.getElementById("heading");
const title = document.getElementById("title");
const paragraph = document.getElementById("paragraph");
const job = document.getElementById("interests");
const fileInput = document.getElementById("photo");
const selfPhoto = document.getElementById("selfPhoto");
const imagePreview = document.getElementById("image-preview");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let currentDate = new Date();
  let year = currentDate.getFullYear();
  let month = currentDate.getMonth() + 1; // Add 1 because getMonth() returns 0-based index
  let day = currentDate.getDate();

  // Convert month and day to two digits if they are less than 10
  if (month < 10) {
    month = "0" + month;
  }
  if (day < 10) {
    day = "0" + day;
  }
  // fileInput.addEventListener("change", (event) => {
  //   const file = event.target.files[0];
  //   const reader = new FileReader();

  //   reader.addEventListener("load", () => {
  //     imagePreview.src = reader.result;
  //   });

  //   reader.readAsDataURL(file);
  // });

  let formattedDate = year + "-" + month + "-" + day;

  form.classList.add("none");
  container.innerHTML = `
	<div class="wrapper">
		<div class="img">
	  <img src="./images/photo-of-woman-wearing-eyeglasses-3184405.png" alt="">
</div>
<div class="text">
	<div class="intro d-sm-flex flex-sm-row align-items-sm-center gap-sm-4 d-flex justify-content-sm-start justify-content-center gap-4">
		<div><img src="./images/Image.png" alt=""></div>
		<div class="data">
			<span>${name.value}</span>
			<p>Posted on ${formattedDate}</p>
		</div>
	</div>
	<h1>${title.value}</h1>
	<p class="fw-bolder">Startup (#${job.value})</p>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
		magna
		aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at
		in
		tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo.
		Neque
		egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
		magna
		aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at
		in
		tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo.
		Neque
		egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
</div>
	</div>
	`;
});
