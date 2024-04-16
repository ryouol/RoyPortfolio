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
                <li>Developed and designed iCIEF software using C++, Python, SQL, and Pascal deploying prototype model to production in 4 months.</li>
                <li>
                    Engineered an encrypted account system with OracleDB, wxSQLite3, & wxWidgets for 1000+ researchers, enhancing data integrity &
                    security by 90%.
                </li>
                <li>
                    Automated the control of a robotic needle by implementing A* algorithm, Genetic Algorithm-based heuristic for (TSP) optimization,
                    increasing operational precision by 40%.
                </li>
            </ul>
        ),
        badge: 'Advanced Electrophoresis Solutions  | Jan 2024 - Apr 2024'
    },
    {
        title: 'Lead Software Development Engineer',
        description: (
            <ul className="list-disc">
                <li>
                    Directed development team through app life cycle, using Figma, HTML/CSS, SCSS, JavaScript, Bootstrap, & React emphasizing on
                    scalability resulting in a 300% increase in user traffic.
                </li>
                <li>
                    TInnovated client interaction by integrating Google Maps API for geocoding and developing a custom formula for service quote
                    estimation, boosting conversion rates by 30%
                </li>
                <li>
                    Implemented Google Analytics for user analytics, leveraging data-driven insights to inform business model and operational
                    adjustments, increasing startup revenue by 17%
                </li>
            </ul>
        ),
        badge: 'Edge Property Maintenance Services | Sep 2023 – Dec 2023'
    },
    {
        title: 'Apple Developer',
        description: (
            <ul className="list-disc">
                <li>
                    Developed and launched AR/VR educational app on quantum and classical computing ”QuBiT”, utilizing Swift and Objective-C, reaching
                    over 3000 learners.
                </li>
                <li>
                    Engineered and deployed iOS app ”R.A.M”, for secure password and financial management, using Core Data & Apple’s Local
                    Authentication achieving a 99.9% success rate in unauthorized access prevention for 400+ users.
                </li>
            </ul>
        ),
        badge: 'Apple Inc  | Dec 2022 – Dec 2023 '
    },
    {
        title: 'Founder and President ',
        description: (
            <ul className="list-disc">
                <li>Founded a pioneering student-led initiative that synergies engineering principles with practical applications.</li>
                <li>Orchestrated, & secured $5,000 in grants from the Canadian Physics Society & PAC for engineering education.</li>
                <li>Initiated the Women in STEM scholarship, enhancing engagement among a diverse group of 13,600+ students.</li>
            </ul>
        ),
        badge: 'BNS Engineering | Aug 2022 - Jun 2023'
    },
    {
        title: 'Automotive Technican ',
        description: (
            <ul className="list-disc">
                <li>Collaborated with mechanics to troubleshoot problems, utilizing OBD2 to decode & resolve engine faults.</li>
                <li>Conducted pre-launch system tests on Ford’s pioneering electric vehicle line (F-150 Lightning).</li>
            </ul>
        ),
        badge: 'Ford | Jun 2022 - Aug 2022'
    }
];
