import React from 'react'

const Newsletter = () => {
    return (
        <div className="card my-5 newsletter-card py-4" >
            <div className='col-10 m-auto'>
                <div className="row card-body">
                    <div className="col">
                        <h3 className='sub-heading'>Join the Newsletter</h3>
                        <p>Every week I set aside an hour or two just to share things I've been learning from books, life, and more straight into your inbox.</p>
                    </div>
                    <div className="col">
                    <div id="revue-embed">
                        <form action="https://www.getrevue.co/profile/sachinshrmaa/add_subscriber" method="post" id="revue-form" name="revue-form"  target="_blank">
                            <input class="revue-form-field newsletter-input " placeholder="Your email address..." type="email" name="member[email]" id="member_email" required />
                            <input type="submit" value="I'm In!" name="member[subscribe]" id="member_submit" class="btn join-btn px-md-3 ms-md-3" />
                            <p><small>No spam, unsubscribe anytime.</small></p>
                            <div class="revue-form-footer"> <small>By subscribing, you agree with Revue’s <a target="_blank" href="https://www.getrevue.co/terms">Terms of Service</a> and <a target="_blank" href="https://www.getrevue.co/privacy">Privacy Policy</a>.</small> </div>
                        </form>
                    </div>
                    </div>
                </div>   
            </div>
        </div>
    )
}

export default Newsletter