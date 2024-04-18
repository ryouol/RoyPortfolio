import React from 'react';

export function ContactMeForm() {
    return (
        <div id="contact-me" className="mx-auto h-screen max-w-5xl px-8 py-20 md:py-32">
            <h1 className="pb-8 text-2xl font-bold dark:text-white md:text-7xl">Contact Me!</h1>
            <div className="max-w-xl space-y-8">
                <div className="text-lg">
                    <p>Open to building new connections, collaborating on projects-hackathons-competitions, and future opportunites!</p>
                    <ul className="mt-4 list-disc pl-10">
                        <li>
                            Email:{' '}
                            <a href="mailto:royluo05@gmail.com" className="text-blue-500 hover:underline">
                                royluo05@gmail.com
                            </a>
                        </li>
                        <li>
                            School Email:{' '}
                            <a href="mailto:r55luo@uwaterloo.ca" className="text-blue-500 hover:underline">
                                r55luo@uwaterloo.ca
                            </a>
                        </li>
                        <li>
                            Phone:{' '}
                            <a href="tel:+6043649996" className="text-blue-500 hover:underline">
                                +1 (604)-364-9996
                            </a>
                        </li>
                        <li>
                            LinkedIn:{' '}
                            <a href="https://www.linkedin.com/in/ee-royluo/" className="text-blue-500 hover:underline">
                                linkedin.com/in/ee-royluo/
                            </a>
                        </li>
                        <li>
                            GitHub:{' '}
                            <a href="https://github.com/ryouol" className="text-blue-500 hover:underline">
                                github.com/ryouol
                            </a>
                        </li>
                        <li>
                            DevPost:{' '}
                            <a href="https://devpost.com/ryouol" className="text-blue-500 hover:underline">
                                devpost.com/ryouol
                            </a>
                        </li>
                        <li>
                            Resume:{' '}
                            <a
                                href="https://drive.google.com/file/d/19FixCSdMRp5Sw6MCywqy5Avv4yRn8rsF/view?usp=sharing"
                                className="text-blue-500 hover:underline"
                            >
                                Roys Resume
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div style={{ padding: '80px' }}> {/* Inline style for padding */}</div>
            <footer className="mt-10 text-center text-sm text-gray-500">
                Designed in{' '}
                <a href="https://www.figma.com/" className="text-blue-500 hover:underline">
                    Figma
                </a>
                , built in{' '}
                <a href="https://zed.dev/" className="text-blue-500 hover:underline">
                    Zed
                </a>
                , using{' '}
                <a href="https://nextjs.org/" className="text-blue-500 hover:underline">
                    Next.js,
                </a>{' '}
                deployed with{' '}
                <a href="https://vercel.com/" className="text-blue-500 hover:underline">
                    Vercel
                </a>{' '}
                by{' '}
                <a href="https://github.com/ryouol/RoyPortfolio" className="text-blue-500 hover:underline">
                    Roy Luo
                </a>
            </footer>
            <footer className="mt-10 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Roy Luo. Code licensed under the{' '}
                <a href="https://opensource.org/licenses/MIT" className="text-blue-500 hover:underline">
                    MIT License
                </a>
                . All rights reserved.
            </footer>
        </div>
    );
}
