import { FC } from "react";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

const Card: FC<{
  title: string;
  para: string;
  bText: string;
  image: string;
  link: string;
}> = ({ title, para, bText, image, link }) => {
  return (
    <div className="flex flex-col items-center relative justify-center bg-white px-2 py-6 md:w-80 lg:w-72 xl:w-96 group overflow-hidden rounded-2xl">
      <div className="relative w-72 h-48 md:w-64 lg:w-56 lg:h-40 xl:w-80 xl:h-52">
        <Image
          src={image}
          fill={true}
          alt="course card image"
          className="rounded-xl w-full h-full object-cover"
        />
      </div>

      <h1 className="text-[#141414] text-lg font-semibold mt-4">{title}</h1>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out bg-white bg-opacity-50 backdrop-blur-xl p-4 flex items-center justify-center">
          <div>
            <p className="text-black text-lg my-10 mx-5 lg:text-xl text-justify">
              {para}
            </p>
            <Link href={link} target="_blank">
              <Button text={bText} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
