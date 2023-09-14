import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full py-6 border-t-[1px]">
      <div className="grid lg:grid-cols-4 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="px-2 py-1">
          <p className="mb-4" id="logo">
            Sachins blog
          </p>
          <p>Made with ❤ by Sachin</p>
          <p>2023© All Rights Reserved</p>
        </div>
        <div>
          <Link
            href="#"
            className="text-blue-900 block px-3 py-1 text-base font-medium hover:text-blue-800"
          >
            About
          </Link>
          <Link
            href="#"
            className="text-blue-900 block px-3 py-1 text-base font-medium hover:text-blue-800"
          >
            Bookshelf
          </Link>
          <Link
            href="#"
            className="text-blue-900 block px-3 py-1 text-base font-medium hover:text-blue-800"
          >
            Contact
          </Link>
          <Link
            href="#"
            className="text-blue-900 block px-3 py-1 text-base font-medium hover:text-blue-800"
          >
            Newsletter
          </Link>
        </div>
        <div>
          <Link
            href="#"
            className="text-blue-900 block px-3 py-1 text-base font-medium hover:text-blue-800"
          >
            About
          </Link>
          <Link
            href="#"
            className="text-blue-900 block px-3 py-1 text-base font-medium hover:text-blue-800"
          >
            Bookshelf
          </Link>
          <Link
            href="#"
            className="text-blue-900 block px-3 py-1 text-base font-medium hover:text-blue-800"
          >
            Contact
          </Link>
          <Link
            href="#"
            className="text-blue-900 block px-3 py-1 text-base font-medium hover:text-blue-800"
          >
            Newsletter
          </Link>
        </div>
        <div>
          <Link
            href="#"
            className="text-blue-900 block px-3 py-1 text-base font-medium hover:text-blue-800"
          >
            About
          </Link>
          <Link
            href="#"
            className="text-blue-900 block px-3 py-1 text-base font-medium hover:text-blue-800"
          >
            Bookshelf
          </Link>
          <Link
            href="#"
            className="text-blue-900 block px-3 py-1 text-base font-medium hover:text-blue-800"
          >
            Contact
          </Link>
          <Link
            href="#"
            className="text-blue-900 block px-3 py-1 text-base font-medium hover:text-blue-800"
          >
            Newsletter
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
