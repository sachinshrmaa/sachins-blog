import React from 'react'

const Newsletter = () => {
    return (
        <div className="col-md-7 m-auto text-center newsletter-sc">
            <h2 className="newsletter-title mb-4">Join Newsletter</h2>
            <p className="newsletter-text">Okay here the deal, you SIGN UP below and in return, I promise you that I'll never miss to notify you about any updates related to books, life, works, and more.</p>
            <p className="newsletter-text">Should I count you In?</p>


            <div>
                <form action="#">
                    <input type="text" placeholder="Enter your email" class="newsletter-input" />
                    <button className="btn btn-primary px-5 py-3">I'm In!</button>
                    <p className="mt-4 text-muted">No spam, unsubscribe anytime.</p>
                </form>
            </div>

        </div>
    )
}

export default Newsletter
