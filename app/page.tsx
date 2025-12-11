"use client";
import { FormData } from "./components/form";
import { useState } from "react";
import { FormGenerator } from "./components/form-generator";
import { FormProps } from "./types/data.type";
import Image from "next/image";
import Liza from "./assets/img/Liza.png";
import Shape from "./assets/img/Shape.png";

export default function Home() {
  const [data, setData] = useState<FormProps | null>(null);

  function handleFormSubmit(userInfo: FormProps) {
    setData(userInfo);
  }

  return (
    <>
      <Image src={Liza} alt="Liza Nutri I.A" className="absolute bottom-0 right-10 w-[22vw] max-w-[420px] min-w-[180px] h-auto z-2 hidden md:block" />
      {!data ? <FormData onSubmit={handleFormSubmit} /> : <FormGenerator data={data} />}
      <Image src={Shape} alt="Shape background" className="absolute bottom-0 left-0 w-[20vw] max-w-[400px] min-w-[180px] h-full z-0 hidden md:block" />
    </>
  );
}
