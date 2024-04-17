import React from 'react';

export function AboutMe() {
    return (
        <div className="mx-auto max-w-5xl px-8 pb-8">
            <h1 id="about-me" className="pt-20 text-2xl font-bold dark:text-white md:pt-32 md:text-7xl">
                About Me
            </h1>
            <div className="mt-4 text-lg dark:text-white">
                <img src="/projects/Me.jpeg" alt="" className="float-left mb-2 mr-4 size-48 rounded-full" />
                <p>
                    Hello! Im Roy Luo, a passionate software developer and technology enthusiast with a background in Electrical Engineering,
                    Computing, and AI. I enjoy building scalable and efficient solutions that solve complex problems and improve user experiences. Im
                    from Vancovuer BC, but currently based in Waterloo ON, where I am studying and growing within the tech industry.
                </p>
                <div style={{ padding: '30px' }}> {/* Inline style for padding */}</div>
                <p className="text-xs text-neutral-600 dark:text-neutral-200 sm:text-base  "> Simplicity is Sophistication</p>
            </div>

            <div style={{ padding: '10px' }}> {/* Inline style for padding */}</div>

            <div className="mt-6">
                <h2 className="text-xl font-semibold dark:text-white">Education</h2>
                <p className="mt-2 text-lg dark:text-gray-400">
                    University of Waterloo, BASc in Electrical Engineering, Honours, Co-op | Sept 2023 - Present |
                </p>
            </div>
            <div className="mt-6">
                <h2 className="text-xl font-semibold dark:text-white">Current Projects</h2>
                <p className="mt-2 text-lg dark:text-gray-400">
                    Currently, I am working on an AI Photographer, aimed to aid and develop your photography skills in real time. I am developing this
                    mobile application using flutter, Mediapipe, and GeminiAI.
                </p>
            </div>
        </div>
    );
}
