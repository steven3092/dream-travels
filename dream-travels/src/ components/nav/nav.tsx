import { ReactNode } from "react";
import "./nav.scss";

export const Nav = ({ children }: { children: ReactNode }) => {
  return <nav className="dream-trips-nav">{children}</nav>;
};
