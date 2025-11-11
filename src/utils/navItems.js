import homeGray from "../assets/images/home-gray.svg";
import homeCyan from "../assets/images/home-cyan.svg";
import targetGray from "../assets/images/target-gray.svg";
import targetCyan from "../assets/images/target-cyan.svg";
import journalGray from "../assets/images/journal-gray.svg";
import journalCyan from "../assets/images/journal-cyan.svg";
import chartGray from "../assets/images/chart-gray.svg";
import chartCyan from "../assets/images/chart-cyan.svg";

const navItems = [
  { id: "home", path: "/", gray: homeGray, cyan: homeCyan, label: "Home" },
  {
    id: "goals",
    path: "/goals",
    gray: targetGray,
    cyan: targetCyan,
    label: "Goals",
  },
  {
    id: "journal",
    path: "/journal",
    gray: journalGray,
    cyan: journalCyan,
    label: "Journal",
  },
  {
    id: "insights",
    path: "/insights",
    gray: chartGray,
    cyan: chartCyan,
    label: "Insights",
  },
];

export default navItems;
