"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/app/assets/logo.png";
import qrcode from "@/app/assets/qrcode.png";
import { ClockIcon, SewingPinFilledIcon } from "@radix-ui/react-icons";
import CoverSlider from "../3d_image_slider/CoverSlider";
import EventSlider from "../horizontal_slider/EventSlider";
import VerticalSlider from "../vertical_text_slider/VerticalSlider";
export default function EventComp() {
  const [tab, setTab] = useState("events");
  return (
    <div className="bg-[#15181b] min-h-screen">
      <div className="relative flex flex-col lg:flex-row">
        <div className="lg:basis-[60%] h-screen relative overflow-hidden">
          <nav className=" h-[15vh] flex items-center text-[#ffca5f] ">
            <div className="flex text-5xl font-bold 5xl:text-9xl">
              <Image src={logo} width={50} height={50} alt="" /> Astrix.
            </div>
          </nav>
          <div className=" relative mt-10 font-bold text-7xl md:text-9xl  3xl:text-9xl 5xl:text-[180px] text-[#444649]">
            <p>ASTRIX</p>
            <br />
            <p>EVENTS</p>
          </div>
          <div className="absolute  top-[25%] -right-10">
            <EventSlider />
          </div>

          <div>
            <ul class="absolute bottom-10 w-[350px] flex left-0 md:left-10 text-sm 5xl:text-2xl font-medium text-center bg-[#282b30]  text-gray-500 rounded-3xl shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
              <li class="w-full focus-within:z-10">
                <a
                  onClick={() => setTab("events")}
                  className={`inline-block w-full p-4 text-white ${
                    tab == "events" ? "bg-[#484e56]" : "bg-[#282b30]"
                  } rounded-3xl animate-slide `}
                >
                  Events
                </a>
              </li>
              <li class="w-full focus-within:z-10">
                <a
                  onClick={() => setTab("artists")}
                  class={`${
                    tab == "artists" ? "bg-[#484e56]" : "bg-[#282b30]"
                  } inline-block w-full p-4 text-white rounded-3xl animate-slide`}
                >
                  Collections
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:flex basis-[40%]">
          <div className="basis-[15%] lg:h-screen bg-[#b9a0ff]">
            <VerticalSlider />
          </div>
          <div className="py-6 px-8  text-white basis-[85%] relative">
            <div className="my-4 mb-20 text-2xl font-bold 5xl:text-3xl">
              Explore Your First
              <p> Event </p>
            </div>
            <div className="my-8 ">
              <div className="font-bold max-4xl:text-4xl 5xl:text-6xl">
                Event Name
              </div>
              <div className="text-[#dcdddd] ">
                <div className="flex gap-5 my-2 text-lg font-bold 5xl:text-3xl">
                  <p className="flex items-center gap-2">
                    <SewingPinFilledIcon width={20} height={18} /> Venue
                  </p>
                  <p className="flex items-center gap-2">
                    {" "}
                    <ClockIcon width={20} height={20} /> Date
                  </p>
                </div>
                <div className="pr-4 text-sm 3xl:text-md 5xl:text-3xl">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Culpa, repudiandae veritatis modi quibusdam quos numquam
                  sapiente aut quisquam excepturi similique dolore odio
                  consequuntur! Porro, quis vel. Sint doloremque est commodi
                  harum enim consectetur, consequatur aliquam magnam quaerat
                  magni aperiam optio qui nesciunt fugiat.
                </div>
              </div>
              <div className="my-4 5xl:text-3xl">
                <div className="font-bold text-white">Artist Lineup</div>
                <div className=" min-w-[350px] sm:min-w-[450px]    md:min-w-[750px]  lg:min-w-[350px] xl:w-[380px] 2xl:w-[490px] max-4xl:w-[500px] 5xl:w-[1000px] my-4 ">
                  <CoverSlider />
                </div>
              </div>
            </div>
            <div className=" lg:absolute bottom-5 flex items-end justify-between lg:w-[90%] ">
              <div className="bg-white rounded-md">
                <Image src={qrcode} width={100} height={100} />
              </div>
              <div>
                <button className="bg-[#ffca5f] py-2 px-4 rounded-3xl text-black font-bold ">
                  Join Waitlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
