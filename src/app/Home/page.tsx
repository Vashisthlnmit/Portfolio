'use client'
import React from "react"
export default function Home() {
    return (
        <>
            <div className="min-h-screen bg-gray-800">
                <div className="flex flex-col md:flex-row items-center justify-between p-4">
                    <div className="md:w-1/2 w-full p-4 text-center md:text-left text-transition">
                        <h1 className="text-4xl font-bold mb-4 text-white uppercase">
                            Hello
                        </h1>
                        <p className="text-lg mb-4 animate__animated animate__fadeInRight animate__delay-1s">
                            This is a sample text that animates into view using Animate.css library.
                            You can add more content here to describe your image or anything you like.
                        </p>
                    </div>
                    <div className="md:w-1/2 w-full p-4 bg-gray-800">
                        <img
                            src="/vasu.png"
                            alt="Placeholder"
                            className="w-full h-auto rounded "
                        />
                    </div>
                </div>
            </div>
        </>
    )
}