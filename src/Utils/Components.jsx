import React from "react";

const Button = ({ mode, text }) => {
  return (
    <a className={mode == "light" ? "btn--light" : "btn--dark"} href="#">
      {text}
    </a>
  );
};
const Container = ({ children }) => {
  return <div className="container">{children}</div>;
};

export { Button, Container };
