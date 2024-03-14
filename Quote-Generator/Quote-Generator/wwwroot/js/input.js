const generateQuote = () => {
    const input = document.getElementById('quoteInput').value;
    const output = document.getElementById('quoteOutput');
    const quote = input ? `"${input}"` : '"No quote provided"';
    output.innerHTML = `<p>Your Quote: ${quote}</p>`;
};