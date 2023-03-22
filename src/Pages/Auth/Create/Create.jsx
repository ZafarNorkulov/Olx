import React, { useState } from "react";
import { auth, provider } from "../../../Firbase/firbaseconfig";
import { Button } from "../../../Utils/Components";
import { FcGoogle } from "react-icons/fc";
import "./Create.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
const Create = () => {
  const createUserWithGoogle = () => {
    auth.signInWithPopup(provider).then((res) => {
      console.log(Math.floor(Math.random() * 80000000));
      fetch("https://api.escuelajs.co/api/v1/users", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name: res.additionalUserInfo.profile.name,
          email: res.additionalUserInfo.profile.email,
          password: Math.floor(Math.random() * 80000000),
          avatar: res.additionalUserInfo.profile.picture,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    });
  };

  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // cosnt[(useRouteLoaderData, setUserData)] = useState({
  //     name: "",
  //     password: "",
  //     email: "",
  //     avatar: "",
  // });

  // const createUser = (e) => {
  //     e.preventDefault();
  //     fetch("https://api.escuelajs.co/api/v1/users", userData)
  //         .then((res) => res.json)
  //         .then((data) => {
  //             if (data.email) {
  //                 dispatch({ email: data.email, type: "CREATE_USER" });
  //                 navigate("/");
  //             }
  //         })
  //         .catch((err) => console.log(err));
  // };

  return (
    <div className="signup">
      <div className="signup__container">
        <button onClick={createUserWithGoogle} className={"auth__google"}>
          <FcGoogle className="auth-google__icons" />
          Google orqali kirish
        </button>
        <div className="signup__or">
          <span className="signup__line" />
          <span className="signup-or__text">YOKI</span>
          <span className="signup__line" />
        </div>
        <form className="signup__signup">
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" required />
          <label htmlFor="email">Your email</label>
          <input type="email" id="email" required />
          <label htmlFor="password">Parol</label>
          <input type="password" id="password" minLength={8} required />
          <label htmlFor="avatar">Avatar</label>
          <input type="url" id="avatar" required />
          <Button mode={"dark"} text="Ro'yxatdan o'tish" />

          <span className="signup__condition">
            Kirib, bizning{" "}
            <a href="https://help.olx.uz/hc/uz/articles/360009197178">
              Foydalanish shartlari
            </a>{" "}
            qabul qilasiz.
          </span>
        </form>
      </div>
    </div>
  );
};

export default Create;
