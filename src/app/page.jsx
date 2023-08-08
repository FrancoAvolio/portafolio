import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';
import { FaReact } from 'react-icons/fa';
import {SiJavascript} from "react-icons/si"
import {SiNextdotjs} from "react-icons/si"
import { SiTailwindcss } from 'react-icons/si';

export default function Home() {
  return (
    <main className="bg-black px-32">
      <section className="min-h-screen">
        <nav className="py-10 mb-5 flex justify-between text-white">
          <h1 className="text-2xl bg-gradient-to-r from-cyan-300 to-teal-500 px-4 py-2 rounded-md">
            Franco
          </h1>
          <ul className="flex items center gap-8">
            <li>
              <Link className="btn" href={'/'}>
                Contact
              </Link>
            </li>
            <li>
              <Link className="btn" href={'/'}>
                Projects
              </Link>
            </li>
            <li>
              <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
            </li>
          </ul>
        </nav>
        <div className="text-center p-10">
          <h2 className="text-5xl py-2 text-teal-400 font-medium mb-4">
            Franco Avolio
          </h2>
          <h3 className="text-2xl py-2 text-white">Front-End Developer</h3>
          <p className="text-md py-5 leading-8 text-gray-500">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit numquam omnis consectetur nobis commodi! Sequi, quas! Delectus officia omnis saepe veniam maxime mollitia facere deleniti blanditiis, doloremque temporibus minus velit id iste, quaerat porro corporis architecto amet vitae alias. Cum a exercitationem quisquam quasi, temporibus pariatur eveniet repudiandae quo voluptates dolore aut accusamus illum. Ab tempore repellat totam architecto expedita veniam vitae possimus temporibus mollitia, ducimus exercitationem, tenetur, vero earum laboriosam illum animi distinctio. Ipsum quam labore quis nesciunt nam placeat incidunt totam aliquid dignissimos.
          </p>
        </div>
        <div className="text-5xl flex justify-center gap-8 text-white">
          <Link href={'https://twitter.com/AvolioF_'}>
            <AiFillTwitterCircle className='text-blue-300' />{' '}
          </Link>
          <Link href={'https://www.linkedin.com/in/franco-avolio-748513287'}>
            {' '}
            <AiFillLinkedin className='text-blue-800' />{' '}
          </Link>
        </div>
        <div className="border-t border-cyan-300 my-8"></div>
      </section>
      <section>
        <div className="text-center">
          <h3 className="text-2xl mt-2 py-1 text-white">
            Servicios que ofrezco
          </h3>
          <p className="text-md py-2 leading-8 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            eius sed dolorem ipsum odio, veniam, aliquid repudiandae maiores
            repellendus, nostrum officiis animi iure quasi. Nulla dignissimos
            autem veniam. Natus ut dolor impedit ducimus voluptates perspiciatis
            magnam aliquam accusamus vitae! Facere aut qui saepe modi totam.
          </p>
        </div>
        <div className="mt-8 p-12 flex justify-between">
          <span className="text-8xl text-cyan-500">
            <FaReact />
          </span>
          <span className="text-8xl text-yellow-400">
            <SiJavascript />
          </span>
          <span className="text-8xl text-white">
            <SiNextdotjs />
          </span>
          <span className="text-8xl text-teal-400">
            <SiTailwindcss />
          </span>
        </div>
      </section>
    </main>
  );
}
