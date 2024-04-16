'use client';

import Link from 'next/link';

import { BackgroundBeams } from '@/components/ui/background-beams';
import { Button } from '@/components/ui/button';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';

const words = [
    {
        text: 'Hi'
    },
    {
        text: 'I`m'
    },
    {
        text: 'Roy',
        className: 'text-blue-500 dark:text-blue-500'
    }
];


export function LandingPage() {
    return (
        <div
            id="landing-page"
            className="bg- relative flex  h-screen w-full flex-col items-center justify-center bg-white bg-dot-black/[0.2] dark:bg-black dark:bg-dot-white/[0.2]"
        >
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)] dark:bg-black" />
            <p className="text-xs text-neutral-600 dark:text-neutral-200 sm:text-base  "> ECE Student at The University of Waterloo</p>
            <TypewriterEffectSmooth words={words} />
            <div className="z-30 flex flex-col items-center space-x-0 space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                <Link href="https://drive.google.com/file/d/1_M6j-4f85U0OtEA0_NBgt2RPl1BkslJs/view?usp=sharing">
                    <Button>Resume</Button>
                </Link>
                <Link href="#contact-me">
                    <Button variant="secondary">Contact</Button>
                </Link>
            </div>
            <div style={{ padding: '20px' }}> {/* Inline style for padding */}</div>

            <BackgroundBeams />
        </div>
    );
}



