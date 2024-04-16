import React from 'react';

export function AboutMe() {
    return (
        <div className="mx-auto max-w-5xl px-8 pb-8">
            <h1 id="about-me" className="pt-20 text-2xl font-bold dark:text-white md:pt-32 md:text-7xl">
                About Me
            </h1>
            <div className="mt-4 text-lg dark:text-white">
                <img src="src/Components/Me.jpeg" alt="" className="float-left mr-4 mb-2 w-48 h-48 rounded-full" />
                <p>
                    Hello! I'm Roy Luo, a passionate software developer and technology enthusiast with a background in Electrical Engineering, Computing, and AI. I enjoy building scalable and efficient solutions that solve complex problems and improve user experiences. I'm from Vancovuer BC, but currently based in Waterloo ON, where I am studying and growing within the tech industry.
                </p>
            </div>


            <div style={{ padding: '20px' }}> {/* Inline style for padding */}
            </div>


            <div className="mt-6">
                <h2 className="text-xl font-semibold dark:text-white">Education</h2>
                <p className="mt-2 text-lg dark:text-gray-400">
                   University of Waterloo, BASc in Electrical Engineering, Honours, Co-op  | Sept 2023 - Present |
                </p>

            </div>
            <div className="mt-6">
                <h2 className="text-xl font-semibold dark:text-white">Current Projects</h2>
                <p className="mt-2 text-lg dark:text-gray-400">
                    Currently, I am working on an AI Photographer, aimed to aid and develop your photography skills in real time. I am developing this mobile application using flutter, Mediapipe, and GeminiAI.
                </p>
            </div>

        </div>
    );
}