import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <Link className="navbar-brand" href="/" id={styles.logo}>
          Sachins Blog
        </Link>

        <button
          class="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link className="nav-link text-dark ms-md-2" href="/about">
              About
            </Link>
            <Link className="nav-link text-dark ms-md-2" href="/bookshelf">
              Bookshelf
            </Link>
            <Link
              className="nav-link text-dark ms-md-2"
              href="https://open.spotify.com/show/3wgVx0oPtaBG8adhmjt7CW"
              target="_blank"
              rel="noreferrer"
            >
              Podcast
            </Link>
            <Link
              className="nav-link text-dark ms-md-2"
              href="https://thebasics.sachinsblog.in"
              target="_blank"
              rel="noreferrer"
            >
              MasterClass
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
