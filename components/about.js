import { CMS_NAME } from "../lib/constants";
import Link from "next/link";
import Image from "next/image";
import aboutMedia from "../public/assets/media/me-in-a-field.jpg";
import Menu from "./menu";

export default function About() {
  return (
    <>
      <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
        <h1 className="w-full flex justify-center text-6xl md:text-8xl font-bold tracking-tighter leading-tight">
          garybuckle
        </h1>
      </section>
      <section className="w-full flex justify-center text-6xl md:text-8xl font-bold tracking-tighter leading-tight">
        <Image src={aboutMedia} alt="Me in a field" width="800" height="600" />
      </section>
      <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
        <p>
          {" "}
          Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i
          mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos gehd ollaweil.
          Measi a ganze es i mog di fei aasgem, Blosmusi. Schmankal zwoa
          Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg di hera
          Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui gschmeidig a
          ganze auf der Oim, da gibt’s koa Sünd, etza! Bavaria ipsum dolor sit
          amet Radler Schneid vui huift vui ognudelt i mechad dee Schwoanshaxn
          Zwedschgndadschi a bissal wos gehd ollaweil. Measi a ganze es i mog di
          fei aasgem, Blosmusi. Schmankal zwoa Ramasuri Edlweiss. Wia vo de
          Weiznglasl wos, imma hogg di hera Guglhupf! Schorsch Spotzerl
          schnacksln Weiznglasl vui gschmeidig a ganze auf der Oim, da gibt’s
          koa Sünd, etza! Bavaria ipsum dolor sit amet Radler Schneid vui huift
          vui ognudelt i mechad dee Schwoanshaxn Zwedschgndadschi a bissal wos
          gehd ollaweil. Measi a ganze es i mog di fei aasgem, Blosmusi.
          Schmankal zwoa Ramasuri Edlweiss. Wia vo de Weiznglasl wos, imma hogg
          di hera Guglhupf! Schorsch Spotzerl schnacksln Weiznglasl vui
          gschmeidig a ganze auf der Oim, da gibt’s koa Sünd, etza!
        </p>
      </section>
    </>
  );
}
