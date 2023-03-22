import Wrapper from "../components/Wrapper";
import Image from "next/image";
import Button from "../components/Button";
import Link from "next/link";

export default function About() {
  return (
    <section className="w-full h-screen mb-10">
      <Wrapper>
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <Image
            src="/P_Blob.png"
            width="700"
            height="700"
            alt="Hero Image"
            className="lg:order-last my-10 lg:-mr-16"
          />
          <div className="flex flex-col justify-center mb-5 items-start text-justify lg:order-first lg:-mb-5">
            <h1 className="text-slate-900 text-xl lg:text-2xl font-bold font-hIFont">
              Presidential Initiative for Artificial Intelligence and Computing
              (PIAIC)
            </h1>
            <h2 className="text-slate-900 text-lg font-medium my-10 lg:text-lg font-paraFont">
              A One and Quarter Years Program
              Getting Ready for the Next Generation of the Internet
            </h2>
            <Link href="https://portal.piaic.org/" target="_blank">
              <Button text="Apply" />
            </Link>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
