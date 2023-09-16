import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full py-6 border-t-[1px]">
      <div className="grid lg:grid-cols-4 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="px-2 py-1 flex flex-col justify-between">
          <p id="logo">Sachins blog</p>
          <div>
            <p>Made with ❤ by Sachin</p>
            <p>2023© All Rights Reserved</p>
          </div>
        </div>
        <div>
          <Link
            href="/about"
            className="text-blue-900 block px-3 py-1 text-base font-medium hover:text-blue-800"
          >
            About
          </Link>
          <Link
            href="https://work.sachinsblog.in/"
            className="text-blue-900 block px-3 py-1 text-base font-medium hover:text-blue-800"
          >
            Collab
          </Link>
          <Link
            href="https://www.youtube.com/@sachinshrmaa"
            className="text-blue-900 block px-3 py-1 text-base font-medium hover:text-blue-800"
          >
            Podcast
          </Link>
          <Link
            href="mailto:mail.sachinshrmaa@gmail.com"
            className="text-blue-900 block px-3 py-1 text-base font-medium hover:text-blue-800"
          >
            Contact
          </Link>
        </div>
        {/* <div>
          <Link
            href="#"
            className="text-blue-900 block px-3 py-1 text-base font-medium hover:text-blue-800"
          >
            Merchandise
          </Link>
          <Link
            href="#"
            className="text-blue-900 block px-3 py-1 text-base font-medium hover:text-blue-800"
          >
            Podcast
          </Link>
          <Link
            href="#"
            className="text-blue-900 block px-3 py-1 text-base font-medium hover:text-blue-800"
          >
            Collab
          </Link>
          <Link
            href="#"
            className="text-blue-900 block px-3 py-1 text-base font-medium hover:text-blue-800"
          >
            MasterClass
          </Link>
        </div>
        <div>
          <Link
            href="#"
            className="text-blue-900 block px-3 py-1 text-base font-medium hover:text-blue-800"
          >
            Terms
          </Link>
          <Link
            href="#"
            className="text-blue-900 block px-3 py-1 text-base font-medium hover:text-blue-800"
          >
            Privacy Policy 
          </Link>
         
          
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
