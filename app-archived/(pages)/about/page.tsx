import React from "react";

export const metadata = {
  title: "About Sachin — Sachins Blog",
  description: "The personal blog of Sachin Sharma",
};

export default function About() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 sm:px-6 lg:px-8 min-h-[70vh]">
      <h1 className="page-heading">About Sachin</h1>
      <p className="mb-3">
        Hi there! My name is Sachin Sharma, I&apos;m a computer engineering student
        at Sikkim Institute of Science and Technology, Chisopani, Sikkim -
        India.
      </p>

      <p className="mb-3">
        Apart from studies I like to build software related to the web and ml. I
        like to spend my leisure time reading books(mostly non-fiction),
        teaching web development at the basics cohorts, and writing about
        finance, health, tech, and more at SachinsBlog.
      </p>

      <p className="mb-3">
        And once a week I set aside some time to share the things I&apos;m learning
        through my work, books, and awesome people I meet through my SachinsBlog
        Insider Newsletter(feel free to join).
      </p>

      <p className="mb-3">
        If you have questions for me, you can reach out to me either on Twitter
        or simply mail me at mail.sachinshrmaa@gmail.com (don’t forget to add
        the subject). I respond to every email/tweet I get.
      </p>
    </div>
  );
}
