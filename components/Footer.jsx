
import Link from 'next/link'


const Footer = () => {
    return ( 
        <footer class="text-center py-3 bg-white mt-5">

            <small className="text-center">Made with ❤ by Sachin </small> <br />

            <small>
                <Link className="text-decoration-none" href="/privacy">Privacy Policy</Link> &nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://github.com/sachinshrmaa/sachins-blog" target="blank" class="text-decoration-none">Open Source</a> &nbsp;&nbsp;&nbsp;&nbsp;
                <a href="mailto:mail.sachinsblog@gmail.com" class="text-decoration-none">Contact</a>&nbsp;&nbsp;&nbsp;&nbsp;
                <Link className="text-decoration-none" href="/newsletter">Newsletter</Link> &nbsp;&nbsp;&nbsp;&nbsp;
            </small>

        </footer>
     );
}
 
export default Footer;
