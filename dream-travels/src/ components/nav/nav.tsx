import { Button } from "../button/button";
import dreamTripIcon from "../../assets/dream-trips-icon.svg";
import "./nav.scss";

export const Nav = () => {
  return (
    <nav className="dream-trips-nav">
      <img src={dreamTripIcon} alt="dot logo" />
      <Button type="button" name="test" backgroundColor="white" color="black" />
    </nav>
  );
};
