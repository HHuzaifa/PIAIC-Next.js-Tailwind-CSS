import Wrapper from "../components/Wrapper";
import Image from "next/image";
import { BsCircleFill } from "react-icons/bs";

export default function AI() {
  return (
    <section className="w-full h-auto my-20">
      <Wrapper>
        <div className="w-full flex-col justify-between items-center text-center">


          <h1 className="text-slate-900 text-2xl lg:text-3xl font-bold font-hIFont">
            Artificial Intelligence
          </h1>

          <div>
            <h2 className="text-slate-900 text-xl lg:text-2xl font-bold font-hIFont">
              Core Courses (Common in All Specializations)
            </h2>
            <ul className="">
              <li className="relative flex gap-6 pb-5 -z-50">
                <div className="before:absolute before:left-[5.5px] before:h-full before:w-1 before:bg-[#09746F]">
                  <BsCircleFill className="text-[#09746F] text-base" />
                </div>
                <div className="bg-slate-900 text-start text-white rounded-2xl p-5">
                  <h3>Quarter I (Core)</h3>
                  <p>CS-101: Object-Oriented Programming using TypeScript</p>
                </div>
              </li>
              <li className="relative flex gap-6 pb-5 -z-50">
                <div className="before:absolute before:left-[5.5px] before:h-full before:w-1 before:bg-[#09746F]">
                  <BsCircleFill className="text-[#09746F] text-base" />
                </div>
                <div className="bg-slate-900 text-start text-white rounded-2xl p-5">
                  <h3>Quarter II (Core)</h3>
                  <p>W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform</p>
                </div>
              </li>
              <li className="relative flex gap-6 pb-5 -z-50">
                <div className="before:absolute before:left-[5.5px] before:h-full before:w-1 before:bg-[#09746F]">
                  <BsCircleFill className="text-[#09746F] text-base" />
                </div>
                <div className="bg-slate-900 text-start text-white rounded-2xl p-5">
                  <h3>Quarter III (Core)</h3>
                  <p>$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development</p>
                </div>
              </li>
            </ul>
          </div>


          <div>
            <h2 className="text-slate-900 text-xl lg:text-2xl font-bold font-hIFont">
            Artificial Intelligence (AI) and Deep Learning Specialization
            </h2>
            <ul className="">
              <li className="relative flex gap-6 pb-5 -z-50">
                <div className="before:absolute before:left-[5.5px] before:h-full before:w-1 before:bg-[#09746F]">
                  <BsCircleFill className="text-[#09746F] text-base" />
                </div>
                <div className="bg-slate-900 text-start text-white rounded-2xl p-5">
                  <h3>Quarter IV</h3>
                  <p>AI-351: Developing Planet-Scale Intelligent APIs and Python Programming</p>
                </div>
              </li>
              <li className="relative flex gap-6 pb-5 -z-50">
                <div className="before:absolute before:left-[5.5px] before:h-full before:w-1 before:bg-[#09746F]">
                  <BsCircleFill className="text-[#09746F] text-base" />
                </div>
                <div className="bg-slate-900 text-start text-white rounded-2xl p-5">
                  <h3>Quarter V</h3>
                  <p>AI-361: Deep Learning and MLOps</p>
                </div>
              </li>
              
            </ul>
          </div>


        </div>
      </Wrapper>
    </section>
  );
}
