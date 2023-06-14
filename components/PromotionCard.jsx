import styles from "@/styles/PromotionCard.module.css";
import Link from "next/link";

const PromotionCard = () => {
  return (
    <div className={styles.promotionCard}>
      <h1 className={styles.promotionCardTitle}>
        Introducing In Brief Podcast!
      </h1>
      <p className={styles.promotionCardSubtitle}>
        "In Brief" is a series in which I collaborate with knowledgeable experts
        to provide concise explanations
        <br /> of complex topics in a fun way, inviting others to join me on a
        learning journey.
      </p>
      <Link
        href="https://open.spotify.com/show/3wgVx0oPtaBG8adhmjt7CW"
        className="btn btn-dark px-5 mt-3 text-sm"
      >
        Listen Now →
      </Link>
    </div>
  );
};

export default PromotionCard;
