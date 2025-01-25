'use client';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import { TracingBeam } from '@/components/ui/tracing-beams';

export function ExperienceSection() {
    return (
        <>
            <h1 id="experience" className="mx-auto max-w-5xl px-8 pb-8 pt-20 text-2xl font-bold dark:text-white md:pt-32 md:text-7xl">
                Experience
            </h1>
            <TracingBeam className="px-6">
                <div className="relative mx-auto max-w-2xl pb-32 pt-4 text-white antialiased">
                    {experience.map((item, index) => (
                        <div key={`content-${index}`} className="mb-10 mt-4 md:mt-0">
                            <h2 className={twMerge('text-xl text-black dark:text-white')}>{item.title}</h2>
                            <span className="w-fit rounded-full py-1 text-sm italic text-neutral-800 dark:text-neutral-200">{item.badge}</span>
                            <div className="prose prose-sm dark:prose-invert mt-2 text-sm text-black dark:text-white">{item.description}</div>
                        </div>
                    ))}
                </div>
            </TracingBeam>
        </>
    );
}

const experience = [
    {
        title: 'Software Engineer Intern',
        description: (
            <ul className="list-disc">
                <li> NDA.
                </li>
            </ul>
        ),
        badge: 'Tesla | Jan 2025 - Present'
    },
    {
        title: 'Co-Founder',
        description: (
            <ul className="list-disc">
                <li> Democratizing Venture Capital.
                </li>
            </ul>
        ),
        badge: 'Stealth Startup | Oct 2024 - Present'
    },

    {
        title: 'Software Engineer Intern',
        description: (
            <ul className="list-disc">
                <li>Natural Language Processing.</li>

            </ul>
        ),
        badge: 'Tesla  | Sept 2024 - Dec 2024'
    },
    {
        title: 'Software Engineer Intern',
        description: (
            <ul className="list-disc">
                <li>iCIEF Software.</li>

            </ul>
        ),
        badge: 'Advanced Electrophoresis Solutions  | Jan 2024 - Apr 2024'
    },
    {
        title: 'Lead Software Development Engineer',
        description: (
            <ul className="list-disc">
                <li>
                    Quoting Algorithms. 
                </li>

            </ul>
        ),
        badge: 'Edge Property Maintenance Services | Sep 2023 – Dec 2023'
    }
];
