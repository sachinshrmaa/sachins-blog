export const metadata = {
  title: "About | SachinsBlog",
  description:
    "I feel very lucky to get to onnect with so many extraordinary people.",
};

const About = () => {
  return (
    <div className="col-md-6 m-auto col-11 my-5">
      <h2 className="pageHeading ">About</h2>
      <p>
        Hi, My name is Sachin and I&apos;m an undergrad bachelor&apos;s student
        (computer science). I like to spend my free time reading books, writing
        journals, trying to design fun software, and explore new stuffs.
      </p>

      <h2 className="pageHeading mt-5">What Inpires me?</h2>
      <p>
        I feel very lucky to get to connect with so many extraordinary people.
        Whenever I have the chance, I set aside a few minutes to share what
        I&apos;m learning here on the Sachins Blog. Thanks for reading.
      </p>
      <p>
        {" "}
        For comments or questions, feel free to ask me on{" "}
        <a
          href="http://twitter.com/sachinshrmaa"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </a>{" "}
        or via email by going to the “Contact” link at the bottom of the page (I
        respond to every email/tweets I get).
      </p>
    </div>
  );
};

export default About;
