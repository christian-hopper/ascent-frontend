import { useState, useEffect } from "react";
import Header from "../../components/Header/Header.jsx";
import JournalInput from "../../components/JournalInput/JournalInput.jsx";
import { journalPrompts, moods } from "../../utils/constants.js";
import { fetchRandomQuotes } from "../../utils/RandomQuotesApi.js";
import "./Journal.css";

export default function Journal() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [selectedPrompt, setSelectedPrompt] = useState(0);
  const [entries, setEntries] = useState([]);

  // Quote handling
  const [quotes, setQuotes] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  // Load journal entries
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("journalEntries")) || [];
    setEntries(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("journalEntries", JSON.stringify(entries));
  }, [entries]);

  // Fetch quotes
  useEffect(() => {
    async function getQuotes() {
      try {
        const data = await fetchRandomQuotes();
        if (data.length === 0) {
          setError("Nothing found.");
        } else {
          setQuotes(data);
        }
      } catch (err) {
        setError(
          "Sorry, something went wrong during the request. Please try again later."
        );
      } finally {
        setIsLoading(false);
      }
    }

    getQuotes();
  }, []);

  const handleSave = (text) => {
    if (!text.trim()) return;

    const newEntry = {
      id: Date.now(),
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
      mood: selectedMood !== null ? moods[selectedMood].emoji : "📝",
      text,
      prompt: journalPrompts[selectedPrompt],
    };

    setEntries((prev) => [newEntry, ...prev]);
  };

  return (
    <div className="journal">
      {/* Header */}
      <Header title="Journal" dateType="full" />

      {/* Motivational Quotes Section */}
      <div className="journal__section">
        <h3 className="journal__section-title">Daily Motivation</h3>

        {isLoading && <p className="journal__loading">Loading quotes...</p>}
        {error && <p className="journal__error">{error}</p>}

        {!isLoading && !error && (
          <>
            <div className="journal__quotes">
              {quotes.slice(0, visibleCount).map((quote) => (
                <div key={quote._id} className="journal__quote">
                  <p className="journal__quote-text">“{quote.content}”</p>
                  <p className="journal__quote-author">— {quote.author}</p>
                </div>
              ))}
            </div>

            {visibleCount < quotes.length && (
              <button
                className="journal__show-more"
                onClick={() => setVisibleCount((prev) => prev + 1)}
              >
                Show More
              </button>
            )}
          </>
        )}
      </div>

      {/* Mood Selector */}
      <div className="journal__section">
        <h3 className="journal__section-title">How are you feeling?</h3>
        <div className="journal__moods">
          {moods.map((mood, index) => (
            <button
              key={mood.label}
              onClick={() => setSelectedMood(index)}
              className={`journal__mood ${
                selectedMood === index
                  ? `journal__mood--active journal__mood--${mood.label.toLowerCase()}`
                  : "journal__mood--inactive"
              }`}
            >
              <span className="journal__mood-emoji">{mood.emoji}</span>
              <span className="journal__mood-label">{mood.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Daily Reflection Prompts */}
      <div className="journal__section">
        <h3 className="journal__section-title">Daily Reflection</h3>
        <div className="journal__prompts">
          {journalPrompts.map((prompt, index) => (
            <button
              key={index}
              onClick={() => setSelectedPrompt(index)}
              className={`journal__prompt ${
                selectedPrompt === index
                  ? "journal__prompt--active"
                  : "journal__prompt--inactive"
              }`}
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>

      {/* Journal Input + Past Entries */}
      <div className="journal__grid">
        <JournalInput
          selectedPrompt={journalPrompts[selectedPrompt]}
          onSave={handleSave}
        />

        <div className="journal__past-entries">
          <h3 className="journal__section-title">Recent Entries</h3>
          <div className="journal__entries-list">
            {entries.length > 0 ? (
              entries.map((entry) => (
                <div key={entry.id} className="journal__entry">
                  <div className="journal__entry-header">
                    <span className="journal__entry-date">{entry.date}</span>
                    <span className="journal__entry-emoji">{entry.mood}</span>
                  </div>
                  <p className="journal__entry-text">{entry.text}</p>
                </div>
              ))
            ) : (
              <p className="journal__empty">No entries yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
