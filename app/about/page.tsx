import React from "react";

export const metadata = {
  title: "About Sachin — Sachins Blog",
  description: "The personal blog of Sachin Sharma",
};

export default function About() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 sm:px-6 lg:px-8 min-h-[70vh]">
      <h1 className="page__heading">About Sachin</h1>
      <p className="mb-3">
        I am currently working as an Intern for a Cloud-based startup
        company, where I focuses on works related to frontend development. I&apos;m
        also pursuing my Bachelor&apos;s degree in Computer Engineering from SIST
        Sikkim Institute of Science and Technology.
      </p>
      <p className="mb-3">
        Previously, I&apos;ve also completed my Diploma in Computer Engineering with a
        distinction grade. Apart from studies and work, I actively build and
        contributes to open-source projects on GitHub.
      </p>
    </div>
  );
}
