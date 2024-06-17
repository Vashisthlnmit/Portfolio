'use client'
import Image from "next/image"
export default function Aboutme() {
    return (
        <>
            <div className="flex flex-row flex-wrap items-center justify-center min-h-screen p-6 bg-gray-900">
                <div className="w-full md:w-1/2 p-4">
                    <h1 className="text-4xl font-bold text-white mb-4">About me</h1>
                    <p className="text-lg text-white mb-4 overflow-hidden">
                        Hello my fellow friends,myself Vashisth Toshniwal a passionate full stack software developer and a an enthusiastic problem solver. With a deep love for technology and innovation, I have dedicated myself to mastering the art of software development, continuously striving to improve my skills and expand my knowledge.
                        I am pursuing B.tech in Electronic and Communication engineering from LNM insitute of Information Technology  with special interset in Electronics too.
                        My journey into the world of software development began with a curiosity about how things work behind the scenes in the digital realm. his curiosity quickly turned into a passion as I delved into learning various programming languages, frameworks, and tools.
                        One of my core strengths is problem-solving. I thrive on tackling challenging issues and finding innovative solutions. Whether it&apos;s debugging a complex piece of code, optimizing an application for better performance, or architecting a robust system, I approach each problem with a methodical and analytical mindset. I believe that every challenge is an opportunity to learn and grow, and this philosophy drives me to continuously seek out and embrace new challenges.
                        I enjoy sharing my knowledge with others, whether it&apos;s through mentoring, contributing to open-source projects, or participating in tech communities and events.
                        As a full-stack developer, I possess a broad range of skills that enable me to build comprehensive and efficient solutions. On the front-end, I am proficient in HTML, CSS, JavaScript, and modern frameworks such as React and Angular. These tools allow me to create intuitive and responsive user interfaces that enhance the user experience.
                        On the back-end, I have a strong command of server-side languages like Node.js, Python, and Java, along with extensive experience in database management using SQL and NoSQL databases such as MySQL and MongoDB.
                    </p>
                </div>
                <div className="w-full md:w-1/2 p-4">
                    <Image src="/mainvasu.png" alt="About Us"
                        width={500}
                        height={500}
                        className="rounded-lg " />
                </div>
            </div>
        </>
    )
}