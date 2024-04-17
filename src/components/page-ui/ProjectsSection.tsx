import React from 'react';

import IframeEmbed from './IframeEmbed';

export function ProjectsSection() {
    return (
        <div className="mx-auto max-w-5xl px-8 pb-8">
            <h1 className="text-2xl font-bold dark:text-white md:text-4xl">Featured Projects</h1>
            <div className="space-y-8 py-4">
                {products.map((product, index) => (
                    <div key={index} className="rounded-lg bg-white p-4 shadow-lg transition-colors duration-300 dark:bg-black">
                        <div className="flex flex-col md:flex-row">
                            {product.title === 'Click AI | AI photographer' ? (
                                // <IframeEmbed src={product.thumbnail} width="100%" height="344" title={product.title} />
                                <IframeEmbed src={product.thumbnail} title={product.title} />
                            ) : (
                                <img src={product.thumbnail} alt={product.title} className="w-full rounded-lg object-cover md:h-40 md:w-64" />
                            )}
                            <div className="mt-4 md:ml-6 md:mt-0">
                                <h3 className="text-lg font-semibold dark:text-white">{product.title}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{product.description}</p>
                                <a href={product.link} className="text-blue-500 hover:underline dark:hover:text-blue-400">
                                    View Project
                                </a>
                                {product.techStack && (
                                    <div className="mt-2 text-xs text-gray-600 dark:text-gray-400">{product.techStack.join(', ')}</div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

const products = [
    {
        title: 'Click AI | AI photographer',
        description: '(IN PROGRESS!) A Camera app with AI Assistance to help you take the perfect picture! ',
        link: 'https://github.com/mindbridge-study/GeminiAIHacks',
        thumbnail: 'https://giphy.com/embed/3o7qE1YN7aBOFPRw8E',
        //thumbnail: 'https://giphy.com/gifs/vr-bigblueboo-rescuties-3o7qE1YN7aBOFPRw8E', // Responsive version
        techStack: ['Flutter', 'Python', 'GeminiAI', 'NVIDIA Jetson']
    },
    {
        title: 'Stock Prediction LSTM Neural Networks',
        description: 'Developed predictive models using Long Short-Term Memory neural networks to forecast stock prices based on historical data',
        link: 'https://github.com/ryouol/Python-Stock-Predictor',
        thumbnail: '/projects/1_hnJmoDkR6-inqCe_JRxW0w.png',
        techStack: ['Python', 'TensorFlow', 'Pandas', 'Keras', 'Yahoo Finance']
    },
    {
        title: 'QuBiT | Spatial Computing',
        description: 'Quantum & Classcial bit manipulation and computing simulation app.',
        link: 'https://github.com/ryouol/QuBiT',
        thumbnail: '/projects/next-event.png',
        techStack: ['Swift', 'Obj-C']
    },
    {
        title: 'AI Posing | NVIDIA Jetson AGX ',
        description: 'Computer monitored posture corrector',
        link: 'https://github.com/ryouol/NVIDIA-JETSON-POSTURE',
        thumbnail: '/projects/Nvidiea2.jpg',
        techStack: ['C', 'C++', 'Python', 'OpenCV', 'TensorFlow', 'PyTorch', 'NVIDIA Jetson Xaiver AGX']
    },
    {
        title: 'Speach To Text Device | STM32',
        description: 'Built accessible speech-to-text device for the deaf helping aid communication in 99 different languages.',
        link: 'https://github.com/ryouol/WhisperAI',
        thumbnail: '/projects/VTV.jpg',
        techStack: ['C', 'C++', 'Python', 'Pandas', 'WhisperAPI', 'OpenAI', 'STM32']
    },
    {
        title: 'MindBridge | Major League Hacking Hackathon Winner',
        description:
            'MindBridge is an innovative communication aid designed for non-verbal autistic children, empowering them to express their needs and emotions.',
        link: 'https://devpost.com/software/mindbridge',
        thumbnail: '/projects/gallery.jpg',
        techStack: ['Python', 'React', 'Node.js', 'FastAPI', 'Twillo', 'MongoDB', 'OpenAIAPI']
    },
    {
        title: 'Data Engineering & AI Research',
        description: 'Leaveraging AI for preventive data secuity in the Canadian Communicationse Security Establishment.',
        link: 'https://drive.google.com/file/d/1FdQV1aPee9oEiSlI2Tqh0ks9gH6xq5Lo/view?usp=sharing',
        thumbnail: '/projects/applsci-13-01778-g001.webp',
        techStack: ['GMM', 'Time Series Analysis', 'LSTM', 'Anomaly Detection', 'Predictive Analystics', 'latex']
    },
    {
        title: 'R.A.M | iOS Dev',
        description: 'Swift-based iOS app, "R.A.M," designed to securely store and manage vital daily information.',
        link: 'https://github.com/ryouol/ramapp',
        thumbnail: '/projects/RAM.png',
        techStack: ['Swift', 'Apple Local Authentication', 'FoundationDB']
    },
    {
        title: 'Hex Dominant Algorithm & Computational Fluid Dynamics Research',
        description:
            'Analysis and quantitative effects of rim geometry on the aerodynamic performance of production passenger vehicles in North America.',
        link: 'https://drive.google.com/file/d/1MObE_L92fu-Tr1ylX-4_NdCpJyBT7qDZ/view?usp=sharing',
        thumbnail: '/projects/Screenshot 2023-10-11 at 4.56.25 PM.png',
        techStack: ['SimScale', 'AutoCAD', 'HD Algoirthm', 'CAD', 'CFD']
    },
    {
        title: 'Electric Go-Kart',
        description: 'Designed and built an electric go-kart from SCRATCH!',
        link: 'https://drive.google.com/file/d/1m6gol2TOnJJHZY5W9ICW3DlKwiJ4XnIS/view?usp=sharing',
        thumbnail: '/projects/IMG_3281_(1)_(copy).jpg',
        techStack: ['C++', 'AutoCAD', 'Arduino', 'Circuit Analysis', 'Soldering', 'Welding']
    }
];
