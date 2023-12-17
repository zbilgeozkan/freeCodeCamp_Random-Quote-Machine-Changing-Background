const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://api.quotable.io/random";

async function getQuote(url) {
  const response = await fetch(url);
  var data = await response.json();

  quote.innerHTML = data.content;
  author.innerHTML = data.author;
}

getQuote(api_url);


function tweet() {
  window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "  ~ by " + author.innerHTML, "Tweet Window", "width=600, height=300");
}


//changing background
function changeBackground() {
		const red = Math.floor(Math.random() * 256);
		const green = Math.floor(Math.random() * 256);
		const blue = Math.floor(Math.random() * 256);
  
  // using inline variable
	  	document.body.style.background = "rgb(" + red + ", " + green + ", " + blue + ")";

		// using local variable
  // uncomment to see how it works
  
	  	// let bgColor = "rgb(" + red + ", " + green + ", " + blue + ")";
		//   document.body.style.background = bgColor;

		}