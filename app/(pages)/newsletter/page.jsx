import styles from "@/styles/Newsletter.module.css";

export const metadata = {
  title: "SachinsBlog Insider",
  description:
    "SachinsBlog Insider is a weekly newsletter where every week I set aside an hour or two just to send my insider curated list of content related to self-development, tech, well-being, and more straight into your inbox.",
};

const Newsletter = () => {
  return (
    <div>
     
      <div className={styles.heroSection}>
        <div className="container-md">
          <h1 className={styles.heroText}>SachinsBlog Insider</h1>
          <p className={styles.heroPara}>
            SachinsBlog Insider is a weekly newsletter where every week I set
            aside an hour or two just to send my insider&apos;s a curated list
            of content related to self-development, tech, well-being, and more
            straight into your inbox.
          </p>

          <form
            className="col-md-7 m-auto"
            action="https://sachinsblog.us21.list-manage.com/subscribe/post?u=5173dff464536338a3bf9f5d1&amp;id=ab0cc7d456&amp;f_id=00d940e1f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            target="_self"
          >
            <div className="row mt-4" id="mc_embed_signup_scroll">
              <div className="col-md-6 col-12">
                <small>First Name</small>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  name="FNAME"
                  id="mce-FNAME"
                />
                <span id="mce-FNAME-HELPERTEXT" className="helper_text"></span>
              </div>
              <div className="col-md-6 col-12">
                <small>Email *</small>
                <input
                  type="email"
                  className="form-control"
                  placeholder="hello@sachinsblog.in"
                  name="EMAIL"
                  id="mce-EMAIL"
                  required
                />
                <span id="mce-EMAIL-HELPERTEXT" className="helper_text"></span>
              </div>
            </div>
            <div aria-hidden="true">
              <input
                type="text"
                name="b_5173dff464536338a3bf9f5d1_ab0cc7d456"
                tabindex="-1"
                value=""
                className="d-none"
              />
            </div>
            <div id="mce-responses" className="clear foot">
              <div className="response d-none" id="mce-error-response"></div>
              <div className="response d-none" id="mce-success-response"></div>
            </div>
            <div className="col mt-2">
              <input
                type="submit"
                className="form-control bg-dark text-white"
                value="Join Now"
                name="subscribe"
                id="mc-embedded-subscribe"
              />
            </div>
          </form>
          <br />
          <p className={styles.heroPara}>
            {" "}
            No matter who you are? or what you do? It would be best if you
            considered subscribing to it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
