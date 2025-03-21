import Image from "next/image";
import avatar from "@/assets/avatar.webp";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="h-screen">
      <div>
        {/* Hero section */}
        <div className="flex items-center justify-between mx-auto h-[700px] container">
          <div
            id="header"
            className="flex flex-col gap-2 max-w-[50%] h-full justify-center "
          >
            <h3 className="text-4xl">Hola!</h3>
            <h1 className="text-6xl">
              Soy <span className="text-blue-400 text-7xl">Jaider Ramirez</span>
              , <br /> Desarrollador de Sorftware
            </h1>
            <span className="text-lg text-gray-600 w-[75%] pt-5">
              Apasionado por la creación de soluciones digitales eficientes,
              seguras y escalables. Especializado en el desarrollo de
              aplicaciones web modernas.
            </span>
            <div className="flex pt-9 gap-4">
              <Link href="/projects" className="hover:cursor-pointer">
                <Button className="text-2xl h-12 w-44 pb-2.5 px-5 rounded-3xl border">
                  Proyectos
                </Button>
              </Link>
              <Link href="/contact" className="hover:cursor-pointer">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white text-2xl h-12 w-44 pb-2.5 px-5 rounded-3xl">
                  Contactame
                </Button>
              </Link>
            </div>
          </div>
          <div id="Image" className="h-full flex items-center pl-20">
            <Image
              src={avatar}
              alt="Picture of the author"
              className="h-full w-full"
            />
          </div>
        </div>
        {/* About me section  */}
        <div></div>
        {/* Projects section */}
        <div></div>
        {/* Contact section */}
        <div></div>
      </div>
    </main>
  );
}
