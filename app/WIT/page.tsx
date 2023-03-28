import Wrapper from "../../components/Wrapper";
import Image from "next/image";

export default function WIT() {
  return (
    <section id="WITSection" className="w-full h-auto">
      <Wrapper>
        <div className="w-full flex flex-col object-center items-center justify-center my-28">
          <Image
            src="/WIT-Logo.png"
            width="300"
            height="350"
            alt="WIT Title Image"
            className="mb-20"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 lg:gap-7 xl:gap-4 lg:grid-cols-2 xl:grid-cols-2 object-cover gap-3">
            <div>
              <Image
                src="/gallery/wit3.jpg"
                width="600"
                height="450"
                alt="WIT Gallery Image"
                className="rounded-lg md:max-w-xs lg:max-w-md xl:max-w-4xl"
              />
            </div>
            <div>
              <Image
                src="/gallery/wit1.jpg"
                width="600"
                height="450"
                alt="WIT Gallery Image"
                className="rounded-lg md:max-w-xs lg:max-w-md xl:max-w-4xl"
              />
            </div>
            <div>
              <Image
                src="/gallery/wit2.jpg"
                width="600"
                height="450"
                alt="WIT Gallery Image"
                className="rounded-lg md:max-w-xs lg:max-w-md xl:max-w-4xl"
              />
            </div>
            <div>
              <Image
                src="/gallery/wit4.jpg"
                width="600"
                height="450"
                alt="WIT Gallery Image"
                className="rounded-lg md:max-w-xs lg:max-w-md xl:max-w-4xl"
              />
            </div>
            <div>
              <Image
                src="/gallery/wit5.jpg"
                width="600"
                height="450"
                alt="WIT Gallery Image"
                className="rounded-lg md:max-w-xs lg:max-w-md xl:max-w-4xl"
              />
            </div>
            <div>
              <Image
                src="/gallery/wit6.jpg"
                width="600"
                height="450"
                alt="WIT Gallery Image"
                className="rounded-lg md:max-w-xs lg:max-w-md xl:max-w-4xl"
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
