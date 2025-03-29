"use client"
import { useState, useEffect } from "react";
import Image from "next/image";

import img1 from '@/../public/images/nail-ondfvo.jpg'
import img2 from '@/../public/images/nail-ncoiz.jpg'
import img3 from '@/../public/images/nail-eed.jpg'
import img4 from '@/../public/images/nail-nicdc.jpg'

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function Hero() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [img2, img3, img1, img4];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval); // Cleanup on component unmount
    }, [images.length]); // Added images.length to dependency array

    const t = useTranslations('Hero');

    return (
        <div className="md:shadow-2xl relative z-30 text-white flex flex-col lg:flex-row-reverse h-[calc(100vh-4rem)] w-screen pt-7 md:pt-0 justify-start md:justify-center items-center xl:px-16">
            {/* Background color layer */}
            <div className="absolute inset-0 bg-nail-special2 z-10"></div>

            {/* Background image div - positioned below the gradient */}
            <div className="absolute h-2/6 w-full bottom-0 overflow-hidden md:hidden z-10  bg-nail-special2">
            </div>

            {/* Gradient overlay - positioned above the image */}
            <div className="absolute inset-0  z-20"></div>

            {/* Main content - above all background elements */}
            <div className="z-30 md:space-y-4 lg:space-y-0 lg:space-x-10 flex flex-col lg:flex-row h-full lg:max-h-10/12 w-full xl:w-10/12 max-w-[1500px] justify-start md:justify-center items-center">
                <div className="h-1/6 md:h-2/6 lg:h-full lg:w-7/12 lg:mb-0 flex flex-col items-center justify-center lg:space-y-16">
                    <div className="md:space-y-8 lg:space-y-6 lg:h-full lg:pl-5 xl:pl-0 flex flex-col lg:justify-center">
                        <h1 className="text-nail-50 font-inter font-light scale-y-75 leading-11 lg:leading-20 lg:tracking-tight text-5xl md:text-6xl lg:text-8xl text-center lg:text-left px-2 md:px-14 lg:px-0"><p className=""><span className="text-lime-300 z-30 font-serif">{t('title1')}</span> {t('title2')} </p></h1>
                        <p className="hidden md:block leading-7 tracking-widest text-sm text-center lg:text-left lg:w-full w-5/6 mx-auto">{t("desc")}</p>
                    </div>
                    <div className="flex items-start w-fit mx-auto">
                        <div className="flex items-center h-fit space-x-3">
                            <Link href={"https://www.instagram.com/se_nailstudio"} className="hover:bg-nail-50 hover:text-nail-special2 hover:border-nail-special2 transition-colors duration-300 text-sm lg:text-lg text-nail-50 border border-nail-50 py-2 md:py-4 px-7 md:px-12 hidden lg:flex">{t("bookNowLink")}</Link>
                        </div>
                    </div>
                </div>
                <div className="relative flex w-full lg:w-5/12 h-3/6 md:h-3/6 lg:h-5/6 overflow-hidden">
                    <div className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out">
                        {images.map((img, index) => (
                            <div
                                key={index}
                                className={`bg-nail-special2 absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentImageIndex === index ? "opacity-100" : "opacity-0"}`}
                            >
                                <Image src={img} alt={`hero-${index}`} className="mix-blend-lighten object-cover w-full h-full" />
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center item-center absolute w-full h-full top-0 bottom-0 left-0 right-0">
                        <div className="border border-nail-special2 w-full h-full bg-transparent border-t-[0px] border-b-[20px] lg:border-t-[30px] lg:border-b-[50px]"></div>
                        <div className="border border-nail-special2 w-full h-full border-t-[30px] lg:border-t-[50px] border-b-[30px] lg:border-b-[70px] bg-transparent"></div>
                        <div className="border border-nail-special2 w-full h-full bg-transparent"></div>
                        <div className="border border-nail-special2 w-full h-full bg-transparent"></div>
                        <div className="border border-nail-special2 w-full h-full bg-transparent border-t-[30px] lg:border-t-[90px] border-b-[10px] lg:border-b-[150px]"></div>
                    </div>

                    <div className="flex rotate-90 item-center absolute w-full lg:w-full h-[400px] lg:h-full">
                        <div className="border border-nail-special2 w-full h-full bg-transparent"></div>
                        <div className="border border-nail-special2 w-full h-full bg-transparent lg:border-t-[90px] lg:border-b-[70px]"></div>
                        <div className="border border-nail-special2 w-full h-full bg-transparent"></div>
                    </div>
                </div>
                <div className="h-2/6 md:h-fit flex flex-col items-center justify-center">
                    <p className="md:hidden leading-5 pt-3 px-2 tracking-widest text-sm font-cinzel text-center lg:text-left lg:w-full">{t("desc")}</p>
                    <Link href={''} className="hover:bg-nail-50 hover:text-nail-special2 hover:border-nail-50 transition-colors duration-300 mt-3 w-fit mx-auto text-sm lg:text-lg text-nail-50 border border-nail-50 py-1 md:py-4 px-7 md:px-12 block lg:hidden">{t("bookNowLink")}</Link>
                </div>
            </div>
        </div>
    );
}