import Image from "next/image";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoHtml5 } from "react-icons/io";
import { SiPython } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { BiLogoGoLang } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { TypewriterEffectDemo } from "@/components/Anitext";
import { LampDemo } from "@/components/Contact";
export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-gray-900">
        <div className="flex flex-col  md:flex-row items-center justify-between p-4">
          <div className="md:w-1/2 w-full p-4 bg-gray-900">
            <img
              src="/vash.jpeg"
              alt="Placeholder"
              className="w-full h-1/2 rounded-lg"
            />
          </div>
          <TypewriterEffectDemo />
          <div className="md:w-1/2 w-full p-4 bg-gray-900">
            <img
              src="/vashbg.jpeg"
              alt="Placeholder"
              className="w-full h-lvh rounded-lg"
            />
          </div>
        </div>
        <h1 className="text-center text-white font-bold text-xl">"Skills are the currency of the future. Acquire as many as you can, and invest in their growth continually."</h1>
        <h1 className="text-center text-white font-bold m-4 text-xl">My Skills</h1>
        <div className="flex flex-wrap ml-4 justify-center">
          <div className="flex flex-wrap flex-col w-40 hover:bg-yellow-400 m-4 h-40 justify-center bg-gray-800 rounded">
            <div>
              <FaReact style={{ color: 'blue', fontSize: '100px', margin: 'auto' }} />
              <h1 className="text-center text-white">React</h1>
            </div>
          </div>
          <div className="flex flex-wrap flex-col w-40 hover:bg-yellow-400 m-4 h-40 justify-center  bg-gray-800 rounded">
            <div>
              <SiMongodb style={{ color: 'green', fontSize: '100px', margin: 'auto' }} />
              <h1 className="text-center text-white">MongoDb</h1>
            </div>
          </div>
          <div className="flex flex-wrap flex-col w-40 hover:bg-yellow-400 m-4 h-40 justify-center  bg-gray-800 rounded">
            <div>
              <SiExpress style={{ color: 'white', fontSize: '100px', margin: 'auto' }} />
              <h1 className="text-center text-white">Express</h1>
            </div>
          </div>
          <div className="flex flex-wrap flex-col w-40 hover:bg-yellow-400 m-4 h-40 justify-center  bg-gray-800 rounded">
            <div>
              <DiNodejs style={{ color: 'green', fontSize: '100px', margin: 'auto' }} />
              <h1 className="text-center text-white">Node js</h1>
            </div>
          </div>
          <div className="flex flex-wrap flex-col w-40 hover:bg-yellow-400 m-4 h-40 justify-center  bg-gray-800 rounded">
            <div>
              <FaJava style={{ color: 'orange', fontSize: '100px', margin: 'auto' }} />
              <h1 className="text-center text-white">Java</h1>
            </div>
          </div>
          <div className="flex flex-wrap flex-col w-40 hover:bg-yellow-400 m-4 h-40 justify-center  bg-gray-800 rounded">
            <div>
              <BiLogoGoLang style={{ color: 'blue', fontSize: '100px', margin: 'auto' }} />
              <h1 className="text-center text-white">Golang</h1>
            </div>
          </div>
          <div className="flex flex-wrap flex-col w-40 hover:bg-yellow-400 m-4 h-40 justify-center  bg-gray-800 rounded">
            <div>
              <TbBrandNextjs style={{ color: 'black', fontSize: '100px', margin: 'auto' }} />
              <h1 className="text-center text-white">Next js</h1>
            </div>
          </div>
          <div className="flex flex-wrap flex-col w-40 hover:bg-yellow-400 m-4 h-40 justify-center  bg-gray-800 rounded">
            <div>
              <SiPython style={{ color: 'yellow', fontSize: '100px', margin: 'auto' }} />
              <h1 className="text-center text-white">Python</h1>
            </div>
          </div>
          <div className="flex flex-wrap flex-col w-40 hover:bg-yellow-400 m-4 h-40 justify-center  bg-gray-800 rounded">
            <div>
              <SiDjango style={{ color: 'green', fontSize: '100px', margin: 'auto' }} />
              <h1 className="text-center text-white">Django</h1>
            </div>
          </div>
          <div className="flex flex-wrap flex-col w-40 hover:bg-yellow-400 m-4 h-40 justify-center  bg-gray-800 rounded">
            <div>
              <SiTailwindcss style={{ color: 'blue', fontSize: '100px', margin: 'auto' }} />
              <h1 className="text-center text-white">Tailwind Css</h1>
            </div>
          </div>
          <div className="flex flex-wrap flex-col w-40 hover:bg-yellow-500 m-4 h-40 justify-center  bg-gray-800 rounded">
            <div>
              <IoLogoJavascript style={{ color: 'yellow', fontSize: '100px', margin: 'auto' }} />
              <h1 className="text-center text-white">Javascript</h1>
            </div>
          </div>
          <div className="flex flex-wrap flex-col w-40 hover:bg-yellow-500 m-4 h-40 justify-center  bg-gray-800 rounded">
            <div>
              <IoLogoHtml5 style={{ color: 'orange', fontSize: '100px', margin: 'auto' }} />
              <h1 className="text-center text-white">HTML</h1>
            </div>
          </div>
        </div>
        <LampDemo />
      </div>
    </>
  );
}
