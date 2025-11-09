import { useState } from "react";
import "./JournalInput.css";

function JournalInput({ selectedPrompt, onSave }) {
  const [journalText, setJournalText] = useState("");

  const handleSave = () => {
    onSave(journalText);
    setJournalText("");
  };

  return (
    <div className="journal-input">
      <div className="journal-input__background" />
      <div className="journal-input__container">
        <p className="journal-input__prompt">{selectedPrompt}</p>

        <textarea
          value={journalText}
          onChange={(e) => setJournalText(e.target.value)}
          placeholder="Start writing..."
          className="journal-input__textarea"
        />

        <div className="journal-input__footer">
          <span className="journal-input__char-count">
            {journalText.length} characters
          </span>
          <button onClick={handleSave} className="journal-input__save-button">
            Save Entry
          </button>
        </div>
      </div>
    </div>
  );
}

export default JournalInput;
