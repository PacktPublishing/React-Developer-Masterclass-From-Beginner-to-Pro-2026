import { Link } from "react-router";

const About = () => {
  return (
    <>
      <h2>About Page</h2>
      {/* <div>
        <a href="/">Home</a>
        <a href="/contact">Contact Us</a>
      </div> */}

      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
    </>
  );
};

export default About;
