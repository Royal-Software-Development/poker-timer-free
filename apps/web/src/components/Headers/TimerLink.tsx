import { NavLink } from "react-router-dom";
import { Timer } from "lucide-react";

const TimerLink = () => {
  return (
    <NavLink
      to={"/timer"}
      target="_blank"
      aria-label="Go to timer"
      title="Go to timer!"
    >
      <Timer />
    </NavLink>
  );
};

export default TimerLink;
