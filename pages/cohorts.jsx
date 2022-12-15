
import Head from "next/head";
import styles from "../styles/Cohorts.module.css"

const Cohorts = () => {
    return (  
        <div>
            
            <Head>
                <title>Cohorts | Sachins Blog</title>
                <meta name="description" content="The primary mission of the cohort is to give as much as possible for as less money. Once you register for the cohort, you will get access to our private discord groups, all the materials, and mentoring on projects." />
                <link rel="icon" href="/sachinsblog.png" />
            </Head>


            <div className={styles.heroSection}>
                <h1 className={styles.heroText}>Introducing Cohorts by <br /> Sachin Sharma!</h1>
                <p className={styles.heroPara}>The primary mission of the cohort is to give as much as possible for as less money. Once you register for the cohort, you will get access to our private discord groups, all the materials, and mentoring on projects.</p>
                <br /><br />
                <a href="#latest" className={styles.heroBtn}>Explore</a>
            </div>



            <div id="latest" className={styles.cohortsSection}>
                <div className="col-md-8 m-auto">
                    <h1 className={styles.subHeading}>Latest</h1>
                    <p className="text-center">Ongoing and upcoming cohorts...</p>

                    <div className="row p-3">

                        <div className="col-md-6 my-2">
                            <div className="card">
                                <div className="card-body">
                                    <small className="bg-success text-white px-2 py-1">FREE</small> <small className="bg-success text-white px-2 py-1">UPCOMING</small>
                                    <h1 className="card-title mt-3">Git and GitHub for Beginners</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, ab doloremque tempora temporibus quod et!</p>
                                    <a href="" className="btn btn-primary">Register Now</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 my-2">
                            <div className="card">
                                <div className="card-body">
                                    <small className="bg-success text-white px-2 py-1">FREE</small> <small className="bg-success text-white px-2 py-1">UPCOMING</small>
                                    <h1 className="card-title mt-3">Full-Stack Web Development Using PHP</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, ab doloremque tempora temporibus quod et!</p>
                                    <a href="" className="btn btn-primary">Register Now</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className="col-md-6 m-auto my-5 col-10">
                <h2 className={styles.subHeading}>Frequently Asked Questions</h2>

                <div class="accordion accordion-flush" id="accordionFlushExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        <i class="bi-question-lg mx-2"></i> What is Cohort?
                        </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">A cohort is a 90-minute live video-conferencing session of 20 participants where you&apos;ll be taught by our Instructor.</div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        <i class="bi-bookmark-check mx-2"></i>  How to enroll in Cohort?
                        </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Enrolling in any of the cohort is easy as buying a book from amazon. <br />
                            a. pick a cohort you like. <br />
                            b. click on Enroll Now button. <br />
                            c. pay the cohort fee via any of your favorite payment methods. <br />
                            We are currently accepting payments via debit cards, credit cards, and UPI.
                        </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        <i class="bi-hourglass-top mx-2"></i>  What is the duration of the cohort?
                        </button>
                        </h2>
                        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Duration might vary for different cohorts, relevant to the topics to be covered in the cohort. There can be 4 sessions in one course. </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingFour">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                        <i className="bi-x-lg mx-2"></i> What if I miss the session?
                        </button>
                        </h2>
                        <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">The entire session will be recorded and posted privately on YouTube. </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingFive">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                         <i className="bi-credit-card mx-2"></i> Can I get a refund?
                        </button>
                        </h2>
                        <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Currently, we don&apos;t provide any refunds. Please watch out for this space for information on refunds</div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingSix">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                         <i className="bi-card-heading mx-2"></i> Will I get any certificate?
                        </button>
                        </h2>
                        <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">No, you won&apos;t be getting any certificates.</div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}
 
export default Cohorts;