import Image from "next/image";
import loaderImg from "/public/loaderImg.png";
import css from "./Loader.module.scss";

export default function Loader() {
  return (
    <div className="flex justify-center items-center">
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
