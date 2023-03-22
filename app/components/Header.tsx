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
    <header className="w-full h-20 bg-slate-900 sticky border-b-2 border-slate-200 inset-0">
      <Wrapper>
        <div className="w-full flex justify-between items-center text-center">
          <Image
            src={"/logo.svg"}
            width="70"
            height="70"
            alt="PIAIC Logo"
            className="pt-2 z-50"
          />

          <ul className="hidden lg:flex lg:justify-center space-x-16 font-navLinkFont font-semibold mb-5">
            <li className="text-white">
              <Link href="/" className="hover:text-[#09746F]">
                About
              </Link>
            </li>
            <li className="text-white">
              <Link href="/AvailablePrograms" className="hover:text-[#09746F]">
                Available Programs
              </Link>
            </li>

            <li className="text-white">
              <Link href="/WIT" className="hover:text-[#09746F]">
                WIT
              </Link>
            </li>
          </ul>
          <div className="-mt-6 hidden lg:flex">
            <Link href="https://portal.piaic.org/" target="_blank">
                <Button text="Apply" />
            </Link>
          </div>

          {/* Mobile Nav Menu */}
          <div className="mobile-menu w-full flex justify-end items-center relative lg:hidden xl:hidden 2xl:hidden">
            <button className="mobile-menu -mt-5" onClick={handleClick}>
              <BiMenu className="text-4xl text-white" />
            </button>

            {showMenu && (
              <div className="absolute top-8 -right-5 -left-24 lg:hidden xl:hidden 2xl:hidden py-16 border-b-2 border-white bg-slate-900 text-white">
                <ul className="max-w-full font-navLinkFont font-semibold space-y-10 text-center">
                  <li>
                    <Link href="/" className="hover:text-[#09746F]">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/AvailablePrograms"
                      className="hover:text-[#09746F]"
                    >
                      Available Programs
                    </Link>
                  </li>

                  <li>
                    <Link href="/WIT" className="hover:text-[#09746F]">
                      WIT
                    </Link>
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
