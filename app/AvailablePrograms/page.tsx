import Card from "../../components/Card";
import Wrapper from "../../components/Wrapper";
import Image from "next/image";

export default function AvailablePrograms() {
  return (
    <section id="ProgramsSection" className="w-full h-auto">
      <Wrapper>
        <div className="w-full flex flex-col text-center items-center py-20">
          <h1 className="text-white text-5xl font-pageTitleFont mb-20">
            Available Programs
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10 lg:gap-x-7 xl:gap-y-10 xl:gap-x-8 gap-y-14 lg:grid-cols-3">
            <Card
              image="/program images/ai.png"
              title="Artificial Intelligence (Specialization)"
              bText="View Details"
              para="This specialization focuses on building and deploying intelligent APIs and building Deep Learning Tensorflow models."
              link="/AvailablePrograms/AI"
            />
            <Card
              image="/program images/metaverse.png"
              title="Web 3.0 & Metaverse (Specialization)"
              bText="View Details"
              para="This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences."
              link="/AvailablePrograms/Web3Metaverse"
            />
            <Card
              image="/program images/cloudC.png"
              title="Cloud Computing (Specialization)"
              bText="View Details"
              para="The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes."
              link="/AvailablePrograms/CloudComputing"
            />
            <Card
              image="/program images/iot.png.jpg"
              title="Internet Of Things (Specialization)"
              bText="View Details"
              para="The Ambient Computing and IoT Specialization focuses on building Smart Homes and Cities using Voice computing, Matter Protocol, and Embedded Devices."
              link="/AvailablePrograms/IOT"
            />
            <Card
              image="/program images/bioInformatics.png"
              title="Genomics & Bioinformatics (Specialization)"
              bText="View Details"
              para="This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications."
              link="/AvailablePrograms/GenomeBiotech"
            />
            <Card
              image="/program images/network and automation.png"
              title="Network Automation (Specialization)"
              bText="View Details"
              para="This course teaches network engineers how to automate systems with code using a variety of technologies and tools."
              link="/AvailablePrograms/NetAutomation"
            />
          </div>

          <h1 className="text-white text-5xl font-pageTitleFont my-10 mt-40">
            Strategic Partners
          </h1>

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
