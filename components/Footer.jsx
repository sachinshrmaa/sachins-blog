import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-dark">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4">
            <Link href="/" className="navbar-brand" id="logo">
              SACHINSBLOG
            </Link>
            <p className="mt-md-2">Made with ❤ by Sachin</p>
            <small className="mt-md-2">2023&copy; All Rights Reserved</small>
          </div>
          <div className="col-md-8 my-md-0 my-4">
            <div className="row">
              <div className="col">
                {/* <h5>Quick Links</h5> */}
                <nav class="nav  flex-column">
                  <Link class="nav-link text-dark" href="/about">
                    About
                  </Link>
                  <Link class="nav-link text-dark" href="/bookshelf">
                    Bookshelf
                  </Link>
                  <Link class="nav-link text-dark" href="/contact">
                    Contact
                  </Link>
                  <Link class="nav-link text-dark" href="/newsletter">
                    Newsletter
                  </Link>
                </nav>
              </div>
              <div className="col">
                {/* <h5>Resources</h5> */}
                <nav class="nav flex-column">
                  <Link
                    class="nav-link text-dark"
                    href="https://betaurus.shop"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Merchandise
                  </Link>
                  <Link
                    class="nav-link text-dark"
                    href="https://open.spotify.com/show/3wgVx0oPtaBG8adhmjt7CW"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Podcast
                  </Link>
                  <Link
                    class="nav-link text-dark"
                    href="https://work.sachinsblog.in"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Work with Me
                  </Link>
                  <Link
                    class="nav-link text-dark"
                    href="https://thebasics.sachinsblog.in"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Masterclass
                  </Link>
                </nav>
              </div>
              <div className="col">
                {/* <h5>Support</h5> */}
                <nav class="nav  flex-column">
                  <Link class="nav-link text-dark" href="/privacy">
                    Privacy Policy
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
