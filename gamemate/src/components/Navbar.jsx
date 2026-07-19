import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as N from "../styles/StyledNavbar";

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isHome = pathname === "/home";
  const isProfile = pathname === "/profile";

  return (
    <N.Nav>
      <N.Item $selected={isHome} onClick={() => navigate("/home")}>
        <N.NBtn >
          <img
            id="home"
            src={`${process.env.PUBLIC_URL}/images/home_e.svg`}
            alt="home"
          />
        </N.NBtn>
      </N.Item>
      <N.Item $selected={isProfile} onClick={() => navigate("/profile")}>
        <N.NBtn >
          <img
            id="prof"
            src={`${process.env.PUBLIC_URL}/images/prof_e.svg`}
            alt="prof"
          />
        </N.NBtn>
      </N.Item>
    </N.Nav>
  );
};

export default Navbar;
