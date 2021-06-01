import React from 'react'

const Bookshelf = () => {
    return (
        <div className="col-md-8 col-11 m-auto my-5">
            <h3>Books</h3>
            <p>This page is under development ~ On this page I share all the books that I've read and recommend it.</p>

            <div className="row">
                <div className="col-md-6 mt-4 p-3">
                    <h5 className="mb-4">Startups and Financial</h5>
                    <ul>
                        <li>Zero to One by Blake Masters and Peter Thiel</li>
                        <li>Rich Dad Poor Dad by Robert Kiyosaki</li>
                    </ul>
                </div>

                <div className="col-md-6 mt-4 p-3">
                    <h5 className="mb-4">Self Help and Wellbeing</h5>
                    <ul>
                        <li>Atomic Habit by James Clear</li>
                        <li>Why We Sleep by Mathew Walker</li>
                        <li>The Subtle Art of Not Giving a F*ck by Mark Manson</li>
                    </ul>
                </div>

                <div className="col-md-6 mt-4 p-3">
                    <h5 className="mb-4">Auto-Biography</h5>
                    <ul>
                        <li>Surely you're joking! Mr Feyman</li>
                        <li>Malala Yusufzai- the girl who stoodup for education</li>
                    </ul>
                </div>

              

            </div>

          
        </div>
        
    )
}

export default Bookshelf
