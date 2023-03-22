import Wrapper from "../components/Wrapper";
import Image from "next/image";

export default function WIT() {
  return (
    <section className="w-full h-auto">
      <Wrapper>
        <div className="w-full flex flex-col object-center items-center justify-center my-28">
          <Image
            src="/women-in-tech-logo.png"
            width="300"
            height="350"
            alt="WIT Title Image"
            className="mb-20"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 object-cover gap-3">
            <Image
              src="/gallery/wit3.jpg"
              width="600"
              height="450"
              alt="WIT Gallery Image"
            />
            <Image
              src="/gallery/wit1.jpg"
              width="600"
              height="450"
              alt="WIT Gallery Image"
            />
            <Image
              src="/gallery/wit2.jpg"
              width="600"
              height="450"
              alt="WIT Gallery Image"
            />
            <Image
              src="/gallery/wit4.jpg"
              width="600"
              height="450"
              alt="WIT Gallery Image"
            />
            <Image
              src="/gallery/wit6.jpg"
              width="600"
              height="450"
              alt="WIT Gallery Image"
            />
            <Image
              src="/gallery/wit6.jpg"
              width="600"
              height="450"
              alt="WIT Gallery Image"
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
