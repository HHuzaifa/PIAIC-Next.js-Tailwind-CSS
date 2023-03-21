import Wrapper from "../components/Wrapper";
import Image from "next/image";
import Button from "../components/Button";

export default function About() {
  return (
    <section className="w-full h-screen">
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
            <h1 className="text-black text-xl lg:text-3xl font-hIFont">
              Presidential Initiative for Artificial Intelligence and Computing
              (PIAIC)
            </h1>
            <h2 className="text-black text-lg my-10 lg:text-lg font-paraFont">
              A One and Quarter Years Panaverse DAO Earn as you Learn Program
              Getting Ready for the Next Generation of the Internet
            </h2>
            <Button text="Apply" />
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
