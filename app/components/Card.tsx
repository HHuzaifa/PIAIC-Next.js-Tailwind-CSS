import { FC } from "react";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

const Card: FC<{
  title: string;
  bText: string;
  image: string;
  link: string;
}> = ({ title, bText, image, link }) => {
  return (
    <div className="flex flex-col justify-center items-center p-5 bg-slate-200 max-w-sm rounded-sm">
      <Image
        src={image}
        width="300"
        height="300"
        alt="program/course image"
        className="rounded-t-lg object-cover"
      />
      <h3 className="text-lg font-hIFont my-2"> {title} </h3>
      <Link href={link} target="_blank">
        <Button text={bText}></Button>
      </Link>
    </div>
  );
};

export default Card;
