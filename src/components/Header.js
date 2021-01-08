import React from "react";

const Header = ({ title, subtitle }) => {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
    </div>
  );
};

Header.defaultProps = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of computer",
};

export default Header;
