import { useState } from "react";
import Modal from "../Modal/Modal";
import targetIcon from "../../assets/images/target-cyan.svg";
import tag from "../../assets/images/tag-icon.svg";
import calendar from "../../assets/images/calendar-icon.svg";
import clock from "../../assets/images/clock-icon.svg";
import "./AddHabitModal.css";

function AddHabitModal({
  isOpen,
  onClose,
  onSubmit,
  categories = [],
  cancelText = "Cancel",
  submitText = "Create Habit",
}) {
  const [habitName, setHabitName] = useState("");
  const [category, setCategory] = useState("");
  const [target, setTarget] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newHabit = { name: habitName, category, target, description };
    onSubmit(newHabit);
    onClose();
    setHabitName("");
    setCategory("");
    setTarget("");
    setDescription("");
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      icon={targetIcon}
      title="Create New Habit"
    >
      <form className="add-habit__form" onSubmit={handleSubmit}>
        <div className="add-habit__form-field">
          <label htmlFor="habitName" className="add-habit__label">
            <img src={tag} alt="Tag Icon" className="add-habit__label-icon" />
            Habit Name
          </label>
          <input
            id="habitName"
            type="text"
            value={habitName}
            onChange={(e) => setHabitName(e.target.value)}
            placeholder="e.g., Morning Meditation"
            className="add-habit__input"
            required
          />
        </div>

        <div className="add-habit__form-field">
          <label htmlFor="category" className="add-habit__label">
            <img
              src={calendar}
              alt="Calendar Icon"
              className="add-habit__label-icon"
            />
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="add-habit__input add-habit__select"
            required
          >
            <option value="" disabled>
              Select a category
            </option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="add-habit__form-field">
          <label htmlFor="target" className="add-habit__label">
            <img
              src={clock}
              alt="Clock Icon"
              className="add-habit__label-icon"
            />
            Daily Target
          </label>
          <input
            id="target"
            type="text"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            placeholder="e.g., 10 minutes, 3 times"
            className="add-habit__input"
          />
        </div>

        <div className="add-habit__form-field">
          <label htmlFor="description" className="add-habit__label">
            Description (Optional)
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Why is this habit important to you?"
            className="add-habit__input add-habit__textarea"
          ></textarea>
        </div>

        <div className="add-habit__actions">
          <button
            type="button"
            className="add-habit__button add-habit__button--cancel"
            onClick={onClose}
          >
            {cancelText}
          </button>
          <button
            type="submit"
            className="add-habit__button add-habit__button--create"
          >
            {submitText}
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default AddHabitModal;
