import React, { useRef } from "react";
import "./Email.css";
import email from "./email.png";
import emailjs from "@emailjs/browser";

export default function Email() {
  const form = useRef();

  const submit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ldwm96k", // Your service ID
        "template_8hj4jjo", // Your template ID
        form.current,
        "iIWeZyrvPNqzbRJ3u" // Your public key
      )
      .then(
        (result) => {
          alert("Message Sent Successfully!");
        },
        (error) => {
          alert("An error occurred, please try again.");
        }
      );

    e.target.reset();
  };

  const style = {
    backgroundImage: `url(${email})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    width: "100%",
  };

  return (
    <form ref={form} onSubmit={submit}>
      <div className="email" style={style}>
        <div className="input">
          <div className="inputdiv">
            <h2 className="y2">Остались вопросы?</h2>
            <p className="yellow">Оставь заявку и мы ответим</p>
            <label>
              <input
                type="text"
                name="user_name"
                placeholder="Имя"
                required
              />
            </label>
            <br />
            <label>
              <input
                type="tel"
                name="user_phone"
                placeholder="Телефон"
                pattern="[0-9]{9}"
                title="Введите корректный номер телефона"
                required
              />
            </label>
            <br />
            <label>
              <input
                type="email"
                name="user_email"
                placeholder="Почта"
                required
              />
            </label>
            <br />
            <button type="submit" className="submit">
              Оставить заявку
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
