import Wrapper from "./Wrapper";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
    return (
        <section className="w-full flex-col justify-center bg-black py-5">
            <Wrapper>
                <div className="w-full flex flex-col items-center lg:flex-row justify-between">
                    <div className="flex text-white text-xl lg:text-2xl space-x-5 pb-3 lg:pb-0">
                        <FaFacebookF />
                        <FaTwitter />
                        <FaYoutube />
                    </div>
                    <h6 className="text-white font-paraFont">© 2023 PIAIC. All rights reserved</h6>
                </div>
            </Wrapper>
        </section>
    )
}