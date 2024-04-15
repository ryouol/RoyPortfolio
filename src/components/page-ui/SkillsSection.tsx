import React from 'react';

export function SkillsSection() {
    return (
        <div className="mx-auto max-w-5xl px-8 pb-8">
            <h1 id="skills" className="pt-20 text-2xl font-bold dark:text-white md:pt-32 md:text-7xl">
                Tech Stack
            </h1>
            {categories.map((category, idx) => (
                <div key={idx}>
                    <h2 className="text-xl font-semibold dark:text-white mt-6">{category.name}</h2>
                    <ul className="list-disc pl-10 py-4">
                        {category.skills.map((skill, sidx) => (
                            <li key={sidx}>{skill}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

const categories = [
    {
        name: 'Programming Languages',
        skills: ['C++', 'C', 'Python', 'Java', 'JavaScript', 'Swift', 'VHDL' ]
    },
    {
        name: 'Web Development',
        skills: ['React', 'Node.Js', 'BootStrap', 'HTML/CSS']
    },
    {
        name: 'Databases',
        skills: ['PostgreSQL', 'MongoDB', 'OracleDB', 'SQLite3']
    },
    {
        name: 'DevOps',
        skills: ['Docker', 'Bash', 'AWS', 'Git']
    },
    {
        name: 'Tools and Libraries',
        skills: ['OpenCV', 'TensorFlow', 'PyTorch']
    },
    {
        name: 'Embedded Systems',
        skills: ['FPGA', 'NVIDIA Jetson', 'STM32', 'Rasberry Pi', 'Arduino']
    }
];
