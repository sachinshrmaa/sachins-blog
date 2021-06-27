import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer class="text-center py-3 bg-white mt-5">
            <div id="google_translate_element" ></div>
            <small>
                <Link className="text-decoration-none" to="/privacy">Privacy Policy</Link> &nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://github.com/sachinshrmaa/sachins-blog" target="blank" class="text-decoration-none">Open Source</a> &nbsp;&nbsp;&nbsp;&nbsp;
                <a href="mailto:sachinkrsharmaa@gmail.com" class="text-decoration-none">Contact</a>&nbsp;&nbsp;&nbsp;&nbsp;
                <Link className="text-decoration-none" to="/archive">Archive</Link>
            </small>
        </footer>
    )
}

export default Footer