'use client'
import css from "./page.module.scss";
import { useRouter } from "next/navigation";

export default function Error() {
  const router = useRouter();
  return (
    <div className={`${css.bgImg} min-h-screen w-full flex justify-center items-center text-white`}>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl mb-2">Page not found</h2>
        <button
          className="border-white border rounded-md py-1 px-3 hover:bg-white hover:text-gray-500 transition-all duration-200 ease-in-out"
          onClick={() => {
            router.back()} }
        >
          Go back
        </button>
      </div>
    </div>
  );
}
