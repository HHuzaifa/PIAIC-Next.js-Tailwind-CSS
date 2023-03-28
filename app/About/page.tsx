import Wrapper from "../../components/Wrapper";
import Image from "next/image";
import Button from "../../components/Button";
import Link from "next/link";

export default function About() {
  return (
    <section id="HeroSection" className="w-full">
      <div className="w-80 h-96 lg:w-96 lg:right-20 lg:top-36 absolute right-16 top-26 rotate-45 bg-green-900 -z-10 rounded-full blur-3xl"></div>
      <Wrapper>
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <Image
            src="/P_Blob.png"
            width="500"
            height="600"
            alt="Hero Image"
            className="lg:order-last my-10 lg:-mr-12"
          />
          <div className="flex flex-col justify-center mb-5 items-start text-justify lg:order-first lg:-mb-20">
            <h1 className="text-white text-xl lg:text-3xl font-hIFont">
              Presidential Initiative for Artificial Intelligence and Computing
              (PIAIC)
            </h1>
            <h2 className="text-white text-lg my-10 lg:text-xl font-paraFont">
              A One and Quarter Years Panaverse DAO Earn as you Learn Program
              Getting Ready for the Next Generation of the Internet
              Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
              Cloud, Edge, Ambient Computing/IoT, Network Automation, and
              Bioinformatics Technologies
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
