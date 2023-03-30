"use client";
import Wrapper from "./Wrapper";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { BiMenu } from "react-icons/bi";
import Button from "./Button";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const closeMenu = (e: any) => {
      if (!e.target.closest(".mobile-menu")) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, []);

  return (
    <header className="w-full h-20 sticky backdrop-blur-xl border-b-2 border-[#141414] inset-0 z-40">
      <Wrapper>
        <div className="w-full flex justify-between items-center text-center">
          <Link href="/" className="z-50">
            <Image
              src={"/logo.svg"}
              width="70"
              height="70"
              alt="PIAIC Logo"
              className="pt-2"
            />
          </Link>

          <ul className="hidden lg:flex lg:justify-center space-x-16 font-navLinkFont font-semibold mb-5">
            <li className="text-white">
              <a
                href="/"
                className="hover:text-[#09746F] text-white"
                
              >
                About
              </a>
            </li>
            <li className="text-white">
              <a
                href="#ProgramsSection"
                className="hover:text-[#09746F] text-white"
              >
                Available Programs
              </a>
            </li>

            <li className="text-white">
              <a
                href="#WITSection"
                className="hover:text-[#09746F] text-white"
                onClick={(event) => {
                  event.preventDefault();
                  const yOffset = -100; // Set the offset here
                  const element = document.querySelector("#WITSection");
                  if (element) {
                    const y =
                      element.getBoundingClientRect().top +
                      window.pageYOffset +
                      yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                }}
              >
                WIT
              </a>
            </li>
          </ul>
          <div className="-mt-6 hidden lg:flex">
            <Link href="https://portal.piaic.org/" target="_blank">
              <Button text="Apply" />
            </Link>
          </div>

          {/* Mobile Nav Menu */}
          <div className="mobile-menu w-full flex justify-end items-center relative lg:hidden xl:hidden 2xl:hidden">
            <button className="mobile-menu" onClick={handleClick}>
              <BiMenu className="text-4xl text-white" />
            </button>

            {showMenu && (
              <div className="absolute top-8 -right-5 -left-24 lg:hidden xl:hidden 2xl:hidden py-16 border-b-2 border-white text-white bg-[#141414] ">
                <ul className="max-w-full font-navLinkFont font-semibold space-y-10 text-center">
                  <li className="text-white">
                    <a
                      href="/"
                      className="hover:text-[#09746F] text-white"
                      onClick={(event) => {
                        event.preventDefault();
                        const yOffset = -180; // Set the offset here
                        const element = document.querySelector("#HeroSection");
                        if (element) {
                          const y =
                            element.getBoundingClientRect().top +
                            window.pageYOffset +
                            yOffset;
                          window.scrollTo({ top: y, behavior: "smooth" });
                        }
                      }}
                    >
                      About
                    </a>
                  </li>
                  <li className="text-white">
                    <a
                      href="#ProgramsSection"
                      className="hover:text-[#09746F] text-white"
                    >
                      Available Programs
                    </a>
                  </li>

                  <li className="text-white">
                    <a
                      href="#WITSection"
                      className="hover:text-[#09746F] text-white"
                      onClick={(event) => {
                        event.preventDefault();
                        const yOffset = -100; // Set the offset here
                        const element = document.querySelector("#WITSection");
                        if (element) {
                          const y =
                            element.getBoundingClientRect().top +
                            window.pageYOffset +
                            yOffset;
                          window.scrollTo({ top: y, behavior: "smooth" });
                        }
                      }}
                    >
                      WIT
                    </a>
                  </li>

                  <div>
                    <Link href="https://portal.piaic.org/" target="_blank">
                      <Button text="Apply" />
                    </Link>
                  </div>
                </ul>
              </div>
            )}
          </div>
        </div>
      </Wrapper>
    </header>
  );
}
