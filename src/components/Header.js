import React from "react";

const Header = ({ title, subtitle }) => {
  return (
    <div className="header">
      <h1 className="header__title">{title}</h1>
      <h2 className="header__subtitle">{subtitle}</h2>
    </div>
  );
};

Header.defaultProps = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of computer",
};

export default Header;
