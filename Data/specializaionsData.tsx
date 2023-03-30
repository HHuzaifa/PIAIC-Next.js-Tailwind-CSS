export interface SpecialCourses {
  id: string;
  title: string;
  description: string;
  quarter4Detail: string;
  quarter5Detail: string;
}

const specializationS: SpecialCourses[] = [
  {
    id: "AI",
    title: "Artificial Intelligence (AI) and Deep Learning",
    description:
      "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
    quarter4Detail:
      "AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
    quarter5Detail: "AI-361: Deep Learning and MLOps",
  },
  {
    id: "Web3Metaverse",
    title: "Web 3.0 (Blockchain) and Metaverse Specialization",
    description:
      "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
    quarter4Detail:
      "W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
    quarter5Detail:
      "MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
  },
  {
    id: "CloudComputing",
    title: "Cloud-Native Computing Specialization",
    description:
      "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.",
    quarter4Detail: "CN-351: Certified Kubernetes Application Developer (CKAD)",
    quarter5Detail:
      "CN-361: Developing Multi-Cloud APIs using CDK for Terraform",
  },
  {
    id: "IOT",
    title: "Ambient Computing and IoT Specialization",
    description:
      "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.",
    quarter4Detail:
      "AC-351: Ambient Computing with Voice Assistants and Matter Protocol Devices",
    quarter5Detail: "AC-361: Embedded Programming using C and Rust",
  },
  {
    id: "GenomeBiotech",
    title: "Genomics and Bioinformatics Specialization",
    description:
      "Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.",
    quarter4Detail: "Bio-351: Python for Biologists",
    quarter5Detail: "Bio-361: Bioinformatics with Python",
  },
  {
    id: "NetAutomation",
    title: "Network Programmability and Automation Specialization",
    description:
      "More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.",
    quarter4Detail: "NPA-351: CCNA 200-301 Certification",
    quarter5Detail: "NPA-361: Network Programmability and Automation",
  },
];

export default specializationS;
