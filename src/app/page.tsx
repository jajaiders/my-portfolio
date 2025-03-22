import Image from "next/image";
import avatar from "@/assets/avatar.webp";
import Link from "next/link";
import javaScriptLogo from "@/assets/logos/javaScript-logo.svg";
import nodejsLogo from "@/assets/logos/nodejs-logo.svg";
import reactLogo from "@/assets/logos/react-logo.svg";
import tailwindLogo from "@/assets/logos/tailwind-logo.svg";
import mongodbLogo from "@/assets/logos/mongoDB-logo.svg";
import nextjsLogo from "@/assets/logos/nextjs-logo.svg";
import postgresSQLLogo from "@/assets/logos/postgresql-logo.svg";
import awsLogo from "@/assets/logos/aws-logo.svg";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="h-full py-30">
      <div className="h-full container mx-auto">
        {/* Hero section */}
        <div className="flex items-center justify-between">
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
              className="h-full w-full bg-blue-600 rounded-[50%]"
            />
          </div>
        </div>
        {/* About me section  */}
        <div>
          <div className="flex py-30 gap-30 justify-center">
            <div>
              <Image
                src={avatar}
                height={250}
                alt="yo"
                className="bg-blue-600 rounded-[50%]"
              />
            </div>
            <div className="w-[50%]">
              <h2 className="text-5xl pb-5">Sobre mi</h2>
              <p className="text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam aut repellat quis. Molestias optio commodi natus
                explicabo nostrum dignissimos non nulla reiciendis recusandae
                quidem voluptatibus maiores ducimus, ratione corrupti soluta.
              </p>
            </div>
          </div>
          <div className="flex items-center flex-col gap-15">
            <h2 className="text-5xl">Conocimientos</h2>
            <div className="flex flex-row gap-5">
              <Image src={javaScriptLogo} height={60} alt="logo" />
              <Image src={reactLogo} height={60} alt="logo" />
              <Image src={tailwindLogo} height={60} alt="logo" />
              <Image src={nodejsLogo} height={60} alt="logo" />
              <Image src={mongodbLogo} height={60} alt="logo" />
            </div>
            <h3 className="text-3xl">Aprendiendo</h3>
            <div className="flex flex-row gap-5">
              <Image src={nextjsLogo} height={60} alt="logo" />
              <Image src={postgresSQLLogo} height={60} alt="logo" />
              <Image src={awsLogo} height={60} alt="logo" />
            </div>
          </div>
        </div>
        {/* Projects section */}
        <div className="flex flex-col gap-5 items-center py-30">
          <h2 className="text-5xl mb-10">Proyectos</h2>
          <div className="flex w-[100%] justify-center gap-2">
            <Card className="w-60 h-36 flex justify-center items-center">
              <Image src={javaScriptLogo} height={100} alt="project image"/>
            </Card>
            <Card className="w-60 h-36 flex justify-center items-center">
              <Image src={javaScriptLogo} height={100} alt="project image"/>
            </Card>
            <Card className="w-60 h-36 flex justify-center items-center">
              <Image src={javaScriptLogo} height={100} alt="project image"/>
            </Card>
          </div>
        </div>
        {/* Contact section */}
        <div></div>
      </div>
    </main>
  );
}
