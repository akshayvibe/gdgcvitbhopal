import React from "react";
import { Link } from "react-router-dom";

import building from "@/assets/VitVectorImage.svg";
import cloudLeft from "@/assets/Cloud_Elem_1.svg";
import cloudRight from "@/assets/Cloud_Elem_2.svg";
import planet from "@/assets/Planets_Image.svg";
import kiteLeft from "@/assets/Kite_Element_1.svg";
import kiteRight from "@/assets/Kite_Element_2.svg";
import learn from "@/assets/learn.svg";
import build from "@/assets/build.png";
import gdgLogo from "@/assets/GDG Logo.svg";

import { Button } from "@/shadcn/ui/button.jsx";
import { ExternalLink } from "lucide-react";


function HeroSectionMobile() {
    return (
        <section
            aria-label="Mobile hero"
            className="relative w-full overflow-hidden bg-white text-black"
        >
            {/* Decorative background */}
            <img
                src={cloudLeft}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute left-2 top-14 w-20 opacity-90"
            />
            <img
                src={cloudRight}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute right-1 top-20 w-24 opacity-90"
            />
            <img
                src={planet}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute right-4 top-7 w-10 opacity-90"
            />
            <img
                src={kiteLeft}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute left-3 top-[40%] w-14 opacity-95"
            />
            <img
                src={kiteRight}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute left-[48%] top-[24%] w-12 -translate-x-1/2 opacity-95"
            />

            {/* Main layout */}
            <div className="relative mx-auto flex min-h-[calc(100svh-3.25rem)] max-w-107.5 flex-col items-center px-4 pb-5 pt-4">
                <div className="mt-1 text-xs underline underline-offset-4">
                    Welcome
                </div>

                <h1
                    className="mt-3 text-center leading-[0.9]"
                    style={{
                        fontFamily:
                            "Syne, system-ui, -apple-system, Segoe UI, Roboto, Arial",
                    }}
                >
                    <span className="block text-[44px] font-extrabold text-[#4285F4] drop-shadow-[0_4px_0_rgba(0,0,0,0.18)] [-webkit-text-stroke:2px_#000]">
                        we are
                    </span>
                    <span className="block text-[44px] font-black text-black">
                        gdgc<span className="text-[#ff2d55]">.</span>
                    </span>
                </h1>

                <div className="mt-2 text-[10px] leading-tight text-zinc-700">
                    17.3616° N, 78.4747° E
                </div>
                <div className="text-[10px] font-semibold text-[#4285F4]">
                    VIT Bhopal, India
                </div>

                {/* Building illustration */}
                <div className="relative mt-3 w-full flex-1">
                    <img
                        src={building}
                        alt="VIT Bhopal Building"
                        className="pointer-events-none absolute left-1/2 top-8 w-[132%] max-w-none -translate-x-1/2"
                    />
                </div>

                {/* Side tags */}
                <img
                    src={learn}
                    alt="#learn"
                    className="pointer-events-none absolute bottom-23 left-3 w-20 -rotate-18"
                />
                <img
                    src={build}
                    alt="#build"
                    className="pointer-events-none absolute bottom-23 right-3 w-20 rotate-18"
                />

                {/* Join button */}
                <Button className="absolute bottom-16 left-1/2 -translate-x-1/2">
                    <ExternalLink color="white" />
                    <Link to="/join" className="inline lg:hidden text-sm">
                        Join
                    </Link>
                </Button>

                {/* Footer */}
            </div>
        </section>
    );
}

export default HeroSectionMobile;
