export const metadata = {
  title: "Bookshelf | SachinsBlog",
  description:
    "On this page, I share a list of books that I've read and found useful.",
};

const Bookshelf = () => {
  return (
    <div className="col-md-8 m-auto col-11 my-5">
      <h2 className="pageHeading">Bookshelf</h2>
      <p>
        On this page, I share a list of books that I&aposve read and found
        useful.
      </p>

      <ul className="my-4">
        <li>
          Malala Yusufzai- the girl who stoodup for education -{" "}
          <a href="https://amzn.to/42iq5gS" target="_blank" rel="noreferrer">
            view on amazon
          </a>
        </li>
        <li>
          The Secret by Rhona Bryne -{" "}
          <a href="https://amzn.to/3ozEYO9" target="_blank" rel="noreferrer">
            view on amazon
          </a>
        </li>
        <li>
          Sapiens By Yoval Noah Harari -{" "}
          <a href="https://amzn.to/3qgspYq" target="_blank" rel="noreferrer">
            view on amazon
          </a>
        </li>
        <li>
          21 Lessons for 21st Century By Yoval Noah Harari -{" "}
          <a href="https://amzn.to/3IIan7F" target="_blank" rel="noreferrer">
            view on amazon
          </a>
        </li>
        <li>
          Shoe Dog by Phil Knight -{" "}
          <a href="https://amzn.to/43exFKJ" target="_blank" rel="noreferrer">
            view on amazon
          </a>{" "}
        </li>
        <li>
          Meditiations By Marcus Aurelius -{" "}
          <a href="https://amzn.to/43eD8RV" target="_blank" rel="noreferrer">
            view on amazon
          </a>
        </li>
        <li>
          Wings of Fire: An Autobiography of Abdul Kalam -{" "}
          <a href="https://amzn.to/3qgrSWq" target="_blank" rel="noreferrer">
            view on amazon
          </a>{" "}
        </li>
        <li>
          Rich Dad Poor Dad by Robert T. Kiyosaki -{" "}
          <a href="https://amzn.to/3qihCNx" target="_blank" rel="noreferrer">
            view on amazon
          </a>{" "}
        </li>
      </ul>

      <small>
        <i>
          <b>Disclosure :</b> All items listed above are Amazon affiliate links.
          This means I receive a very small commission if you make a purchase
          when clicking through anything above, at no additional cost to you
          (this doesn&apos;’t change the price).{" "}
        </i>
      </small>
    </div>
  );
};

export default Bookshelf;
