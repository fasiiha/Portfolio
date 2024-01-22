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
        <div className="Contitle">Let{"'"}s start a project together</div>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <h5>What{"'"}s your name?</h5>
          <input
            type="text"
            className="name"
            placeholder="Full Name"
            name="your_name"
          />

          <h5>What{"'"}s your email?</h5>
          <input
            type="text"
            className="email"
            placeholder="example@mail.com"
            name="your_email"
          />

          <h5>What{"'"}s the name of your organization?</h5>
          <input
            type="text"
            className="email"
            placeholder="Organization Name"
          />

          <h5>What services are you looking for?</h5>
          <input type="text" className="email" placeholder="Web Design, Web Development..." />

          <h5>Your message</h5>
          <textarea
            name="message"
            className="msg"
            cols="30"
            rows="5"
            placeholder="Message"
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
