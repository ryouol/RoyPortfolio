import React from "react";

export function AboutMe() {
  return (
    <div className="mx-auto max-w-5xl px-8 pb-8">
      <h1
        id="about-me"
        className="pt-20 text-2xl font-bold dark:text-white md:pt-32 md:text-7xl"
      >
        About Me
      </h1>
      <div className="mt-4 text-lg dark:text-white">
        <img
          src="/projects/Me.jpeg"
          alt="Roy Luo"
          className="float-left mb-2 mr-4 size-48 rounded-full object-cover object-center"
        />
        <p>
          Hello! Im Roy.
        </p>
        <div style={{ padding: "30px" }}> {/* Inline style for padding */}</div>
        <p className="text-xs text-neutral-600 dark:text-neutral-200 sm:text-base  ">
          {" "}
        </p>
      </div>

      <div style={{ padding: "10px" }}> {/* Inline style for padding */}</div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold dark:text-white">Education</h2>
        <p className="mt-2 text-lg dark:text-gray-400">
          University of Waterloo, BASc in Electrical Engineering, Honours, Co-op
          | Sept 2023 - Present |
        </p>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold dark:text-white">
          Current Projects
        </h2>
        <p className="mt-2 text-lg dark:text-gray-400">
          Currently, I am working on an AI Photographer, aimed to aid and
          develop your photography skills in real time. I am developing this
          mobile application using flutter, Mediapipe, and GeminiAI.
        </p>
      </div>
    </div>
  );
}
