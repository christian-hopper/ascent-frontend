const formatDate = (date = new Date(), formatType = "full") => {
  const options = {
    short: { month: "long", year: "numeric" },
    full: { weekday: "long", month: "long", day: "numeric", year: "numeric" },
    year: { month: "long", day: "numeric", year: "numeric" },
  };

  return date.toLocaleDateString("en-US", options[formatType]);
};

export { formatDate };
