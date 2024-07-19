import { IoIosPaperPlane } from "react-icons/io";

const Form = () => {
  return (
    <section className="contact-form">
      <h3 className="h3 form-title">Contact Form</h3>
      <form action="#" className="form">
        <div className="input-wrapper">
          <input
            type="text"
            name="fullname"
            className="form-input"
            placeholder="Full name"
            required
          />
          <input
            type="email"
            name="email"
            className="form-input"
            placeholder="Email address"
            required
          />
        </div>
        <textarea
          name="message"
          className="form-input"
          placeholder="Your Message"
          required
        ></textarea>
        <button className="form-btn" type="submit" disabled>
          <IoIosPaperPlane className="size-5" />
          <span>Send Message</span>
        </button>
      </form>
    </section>
  );
};

export default Form;
