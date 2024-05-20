import React from "react";
import Image from "next/image";
import logo from "@/app/assets/logo.png";
export default function VerticalSlider() {
  const texts = [
    "Event : Oasis Bus Tour, JNM Stadium ",
    "Event : Oasis Bus Tour, JNM Stadium",
    "Event : Oasis Bus Tour, JNM Stadium",
  ];
  return (
    <section>
      <div className="flex scroll text1 lg:flex-col">
      {texts.map((text, index) => (
          <div key={index} className='flex gap-3 mx-10 lg:mx-0 lg:my-20  2xl:text-[3rem] xl:text-[rem] lg:text-[2rem]'> <Image src={logo} alt="12" width={40} height={30}/>{text}</div>
        ))}
       
      </div>
    </section>

  );
}
