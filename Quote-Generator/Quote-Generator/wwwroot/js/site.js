// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

const quotes = [
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        author: "Albert Schweitzer"
    },
    {
        text: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde"
    },
    {
        text: "In the end, it's not the years in your life that count. It's the life in your years.",
        author: "Abraham Lincoln"
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    }
];

const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote-text');
const author = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');

function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteText.textContent = randomQuote.text;
    author.textContent = `- ${randomQuote.author}`;
}

newQuoteBtn.addEventListener('click', generateRandomQuote);

generateRandomQuote();

