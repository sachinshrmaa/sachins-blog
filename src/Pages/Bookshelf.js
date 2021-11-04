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
                        <li>The Automatic Millioniare by David Bach</li>
                        <li>The Psychology of Money by Morgan Housel</li>
                        <li>The Intelligent Investor by Benjamin Graham</li>
                    </ul>
                </div>

                <div className="col-md-6 mt-4 p-3">
                    <h5 className="mb-4">Self Help and Wellbeing</h5>
                    <ul>
                        <li>Atomic Habit by James Clear</li>
                        <li>Why We Sleep by Mathew Walker</li>
                        <li>The Subtle Art of Not Giving a F*ck by Mark Manson</li>
                        <li>The Secret by Rhona Bryne</li>
                        <li>The Almanack of Naval Ravikant by </li>
                        <li>Sapiens By Yoval Noah Harari</li>
                        <li>21 Lessons for 21st Century By Yoval Noah Harari</li>
                    </ul>
                </div>

                <div className="col-md-6 mt-4 p-3">
                    <h5 className="mb-4">Auto-Biography and Memoirs</h5>
                    <ul>
                        <li>Surely you're joking! Mr Feyman</li>
                        <li>Malala Yusufzai- the girl who stoodup for education</li>
                        <li>Shoe Dog by Phil Knight</li>
                        <li>Meditiations By Marcus Aurelius</li>
                    </ul>
                </div>

              

            </div>

          
        </div>
        
    )
}

export default Bookshelf
