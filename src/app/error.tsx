"use client";

import css from "./page.module.scss";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Error({ error }: { error: Error & { digest?: string } }) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
    router.replace('/')
    router.back();
  }, [error, router]);
  return (
    <div className={`${css.bgImg} min-h-screen w-full flex justify-center items-center text-white`}>
    </div>
  );
}
