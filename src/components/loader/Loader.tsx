import Image from "next/image";
import loaderImg from "/public/loaderImg.png";
import css from "./Loader.module.scss";

export default function Loader() {
  return (
    <div className="text-white flex flex-col justify-center items-center mt-5">
      <div className="font-medium text-xl italic font-sans tracking-wider">Wait a moment...</div>
      <Image
        className={`${css.anim}`}
        src={loaderImg}
        priority
        alt=""
        width={300}
        height={300}
      />
    </div>
  );
}
