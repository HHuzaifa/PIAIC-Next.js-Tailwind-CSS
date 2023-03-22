import Card from "../components/Card";
import Wrapper from "../components/Wrapper";
import Image from "next/image";

export default function AvailablePrograms() {
  return (
    <section className="w-full h-auto bg-slate-900">
      <Wrapper>
        <div className="w-full flex flex-col text-center items-center py-20">
          <h1 className="text-white text-2xl font-hIFont mb-20">
            " Available Programs "
          </h1>

          <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:gap-x-10">
            <Card
              image="/program images/ai.png"
              title="Artificial Intelligence (Specialization)"
              bText="View Details"
              link="/AI"
            />
            <Card
              image="/program images/metaverse.png"
              title="Web 3.0 and Metaverse (Specialization)"
              bText="View Details"
              link="/Web3_Meta"
            />
            <Card
              image="/program images/cloudC.png"
              title="Cloud Computing (Specialization)"
              bText="View Details"
              link="/Cloud"
            />
            <Card
              image="/program images/iot.png.jpg"
              title="Internet Of Things (Specialization)"
              bText="View Details"
              link="/IOT"
            />
            <Card
              image="/program images/bioInformatics.png"
              title="Genomics & Bioinformatics (Specialization)"
              bText="View Details"
              link="/BioInformatics"
            />
            <Card
              image="/program images/network and automation.png"
              title="Network Programmability & Automation (Specialization)"
              bText="View Details"
              link="/NetworkAutomation"
            />
          </div>

          <h1 className="text-white text-2xl font-hIFont my-10 mt-40">" Strategic Partners "</h1>

          <div className="flex flex-col lg:flex-row lg:space-x-10 lg:justify-center w-32 h-32 items-center">
            <Image
              src="/panacloud.png"
              width="200"
              height="200"
              alt="panacloud logo"
            />
            <Image
              src="/saylaniLogo.png"
              width="280"
              height="200"
              alt="saylani logo"
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
