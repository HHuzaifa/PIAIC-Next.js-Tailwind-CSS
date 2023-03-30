import Wrapper from "@/components/Wrapper";
import { BsCircleFill } from "react-icons/bs";
import specializationS from "@/Data/specializaionsData";
import specialization from "@/Data/specializaionsData";

async function getPost(id: string) {
  const specialization = specializationS.find((specialization: any) => specialization.id === id)
  return specialization
}

export default async function Course({ params }: { params: { id: string } }) {
  const { id } = params;
  const course = await getPost(id)

  return (
    <section className="w-full h-auto my-20">
      <div className="w-20 h-96 absolute right-40 rotate-45 bg-green-900 -z-10 rounded-full blur-3xl"></div>
      <Wrapper>
        <div className="w-full flex-col justify-between items-center text-center">
          <h1 className="text-white text-5xl font-pageTitleFont mb-20">
            {course!.title}
          </h1>
          <p className="text-white text-xl font-paraFont mb-20">
            {course!.description}
          </p>

          <div className="pb-10">
            <h2 className="text-[#2ca79c] text-xl lg:text-2xl font-semibold font-pageTitleFont">
              Core Courses (Common in All Specializations)
            </h2>
            <ul className="my-16">
              <li className="relative flex gap-6 pb-5 -z-50">
                <div className="before:absolute before:left-[5.5px] before:h-full before:w-1 before:bg-[#2ca79c]">
                  <BsCircleFill className="text-[#2ca79c] text-base" />
                </div>
                <div className="bg-slate-500 text-start text-lg font-paraFont text-white rounded-2xl p-5">
                  <h3 className="font-bold text-xl">Quarter I (Core)</h3>
                  <p>CS-101: Object-Oriented Programming using TypeScript</p>
                </div>
              </li>
              <li className="relative flex gap-6 pb-5 -z-50">
                <div className="before:absolute before:left-[5.5px] before:h-full before:w-1 before:bg-[#2ca79c]">
                  <BsCircleFill className="text-[#2ca79c] text-base" />
                </div>
                <div className="bg-slate-500 text-start text-lg font-paraFont text-white rounded-2xl p-5">
                  <h3 className="font-bold text-xl">Quarter II (Core)</h3>
                  <p>
                    W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud
                    Cloud Apps and APIs using Next.js 13 and Cloud Development
                    Kit (CDK) for Terraform
                  </p>
                </div>
              </li>
              <li className="relative flex gap-6 pb-5 -z-50">
                <div className="">
                  <BsCircleFill className="text-[#2ca79c] text-base" />
                </div>
                <div className="bg-slate-700 text-start text-lg font-paraFont text-white rounded-2xl p-5">
                  <h3 className="font-bold text-xl">Quarter III (Core)</h3>
                  <p>
                    $-101: Dollar Making Bootcamp - Full-Stack Template and API
                    Product Development
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <div className="w-20 h-96 absolute left-60  bg-green-900 -z-50 rounded-full blur-3xl"></div>
            <h2 className="text-[#2ca79c] text-xl lg:text-2xl font-semibold font-pageTitleFont">
              {course!.title}
            </h2>
            <ul className="my-10">
              <li className="relative flex gap-6 pb-5 -z-50">
                <div className="before:absolute before:left-[5.5px] before:h-full before:w-1 before:bg-[#2ca79c]">
                  <BsCircleFill className="text-[#2ca79c] text-base" />
                </div>
                <div className="bg-slate-800 text-start text-lg font-paraFont text-white rounded-2xl p-5">
                  <h3 className="font-bold text-xl">Quarter IV</h3>
                  <p>
                    {course!.quarter4Detail}
                  </p>
                </div>
              </li>
              <li className="relative flex gap-6 pb-5 -z-50">
                <div className="">
                  <BsCircleFill className="text-[#2ca79c] text-base" />
                </div>
                <div className="bg-slate-900 text-start text-lg font-paraFont text-white rounded-2xl p-5">
                  <h3 className="font-bold text-xl">Quarter V</h3>
                  <p>{course!.quarter5Detail}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
