const quotes = [
    { text: "Believe you can and you're halfway there.", author: "- Theodore Roosevelt" },
    { text: "Be yourself; everyone else is already taken.", author: "- Oscar Wilde" },
    { text: "So many books, so little time.", author: "- Frank Zappa" },
    { text: "A room without books is like a body without a soul.", author: "- Marcus Tullius Cicero" },
    // Add more quotes as desired
];

document.querySelector('.welcome-btn').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.querySelector('.quote-text').textContent = `"${quote.text}"`;
    document.querySelector('.author').textContent = `- ${quote.author}`;
});