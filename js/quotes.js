const quotes = [
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
    },
    {
        quote: "Life is what happens when you're busy making other plans",
        author: "John Lennon",
    },
    {
        quote : "The world is a book and those who do not travel read only one page.",
        author : "Saint Augustine",
    },
    {
        quote : "Be yourself; everyone else is already taken,",
        author : "Oscar Wilde",
    },
    {
        quote : "So many books, so little time.",
        author : "Frank Zappa",
    },
    {
        quote : "A room without books is like a body without a soul.",
        author : "Marcus Tullius Cicero", 
    },
    {
        quote : "You only live once, but if you do it right, once is enough.",
        author : "Mae West",
    },
    {
        quote : "Be the change that you wish to see in the world.",
        author : "Mahatma Gandhi",
    },
    {
        quote : "In three words I can sum up everything I've learned about life: it goes on.",
        author : "Robert Frost",
    },
    {
        quote : "If you tell the truth, you don't have to remember anything.",
        author : "Mark Twain",
    },
]

const quote = document.querySelector(".quote");
const author = document.querySelector(".author");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author} -`;