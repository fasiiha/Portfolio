import "./Contact.css";
import hireImg from "../../assets/ui.png";
// import { Link } from "react-scroll";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_avvwdmv",
        "template_kqmja6d",
        form.current,
        "uTdC8ulaEjby5a3Vdg1Bd"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <section className="contact">
        <h1 className="title">Contact Me</h1>
        <span className="description">nne,wmenw,e</span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Name" name="your_name"/>
          <input type="text" className="email" placeholder="Email" name="your_email" />
          <textarea
            name="message"
            className="msg"
            cols="30"
            rows="5"
            placeholder="MSG"
          ></textarea>
          <button type="submit" value="Send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <img src={hireImg} alt="LinkImg" className="link" />
            <img src={hireImg} alt="LinkImg" className="link" />
            <img src={hireImg} alt="LinkImg" className="link" />
            <img src={hireImg} alt="LinkImg" className="link" />
          </div>
        </form>
      </section>
    </>
  );
}
export default Contact;
