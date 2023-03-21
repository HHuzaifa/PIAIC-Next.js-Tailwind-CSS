import { FC } from "react";

const Button: FC<{ text: string }> = ({ text }) => {
  return (
  <button className="w-32 px-4 py-3  bg-gradient-to-r from-[#00504B] via-[#09746F] to-[#03635E] text-white rounded-2xl font-semibold font-buttonFont">
      {text}
    </button>
  )
};

export default Button;