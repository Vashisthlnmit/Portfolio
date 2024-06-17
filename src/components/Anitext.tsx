"use client";
import { TypewriterEffect } from "./ui/typewriter-effect";
import Link from "next/link";
export function TypewriterEffectDemo() {
  const words = [
    {
      text: "I&apos;m",
      classname:"text-white dark:text-white"
    },
    {
      text: "a ",
       classname:"text-white dark:text-white"
    },
    {
      text: "Full",
      classname:"text-white dark:text-white"
    },
    {
      text:"Stack",
       classname:"text-white dark:text-white"
    },
    {
      text:"Software",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Developer.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] ">
      <TypewriterEffect words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
        <Link href="./Project">Projects</Link>
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          <Link href="./About">About me</Link>
        </button>
      </div>
    </div>
  );
}
