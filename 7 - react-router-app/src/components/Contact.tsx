import { Link, NavLink } from "react-router";
import "../index.css";

const Contact = () => {
  return (
    <>
      <h2>Contact Page</h2>
      {/* <div>
        <a href="/">Home</a>
        <a href="/about">About Us</a>
      </div> */}

      <div>
        <Link to="/">Home</Link>
        {"    "} <Link to="/about">About Us</Link>
        {"    "}
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "highlight" : "")}
        >
          Contact Us
        </NavLink>
      </div>
    </>
  );
};

export default Contact;
