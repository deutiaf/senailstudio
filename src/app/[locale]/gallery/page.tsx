"use client"

import Image from 'next/image'
import { useState } from 'react'
import img1 from '@/../public/images/nail-eed.jpg'
import img2 from '@/../public/images/nail-iznodo.jpg'
import img3 from '@/../public/images/nail-edfd.jpg'
import img4 from '@/../public/images/nail-ojncovz.jpg'
import img5 from '@/../public/images/giorgio-trovato-gb6gtiTZKB8-unsplash.jpg'
import img6 from '@/../public/images/jenn-causing-i_HQ8CFcyfE-unsplash.jpg'
import img7 from '@/../public/images/jenn-causing-8g9sStvDV34-unsplash.jpg'
import img8 from '@/../public/images/annie-spratt-FqpSyjCdccw-unsplash.jpg'
import img9 from '@/../public/images/anna-keibalo-LZmPAULkFUc-unsplash.jpg'
import img10 from '@/../public/images/anna-keibalo-LZmPAULkFUc-unsplash.jpg'
import img11 from '@/../public/images/nail-ddlk.webp'
import img12 from '@/../public/images/nail-ondfvo.jpg'
import img13 from '@/../public/images/nail-ncoiz.jpg'
import img14 from '@/../public/images/nail-nicdc.jpg'
import img15 from '@/../public/images/nails_hero.jpg'

function page() {
    const [fullscreenImage, setFullscreenImage] = useState(null);

    const images = [
        { src: img1, alt: 'Nail design 1' },
        { src: img2, alt: 'Nail design 2' },
        { src: img3, alt: 'Nail design 3' },
        { src: img4, alt: 'Nail design 4' },
        { src: img5, alt: 'Nail design 5' },
        { src: img6, alt: 'Nail design 6' },
        { src: img7, alt: 'Nail design 7' },
        { src: img8, alt: 'Nail design 8' },
        { src: img9, alt: 'Nail design 9' },
        { src: img10, alt: 'Nail design 10' },
        { src: img11, alt: 'Nail design 11' },
        { src: img12, alt: 'Nail design 12' },
        { src: img13, alt: 'Nail design 13' },
        { src: img14, alt: 'Nail design 14' },
        { src: img15, alt: 'Nail design 15' },
    ];

    const openFullscreen = (index) => {
        setFullscreenImage(index);
        document.body.style.overflow = 'hidden';
    };

    const closeFullscreen = (event) => {
        event.stopPropagation();  // Empêche la propagation de l'événement
        setFullscreenImage(null);
        document.body.style.overflow = 'auto';
    };


    const navigateFullscreen = (direction) => {
        if (fullscreenImage !== null) {
            const newIndex = (fullscreenImage + direction + images.length) % images.length;
            setFullscreenImage(newIndex);
        }
    };

    return (
        <section className='w-screen py-40 relative overflow-hidden'>
            <h1 className='z-30 text-center md:my-10 px-10 lg:px-0 font-bangers text-6xl md:text-9xl text-nail-special2 tracking-wider word-spacing-big'>IRENE'S GALLERY</h1>
            <p className='z-30 w-10/12 lg:w-7/12 mx-auto my-8 md:my-16 text-center leading-7 font-poppins  text-sm md:text-lg text-neutral-600 word-spacing tracking-wider'>Explore our stunning collection of nail art designs, where creativity meets beauty. <br /> Whether you're looking for inspiration for your next manicure or seeking the perfect style to suit your personality, you're sure to find something you love here!</p>

            {/* ---------------------------   Gallery Grid version desktop   ----------------*/}
            <div className="hidden z-30 md:grid grid-cols-6 grid-rows-12 gap-2 h-[100rem] *:rounded-3xl *:overflow-hidden *:relative w-11/12 lg:w-10/12 mx-auto">
                <div className="col-span-2 row-span-5 cursor-pointer" onClick={() => openFullscreen(0)}>
                    <Image alt={images[0].alt} src={images[0].src} className='object-cover size-full hover:scale-105 transition-transform duration-300' />
                </div>
                <div className="col-span-2 row-span-3 col-start-3 cursor-pointer" onClick={() => openFullscreen(1)}>
                    <Image alt={images[1].alt} src={images[1].src} className='object-cover size-full hover:scale-105 transition-transform duration-300' />
                </div>
                <div className="col-span-2 row-span-2 col-start-3 row-start-4 cursor-pointer" onClick={() => openFullscreen(2)}>
                    <Image alt={images[2].alt} src={images[2].src} className='object-cover size-full hover:scale-105 transition-transform duration-300' />
                </div>
                <div className="col-span-2 row-span-4 col-start-5 row-start-1 cursor-pointer" onClick={() => openFullscreen(3)}>
                    <Image alt={images[3].alt} src={images[3].src} className='object-cover size-full hover:scale-105 transition-transform duration-300' />
                </div>
                <div className="col-span-3 row-span-3 col-start-1 row-start-6 cursor-pointer" onClick={() => openFullscreen(4)}>
                    <Image alt={images[4].alt} src={images[4].src} className='object-cover size-full hover:scale-105 transition-transform duration-300' />
                </div>
                <div className="row-span-3 col-start-4 row-start-6 cursor-pointer" onClick={() => openFullscreen(5)}>
                    <Image alt={images[5].alt} src={images[5].src} className='object-cover size-full hover:scale-105 transition-transform duration-300' />
                </div>
                <div className="col-span-2 row-span-3 col-start-5 row-start-5 cursor-pointer" onClick={() => openFullscreen(6)}>
                    <Image alt={images[6].alt} src={images[6].src} className='object-cover size-full hover:scale-105 transition-transform duration-300' />
                </div>
                <div className="row-span-3 col-start-5 row-start-8 cursor-pointer" onClick={() => openFullscreen(7)}>
                    <Image alt={images[7].alt} src={images[7].src} className='object-cover size-full hover:scale-105 transition-transform duration-300' />
                </div>
                <div className="row-span-3 col-start-6 row-start-8 cursor-pointer" onClick={() => openFullscreen(8)}>
                    <Image alt={images[8].alt} src={images[8].src} className='object-cover size-full hover:scale-105 transition-transform duration-300' />
                </div>
                <div className="row-span-2 row-start-9 cursor-pointer" onClick={() => openFullscreen(9)}>
                    <Image alt={images[9].alt} src={images[9].src} className='object-cover size-full hover:scale-105 transition-transform duration-300' />
                </div>
                <div className="col-span-2 row-span-2 row-start-9 cursor-pointer" onClick={() => openFullscreen(10)}>
                    <Image alt={images[10].alt} src={images[10].src} className='object-cover size-full hover:scale-105 transition-transform duration-300' />
                </div>
                <div className="row-span-2 col-start-4 row-start-9 cursor-pointer" onClick={() => openFullscreen(11)}>
                    <Image alt={images[11].alt} src={images[11].src} className='object-cover size-full hover:scale-105 transition-transform duration-300' />
                </div>
                <div className="col-span-3 row-span-2 col-start-4 row-start-11 cursor-pointer" onClick={() => openFullscreen(12)}>
                    <Image alt={images[12].alt} src={images[12].src} className='object-cover size-full hover:scale-105 transition-transform duration-300' />
                </div>
                <div className="col-span-2 row-span-2 col-start-1 row-start-11 cursor-pointer" onClick={() => openFullscreen(13)}>
                    <Image alt={images[13].alt} src={images[13].src} className='object-cover size-full hover:scale-105 transition-transform duration-300' />
                </div>
                <div className="row-span-2 col-start-3 row-start-11 cursor-pointer" onClick={() => openFullscreen(14)}>
                    <Image alt={images[14].alt} src={images[14].src} className='object-cover size-full hover:scale-105 transition-transform duration-300' />
                </div>
            </div>


            {/* ------------------    Gallery Grid - Mobile Responsiv -------------- */}
            <div className="z-30 w-full px-2.5 mx-auto md:hidden">
                {/* Desktop version - hidden on mobile */}
                <div className="hidden md:grid grid-cols-6 grid-rows-12 gap-2 h-[100rem] *:rounded-3xl *:overflow-hidden *:relative">
                    {/* Votre grille desktop existante */}
                    <div className="col-span-2 row-span-5 cursor-pointer" onClick={() => openFullscreen(0)}>
                        <Image alt={images[0].alt} src={images[0].src} className='object-cover size-full hover:scale-105 transition-transform duration-300' />
                    </div>
                    <div className="col-span-2 row-span-3 col-start-3 cursor-pointer" onClick={() => openFullscreen(1)}>
                        <Image alt={images[1].alt} src={images[1].src} className='object-cover size-full hover:scale-105 transition-transform duration-300' />
                    </div>
                    {/* ... autres éléments de la grille desktop ... */}
                </div>

                {/* Mobile version avec disposition variable */}
                <div className="md:hidden grid gap-3">
                    {/* Ligne 1: Image grande */}
                    <div className="w-full aspect-video rounded-2xl overflow-hidden cursor-pointer" onClick={() => openFullscreen(0)}>
                        <Image alt={images[0].alt} src={images[0].src} className="object-cover size-full hover:scale-105 transition-transform duration-300" />
                    </div>

                    {/* Ligne 2: Deux images */}
                    <div className="grid grid-cols-2 gap-1">
                        <div className="aspect-square rounded-2xl overflow-hidden cursor-pointer" onClick={() => openFullscreen(1)}>
                            <Image alt={images[1].alt} src={images[1].src} className="object-cover size-full hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="aspect-square rounded-2xl overflow-hidden cursor-pointer" onClick={() => openFullscreen(2)}>
                            <Image alt={images[2].alt} src={images[2].src} className="object-cover size-full hover:scale-105 transition-transform duration-300" />
                        </div>
                    </div>

                    {/* Ligne 3: Trois images */}
                    <div className="grid grid-cols-3 gap-1">
                        <div className="aspect-square rounded-2xl overflow-hidden cursor-pointer" onClick={() => openFullscreen(3)}>
                            <Image alt={images[3].alt} src={images[3].src} className="object-cover size-full hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="aspect-square rounded-2xl overflow-hidden cursor-pointer" onClick={() => openFullscreen(4)}>
                            <Image alt={images[4].alt} src={images[4].src} className="object-cover size-full hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="aspect-square rounded-2xl overflow-hidden cursor-pointer" onClick={() => openFullscreen(5)}>
                            <Image alt={images[5].alt} src={images[5].src} className="object-cover size-full hover:scale-105 transition-transform duration-300" />
                        </div>
                    </div>

                    {/* Ligne 4: Image unique */}
                    <div className="w-full aspect-video rounded-2xl overflow-hidden cursor-pointer" onClick={() => openFullscreen(6)}>
                        <Image alt={images[6].alt} src={images[6].src} className="object-cover size-full hover:scale-105 transition-transform duration-300" />
                    </div>

                    {/* Ligne 5: Deux images */}
                    <div className="grid grid-cols-2 gap-1">
                        <div className="aspect-square rounded-2xl overflow-hidden cursor-pointer" onClick={() => openFullscreen(7)}>
                            <Image alt={images[7].alt} src={images[7].src} className="object-cover size-full hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="aspect-square rounded-2xl overflow-hidden cursor-pointer" onClick={() => openFullscreen(8)}>
                            <Image alt={images[8].alt} src={images[8].src} className="object-cover size-full hover:scale-105 transition-transform duration-300" />
                        </div>
                    </div>

                    {/* Ligne 6: Deux images (ratio différent) */}
                    <div className="grid grid-cols-2 gap-1">
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer" onClick={() => openFullscreen(9)}>
                            <Image alt={images[9].alt} src={images[9].src} className="object-cover size-full hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer" onClick={() => openFullscreen(10)}>
                            <Image alt={images[10].alt} src={images[10].src} className="object-cover size-full hover:scale-105 transition-transform duration-300" />
                        </div>
                    </div>

                    {/* Ligne 7: Trois images */}
                    <div className="grid grid-cols-3 gap-1">
                        <div className="aspect-square rounded-2xl overflow-hidden cursor-pointer" onClick={() => openFullscreen(11)}>
                            <Image alt={images[11].alt} src={images[11].src} className="object-cover size-full hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="aspect-square rounded-2xl overflow-hidden cursor-pointer" onClick={() => openFullscreen(12)}>
                            <Image alt={images[12].alt} src={images[12].src} className="object-cover size-full hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="aspect-square rounded-2xl overflow-hidden cursor-pointer" onClick={() => openFullscreen(13)}>
                            <Image alt={images[13].alt} src={images[13].src} className="object-cover size-full hover:scale-105 transition-transform duration-300" />
                        </div>
                    </div>

                    {/* Ligne 8: Image unique */}
                    <div className="w-full aspect-video rounded-2xl overflow-hidden cursor-pointer" onClick={() => openFullscreen(14)}>
                        <Image alt={images[14].alt} src={images[14].src} className="object-cover size-full hover:scale-105 transition-transform duration-300" />
                    </div>
                </div>
            </div>



            {/* Fullscreen Modal */}
            {fullscreenImage !== null && (
                <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center" >
                    <div className="absolute top-4 right-4 flex gap-4">
                        <button
                            onClick={closeFullscreen}
                            className="cursor-pointer text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </div>

                    <div className="relative w-10/12 h-5/6 max-h-screen  " onClick={closeFullscreen}>
                        <Image
                            src={images[fullscreenImage].src}
                            alt={images[fullscreenImage].alt}
                            className="object-contain w-full h-full"
                            layout="fill"
                        />
                    </div>

                    <div className="absolute bottom-4 flex justify-center items-center gap-4 z-20">
                        <button
                            onClick={() => navigateFullscreen(-1)}
                            className="text-white bg-black bg-opacity-50 rounded-full p-4 hover:bg-opacity-70 transition-all"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="15 18 9 12 15 6"></polyline>
                            </svg>
                        </button>
                        <div className="text-white text-lg font-poppins">
                            {fullscreenImage + 1} / {images.length}
                        </div>
                        <button
                            onClick={() => navigateFullscreen(1)}
                            className="text-white bg-black bg-opacity-50 rounded-full p-4 hover:bg-opacity-70 transition-all"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </button>
                    </div>
                </div>
            )}


            {/* -------------------------------- design haut ------------------------------- */}


            <div className=" -z-20  h-96 overflow-hidden  lg:grid grid-cols-5 grid-rows-5 gap-1  w-1/3 inset-0  scale-150 absolute origin-top-left text-nail-special2  ">
                {/* Première rangée */}
                <div className="col-span-2 row-start-1 font-cherry-bomb-one text-4xl overflow-hidden">Polished Perfection</div>
                <div className="col-start-3 row-start-1 font-fontdiner-swanky text-2xl"> Nail Art Studio</div>
                <div className="col-span-2 col-start-4 row-start-1 font-fontdiner-swanky text-4xl overflow-hidden">Sparkle & Shine</div>

                {/* Deuxième rangée */}
                <div className=" row-span-4 col-start-1 row-start-2 font-cherry-bomb-one flex items-center justify-center flex-col space-y-10">
                    <div className=' -rotate-90  '>Luxury Hand & Foot Care </div>
                    <div className=' -rotate-90  '>Luxury Hand & Foot Care </div>
                    <div className=' -rotate-90  '>Luxury Hand & Foot Care </div>
                    <div className=' -rotate-90  '>Luxury Hand & Foot Care </div>
                </div>
                <div className="col-span-2 col-start-2 row-start-2 font-bangers text-5xl overflow-hidden">Nailed By Irene</div>
                <div className="col-span-2 col-start-4 row-start-2 font-bangers text-5xl">Chic & Glossy</div>

                {/* Troisième rangée */}
                <div className="col-span-2 col-start-2 row-start-3 font-fontdiner-swanky text-5xl text-center flex items-center -rotate-12 overflow-hidden">Vivid Nails</div>
                <div className="col-span-2 col-start-4 row-start-3 row-end-5 overflow-hidden flex justify-center items-center text-4xl font-bangers tracking-wider font-bold"><div className='text-center m-auto  -rotate-90 h-fit w-full '>Hydrating Hand Treatments</div></div>

                {/* Quatrième rangée */}
                <div className="col-start-2 row-start-4 font-cherry-bomb-one text-2xl">Creative Nails</div>
                <div className="col-start-3 row-start-4 font-fontdiner-swanky rotate-6">Unique Designs. Unique Designs</div>

                {/* Cinquième rangée */}
                <div className="col-span-2 col-start-2 row-start-5 font-bangers text-2xl word-spacing tracking-wider">Flawless Finish Flawless Finish Flawless Finish</div>
                <div className="col-span-2 col-start-4 row-start-5 font-cherry-bomb-one text-4xl rotate-12">Sculpted Acrylics</div>
            </div>




            <div className=" -z-20  h-96 overflow-hidden  lg:grid grid-cols-5 grid-rows-5 gap-1  w-1/3 -top-20 right-48 rotate-12  scale-150 absolute origin-top-left text-nail-special2  ">
                {/* Première rangée */}
                <div className="col-span-2 row-start-1 font-cherry-bomb-one text-4xl overflow-hidden">Polished Perfection</div>
                <div className="col-start-3 row-start-1 font-fontdiner-swanky text-2xl"> Nail Art Studio</div>
                <div className="col-span-2 col-start-4 row-start-1 font-fontdiner-swanky text-4xl overflow-hidden">Sparkle & Shine</div>

                {/* Deuxième rangée */}
                <div className=" row-span-4 col-start-1 row-start-2 font-cherry-bomb-one flex items-center justify-center flex-col space-y-10">
                    <div className=' -rotate-90  '>Luxury Hand & Foot Care </div>
                    <div className=' -rotate-90  '>Luxury Hand & Foot Care </div>
                    <div className=' -rotate-90  '>Luxury Hand & Foot Care </div>
                    <div className=' -rotate-90  '>Luxury Hand & Foot Care </div>
                </div>
                <div className="col-span-2 col-start-2 row-start-2 font-bangers text-5xl overflow-hidden">Nailed By Irene</div>
                <div className="col-span-2 col-start-4 row-start-2 font-bangers text-5xl">Chic & Glossy</div>

                {/* Troisième rangée */}
                <div className="col-span-2 col-start-2 row-start-3 font-fontdiner-swanky text-5xl text-center flex items-center -rotate-12 overflow-hidden">Vivid Nails</div>
                <div className="col-span-2 col-start-4 row-start-3 row-end-5 overflow-hidden flex justify-center items-center text-4xl font-bangers tracking-wider font-bold"><div className='text-center m-auto  -rotate-90 h-fit w-full '>Hydrating Hand Treatments</div></div>

                {/* Quatrième rangée */}
                <div className="col-start-2 row-start-4 font-cherry-bomb-one text-2xl">Creative Nails</div>
                <div className="col-start-3 row-start-4 font-fontdiner-swanky rotate-6">Unique Designs. Unique Designs</div>

                {/* Cinquième rangée */}
                <div className="col-span-2 col-start-2 row-start-5 font-bangers text-2xl word-spacing tracking-wider">Flawless Finish Flawless Finish Flawless Finish</div>
                <div className="col-span-2 col-start-4 row-start-5 font-cherry-bomb-one text-4xl rotate-12">Sculpted Acrylics</div>
            </div>


            <div className=' -z-20 w-full h-96 absolute inset-0  origin-top scale-y-150  bg-radial-[at_40%_75%] md:bg-radial-[at_50%_75%] from-white via-white via-55% md:via-65% to-transparent to-100%'></div>






            {/* -------------------------------- design footer ------------------------------- */}


            <div className=" -z-20  h-96 overflow-hidden  lg:grid grid-cols-5 grid-rows-5 gap-1  w-1/3  bottom-0 scale-150 absolute origin-top-left text-nail-special2  ">
                {/* Première rangée */}
                <div className="col-span-2 row-start-1 font-cherry-bomb-one text-4xl overflow-hidden">Polished Perfection</div>
                <div className="col-start-3 row-start-1 font-fontdiner-swanky text-2xl"> Nail Art Studio</div>
                <div className="col-span-2 col-start-4 row-start-1 font-fontdiner-swanky text-4xl overflow-hidden">Sparkle & Shine</div>

                {/* Deuxième rangée */}
                <div className=" row-span-4 col-start-1 row-start-2 font-cherry-bomb-one flex items-center justify-center flex-col space-y-10">
                    <div className=' -rotate-90  '>Luxury Hand & Foot Care </div>
                    <div className=' -rotate-90  '>Luxury Hand & Foot Care </div>
                    <div className=' -rotate-90  '>Luxury Hand & Foot Care </div>
                    <div className=' -rotate-90  '>Luxury Hand & Foot Care </div>
                </div>
                <div className="col-span-2 col-start-2 row-start-2 font-bangers text-5xl overflow-hidden">Nailed By Irene</div>
                <div className="col-span-2 col-start-4 row-start-2 font-bangers text-5xl">Chic & Glossy</div>

                {/* Troisième rangée */}
                <div className="col-span-2 col-start-2 row-start-3 font-fontdiner-swanky text-5xl text-center flex items-center -rotate-12 overflow-hidden">Vivid Nails</div>
                <div className="col-span-2 col-start-4 row-start-3 row-end-5 overflow-hidden flex justify-center items-center text-4xl font-bangers tracking-wider font-bold"><div className='text-center m-auto  -rotate-90 h-fit w-full '>Hydrating Hand Treatments</div></div>

                {/* Quatrième rangée */}
                <div className="col-start-2 row-start-4 font-cherry-bomb-one text-2xl">Creative Nails</div>
                <div className="col-start-3 row-start-4 font-fontdiner-swanky rotate-6">Unique Designs. Unique Designs</div>

                {/* Cinquième rangée */}
                <div className="col-span-2 col-start-2 row-start-5 font-bangers text-2xl word-spacing tracking-wider">Flawless Finish Flawless Finish Flawless Finish</div>
                <div className="col-span-2 col-start-4 row-start-5 font-cherry-bomb-one text-4xl rotate-12">Sculpted Acrylics</div>
            </div>




            <div className=" -z-20  h-96 overflow-hidden  lg:grid grid-cols-5 grid-rows-5 gap-1  w-1/3 bottom-0 right-48 rotate-12  scale-150 absolute origin-top-left text-nail-special2  ">
                {/* Première rangée */}
                <div className="col-span-2 row-start-1 font-cherry-bomb-one text-4xl overflow-hidden">Polished Perfection</div>
                <div className="col-start-3 row-start-1 font-fontdiner-swanky text-2xl"> Nail Art Studio</div>
                <div className="col-span-2 col-start-4 row-start-1 font-fontdiner-swanky text-4xl overflow-hidden">Sparkle & Shine</div>

                {/* Deuxième rangée */}
                <div className=" row-span-4 col-start-1 row-start-2 font-cherry-bomb-one flex items-center justify-center flex-col space-y-10">
                    <div className=' -rotate-90  '>Luxury Hand & Foot Care </div>
                    <div className=' -rotate-90  '>Luxury Hand & Foot Care </div>
                    <div className=' -rotate-90  '>Luxury Hand & Foot Care </div>
                    <div className=' -rotate-90  '>Luxury Hand & Foot Care </div>
                </div>
                <div className="col-span-2 col-start-2 row-start-2 font-bangers text-5xl overflow-hidden">Nailed By Irene</div>
                <div className="col-span-2 col-start-4 row-start-2 font-bangers text-5xl">Chic & Glossy</div>

                {/* Troisième rangée */}
                <div className="col-span-2 col-start-2 row-start-3 font-fontdiner-swanky text-5xl text-center flex items-center -rotate-12 overflow-hidden">Vivid Nails</div>
                <div className="col-span-2 col-start-4 row-start-3 row-end-5 overflow-hidden flex justify-center items-center text-4xl font-bangers tracking-wider font-bold"><div className='text-center m-auto  -rotate-90 h-fit w-full '>Hydrating Hand Treatments</div></div>

                {/* Quatrième rangée */}
                <div className="col-start-2 row-start-4 font-cherry-bomb-one text-2xl">Creative Nails</div>
                <div className="col-start-3 row-start-4 font-fontdiner-swanky rotate-6">Unique Designs. Unique Designs</div>

                {/* Cinquième rangée */}
                <div className="col-span-2 col-start-2 row-start-5 font-bangers text-2xl word-spacing tracking-wider">Flawless Finish Flawless Finish Flawless Finish</div>
                <div className="col-span-2 col-start-4 row-start-5 font-cherry-bomb-one text-4xl rotate-12">Sculpted Acrylics</div>
            </div>


            <div className=' -z-20 w-full h-96 absolute bottom-0  origin-top scale-y-150  bg-radial-[at_50%_0%] from-white via-white via-60% to-transparent to-100%'></div>

        </section>
    )
}

export default page