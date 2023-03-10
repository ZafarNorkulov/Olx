import React from "react";

const Button = ({ type, text }) => {
  return (
    <a className={type == "light" ? "btn--light" : "btn--dark"} href="#">
      {text}
    </a>
  );
};
const Container = ({ children }) => {
  return <div className="container">{children}</div>;
};

export { Button, Container };
