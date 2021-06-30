import React from 'react'
import { Helmet } from 'react-helmet'

const Newsletter = () => {
    return (
        <div class="col-md-8 m-auto col-11">
            <Helmet>
            <title>Join Newsletter - Sachins Blog</title>
                <meta
                    name="description"
                    content="Join Newsletter Sachins blogs"
                />
            </Helmet>
            <div class="text-center my-5 py-5">
                <h1 class="mb-4 display-2">Join Newsletter</h1>
                <p>Okay here's the deal, SIGN UP to my weekly newsletter below, and in return, I'll send you short weekly emails on health, finance, relationships, and careers which I learn from people I meet, books and read, and more.</p>

                <p>Should I count you In?</p>
                
                <form action="https://sachinshrmaa.us10.list-manage.com/subscribe/post?u=e94ac720736227167db541b5c&amp;id=5f3f8db4af" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate mt-4" target="_blank" novalidate>
                    <input type="email" className="newsletter-input mb-3" name="EMAIL" placeholder="Enter your email" />
                    <input type="submit" value="I'm In!" name="subscribe" id="mc-embedded-subscribe" class="btn px-5 py-3" />
                    <p class="mt-4 text-muted"><small>No spam, unsubscribe anytime.</small></p>
                </form>
            </div>
        </div>
    )
}

export default Newsletter
