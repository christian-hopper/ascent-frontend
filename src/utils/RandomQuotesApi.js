async function fetchRandomQuotes() {
  try {
    const res = await fetch(
      "https://api.allorigins.win/get?url=https://zenquotes.io/api/quotes"
    );
    if (!res.ok) throw new Error("Network response was not ok");

    const dataWrapper = await res.json();
    const data = JSON.parse(dataWrapper.contents);

    return data.slice(0, 1).map((quote, index) => ({
      id: index,
      content: quote.q,
      author: quote.a,
    }));
  } catch (error) {
    console.error("Error fetching quotes:", error);
    throw error;
  }
}

export { fetchRandomQuotes };
