import chevronLeft from "../../assets/images/chevron-logo-left.svg";
import chevronRight from "../../assets/images/chevron-logo-right.svg";
import "./CalendarRow.css";

function CalendarRow({ weekDates, selectedDate, onPrev, onNext, onSelect }) {
  return (
    <div className="calendar-row">
      <div className="calendar-row__week">
        <button
          className="calendar-row__arrow calendar-row__arrow--left"
          onClick={onPrev}
        >
          <img src={chevronLeft} alt="Previous week" />
        </button>

        <div className="calendar-row__days">
          {weekDates.map((dayObj, index) => {
            const isSelected =
              dayObj.fullDate.toDateString() === selectedDate.toDateString();
            return (
              <button
                key={index}
                className={`calendar-row__day ${
                  isSelected ? "calendar-row__day--selected" : ""
                }`}
                onClick={() => onSelect(dayObj.fullDate)}
              >
                <div className="calendar-row__day-name">{dayObj.day}</div>
                <div className="calendar-row__day-number">{dayObj.date}</div>
              </button>
            );
          })}
        </div>

        <button
          className="calendar-row__arrow calendar-row__arrow--right"
          onClick={onNext}
        >
          <img src={chevronRight} alt="Next week" />
        </button>
      </div>
    </div>
  );
}

export default CalendarRow;
