// import React from 'react';

// export function SkillsSection() {
//     return (
//         <div className="mx-auto max-w-5xl px-8 pb-8">
//             <h1 id="skills" className="pt-20 text-2xl font-bold dark:text-white md:pt-32 md:text-7xl">
//                 Tech Stack
//             </h1>
//             {categories.map((category, idx) => (
//                 <div key={idx}>
//                     <h2 className="text-xl font-semibold dark:text-white mt-6">{category.name}</h2>
//                     <ul className="list-disc pl-10 py-4">
//                         {category.skills.map((skill, sidx) => (
//                             <li key={sidx}>{skill}</li>
//                         ))}
//                     </ul>
//                 </div>
//             ))}
//         </div>
//     );
// }

// const categories = [
//     {
//         name: 'Programming Languages',
//         skills: ['C++', 'C', 'Python', 'Java', 'JavaScript', 'Swift', 'VHDL' ]
//     },
//     {
//         name: 'Web Development',
//         skills: ['React', 'Node.Js', 'BootStrap', 'HTML/CSS']
//     },
//     {
//         name: 'Databases',
//         skills: ['PostgreSQL', 'MongoDB', 'OracleDB', 'SQLite3']
//     },
//     {
//         name: 'DevOps',
//         skills: ['Docker', 'Bash', 'AWS', 'Git']
//     },
//     {
//         name: 'Tools and Libraries',
//         skills: ['OpenCV', 'TensorFlow', 'PyTorch']
//     },
//     {
//         name: 'Embedded Systems',
//         skills: ['FPGA', 'NVIDIA Jetson', 'STM32', 'Rasberry Pi', 'Arduino']
//     }
// ];

import React from 'react';

export function SkillsSection() {
    return (
        <div className="mx-auto max-w-5xl px-8 pb-8">
            <h1 id="skills" className="pt-20 text-2xl font-bold dark:text-white md:pt-32 md:text-7xl">
                Tech Stack
            </h1>
            {categories.map((category, idx) => (
                <div key={idx}>
                    {/* Adding Tailwind CSS class for blue color */}
                    <h2 className="mt-6 text-xl font-semibold text-blue-500 dark:text-white">{category.name}</h2>
                    <div className="grid grid-cols-3 gap-4 py-4">
                        {' '}
                        {/* Adjust 'grid-cols-3' to increase or decrease the number of columns */}
                        {category.skills.map((skill, sidx) => (
                            <span key={sidx} className="text-sm dark:text-white">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

const categories = [
    {
        name: 'Programming Languages',
        skills: [
            <a href="https://www.reddit.com/r/memes/comments/k8ndd8/me_and_the_homies_prefer_c/" className="text-blue-500 hover:underline">
                C++
            </a>,
            <a href="https://drive.google.com/file/d/1bGi9qUw-hp7704P8cE2oHBHGnFHXOSOX/view?usp=sharing" className="text-blue-500 hover:underline">
                C
            </a>,
            <a
                href="https://www.reddit.com/r/ProgrammerHumor/comments/asbbul/this_meme_was_posted_by_a_c_dev/#lightbox"
                className="text-blue-500 hover:underline"
            >
                Python
            </a>,
            <a href="https://www.java.com/en/" className="text-blue-500 hover:underline">
                Java
            </a>,
            <a
                href="https://res.cloudinary.com/practicaldev/image/fetch/s--ZDtqrBOj--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://github.com/damiancipolat/js_vs_memes/blob/master/doc/js_thanks.png%3Fraw%3Dtrue"
                className="text-blue-500 hover:underline"
            >
                JavaScript
            </a>,
            <a
                href="https://www.apple.com/ca/swift/#:~:text=Swift%20is%20a%20fast%20and,create%20even%20richer%20app%20experiences."
                className="text-blue-500 hover:underline"
            >
                Swift
            </a>
        ]
    },
    {
        name: 'Web Development',
        skills: [
            <a href="https://react.dev/" className="text-blue-500 hover:underline">
                React
            </a>,
            <a href="https://nodejs.org/en" className="text-blue-500 hover:underline">
                Node.js
            </a>,
            <a href="https://nextjs.org/" className="text-blue-500 hover:underline">
                Next.js
            </a>,
            <a href="https://getbootstrap.com/" className="text-blue-500 hover:underline">
                Bootstrap
            </a>
        ]
    },
    {
        name: 'Databases',
        skills: [
            <a href="https://www.postgresql.org/" className="text-blue-500 hover:underline">
                PostgreSQL
            </a>,
            <a
                href="https://www.mongodb.com/lp/cloud/atlas/try4?utm_source=google&utm_campaign=search_gs_pl_evergreen_atlas_core-high-int_prosp-brand_gic-null_amers-ca_ps-all_desktop_eng_lead&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=19616985274&adgroup=146373896140&cq_cmp=19616985274&gad_source=1&gclid=CjwKCAjww_iwBhApEiwAuG6ccOEE26MNnqq6wh0d2_gWOO67VLbyQOLn2MHYp5LteakV9HdYkR8ulhoC_6kQAvD_BwE"
                className="text-blue-500 hover:underline"
            >
                MongoDB
            </a>,
            <a
                href="https://go.oracle.com/LP=140514?src1=:ad:pas:go:dg:a_nas:l5:RC_GOOG220512P00032C00726:MainAd&gad_source=1&gclid=CjwKCAjww_iwBhApEiwAuG6ccFU5tuw3iOdYGdtVSGqL9r63JjEmdutN38tLBhR8K7A_dQ8v0OBO2RoCuSQQAvD_BwE"
                className="text-blue-500 hover:underline"
            >
                OracleDB
            </a>,
            <a href="https://www.sqlite.org/" className="text-blue-500 hover:underline">
                SQLite3
            </a>
        ]
    },
    {
        name: 'DevOps',
        skills: [
            <a href="https://www.docker.com/" className="text-blue-500 hover:underline">
                Docker
            </a>,
            <a href="https://www.gnu.org/software/bash/" className="text-blue-500 hover:underline">
                Bash
            </a>,
            <a
                href="https://aws.amazon.com/free/?gclid=CjwKCAjww_iwBhApEiwAuG6ccMKgBYiHbJS5cIJjDAd7KclNu68pgDcpf_qyE60XVUkVIIuAcyaU2hoC-8sQAvD_BwE&trk=e747cc26-a307-4ae0-981a-6dc5c1cb4121&sc_channel=ps&ef_id=CjwKCAjww_iwBhApEiwAuG6ccMKgBYiHbJS5cIJjDAd7KclNu68pgDcpf_qyE60XVUkVIIuAcyaU2hoC-8sQAvD_BwE:G:s&s_kwcid=AL!4422!3!453053794209!e!!g!!aws!10705896207!102406402981/"
                className="text-blue-500 hover:underline"
            >
                AWS
            </a>,
            <a href="https://git-scm.com/" className="text-blue-500 hover:underline">
                Git/Github
            </a>
        ]
    },
    {
        name: 'Tools and Libraries',
        skills: [
            <a href="https://opencv.org//" className="text-blue-500 hover:underline">
                OpenCV
            </a>,
            <a href="https://www.tensorflow.org/" className="text-blue-500 hover:underline">
                TensorFlow
            </a>,
            <a href="https://pytorch.org/" className="text-blue-500 hover:underline">
                Pytorch
            </a>
        ]
    },
    {
        name: 'Embedded Systems',
        skills: [
            <a
                href="https://www.reddit.com/r/ProgrammerHumor/comments/n99up5/hopefully_you_infer_the_joke_better_than_libero/"
                className="text-blue-500 hover:underline"
            >
                VHDL
            </a>,
            <a
                href="https://www.arm.com/glossary/fpga#:~:text=Field%20Programmable%20Gate%20Arrays%20(FPGAs,requirements%20after%20the%20manufacturing%20process."
                className="text-blue-500 hover:underline"
            >
                FPGA
            </a>,
            <a href="https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/" className="text-blue-500 hover:underline">
                NVIDIA Jetson
            </a>,
            <a
                href="https://www.st.com/en/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus.html/"
                className="text-blue-500 hover:underline"
            >
                STM32
            </a>,
            <a href="https://www.raspberrypi.com//" className="text-blue-500 hover:underline">
                Rasberry Pi
            </a>,
            <a href="https://www.arduino.cc/" className="text-blue-500 hover:underline">
                Ardunio
            </a>
        ]
    }
];
