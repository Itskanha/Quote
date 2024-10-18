const quote = document.getElementById("quote");
const author = document.getElementById("author");
const quoteBtn = document.getElementById("quoteBtn");
const tweetBtn = document.getElementById("tweetBtn");


const api_url = "http://api.quotable.io/random";

async function getquote(url) {
    const response = await fetch(url);
    var data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "---- by " + author.innerHTML, "Tweet Window", "width=600, height=300");
}

quoteBtn.addEventListener("click", () => {
    getquote(api_url);
})

tweetBtn.addEventListener("click", tweet);